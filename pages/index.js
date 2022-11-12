/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRef } from "react";
import { useState } from "react";
import { getLandingData } from "@/utils/helpers";
import { MainWrapper, UpperImg, MainImg, MobileCarousel, MobileCarouselImg } from "@/styles/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { HeroContainer } from "@/styles/Home";

SwiperCore.use([Autoplay, Pagination]);

const Home = ({ data }) => {
  const [img, setImg] = useState(0);
  const mobile = data.mobile;
  const desktop = data.desktop;

  const swiperRef = useRef(null);

  function handleMouseMove() {
    setImg(Math.floor(Math.random() * desktop.length));
  }

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
            backgroundImage: `url(${"https://res.cloudinary.com/lali/image/upload/v1643546446/BeyondTheBox_dpyev1.jpg"})`,
          }}
        >
          <UpperImg
            onMouseMove={handleMouseMove}
            style={{
              backgroundImage: `url(${desktop[img]})`,
            }}
          />
        </MainImg>

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
            {mobile.map((img, index) => (
              <div key={index}>
                <SwiperSlide>
                  <MobileCarouselImg src={img} alt={`graphic-design-img-${index}`} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </MobileCarousel>
      </MainWrapper>
    </HeroContainer>
  );
};

export async function getStaticProps() {
  const data = await getLandingData();
  return {
    props: {
      data,
    },
  };
}

export default Home;
