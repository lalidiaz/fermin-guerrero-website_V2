/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { HeroContainer } from "@/styles/Home";
import { client } from "src/lib/cms";
import {
  MainWrapper,
  MainImg,
  MobileCarousel,
  MobileCarouselImg,
} from "@/styles/Layout";

SwiperCore.use([Autoplay, Pagination]);

const Home = ({ data }) => {
  const swiperRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(
    "https://res.cloudinary.com/lali/image/upload/v1643546446/BeyondTheBox_dpyev1.jpg"
  );

  const desktop = data.filter((item) => item.fields.type === "desktop");
  const mobile = data.filter((item) => item.fields.type === "mobile");

  const handleMouseMove = () => {
    const randomIndex = Math.floor(Math.random() * desktop.length);
    const randomImage = desktop[randomIndex].fields.image;
    setBackgroundImage(randomImage);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getCarrousel = mobile.map((img, i) => (
    <div key={i}>
      <SwiperSlide>
        <MobileCarouselImg
          src={img.fields.image}
          alt={`graphic-design-img-${img.fields.image}`}
        />
      </SwiperSlide>
    </div>
  ));

  return (
    <HeroContainer id="#home">
      <Head>
        <title>Fermín Guerrero</title>
        <meta
          name="description"
          content="Fermín Guerrero graphic designer and typeface designer web/portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainWrapper>
        <MainImg
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        <MobileCarousel>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            ref={swiperRef}
            autoplay={{ delay: 2000 }}
            speed={1300}
            allowTouchMove={false}
            pagination={{ clickable: true }}
          >
            {getCarrousel}
          </Swiper>
        </MobileCarousel>
      </MainWrapper>
    </HeroContainer>
  );
};

export async function getStaticProps() {
  const response = await client.getEntries({ content_type: "home" });

  return {
    props: {
      data: response.items,
    },
  };
}

export default Home;
