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

export default function Home({ data }) {
  const [img, setImg] = useState(0);
  const mobile = data.mobile;
  const desktop = data.desktop;

  const swiperRef = useRef(null);

  function handleMouseMove() {
    setImg(Math.floor(Math.random() * desktop.length));
  }

  console.log("mobile --->", mobile);

  return (
    <div className='hero' id='#home'>
      <Head>
        <title>Fermin Guerrero</title>
        <meta name='description' content='Fermin Guerrero graphic designer and typefase designer web/portfolio.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main-wrapper'>
        <img
          style={{
            objectPosition: "center",
            objectFit: "cover",
            position: "relative",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            right: "0",
          }}
          alt='graphic-design-image'
          src='https://res.cloudinary.com/lali/image/upload/v1643546446/BeyondTheBox_dpyev1.jpg'
          className='img-desktop'
        />
        <img
          style={{
            top: "0",
            left: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
          }}
          src={`${desktop[img]}`}
          alt='fermin-designs'
          onMouseMove={handleMouseMove}
          className='img-desktop'
        />

        <div className='mobile-carousel-container'>
          <Swiper spaceBetween={10} slidesPerView={1} ref={swiperRef} autoplay={{ delay: 2000 }} speed={1300} allowTouchMove={false} pagination={{ clickable: true }}>
            {mobile.map((img, index) => (
              <div key={index}>
                <SwiperSlide>
                  <img src={img} alt={`graphic-design-img-${index}`} className='mobile-image' />{" "}
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </main>

      <Footer component='home' />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getLandingData();
  return {
    props: {
      data,
    },
  };
}
