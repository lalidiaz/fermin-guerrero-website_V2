/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRef } from "react";
import { useState } from "react";
import { getLandingData } from "@/utils/helpers";
import { Footer } from "@/components/index";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

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
    <div className="hero" id="#home">
      <Head>
        <title>Fermin Guerrero</title>
        <meta
          name="description"
          content="Fermin Guerrero graphic designer and typeface designer web/portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-wrapper">
        <div
          className="main-img-background"
          style={{
            backgroundImage: `url(${"https://res.cloudinary.com/lali/image/upload/v1643546446/BeyondTheBox_dpyev1.jpg"})`,
          }}
        >
          <div
            className="top-img-background"
            onMouseMove={handleMouseMove}
            style={{
              backgroundImage: `url(${desktop[img]})`,
            }}
          ></div>
        </div>

        <div className="mobile-carousel-container">
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
                  <img src={img} alt={`graphic-design-img-${index}`} className="mobile-image" />{" "}
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </main>

      <Footer />
    </div>
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
