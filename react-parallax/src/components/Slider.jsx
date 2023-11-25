import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import image5 from "../Assets/image5.jpg";
import SwiperCore from "swiper"




import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";


import { Parallax, Pagination, Navigation } from "swiper/modules";
SwiperCore.use([Parallax, Pagination, Navigation]);

export default function App() {
  return (
    <>
     <Swiper
  speed={600}
  effect="cube" // Use the cube effect
  cubeEffect={{
    slideShadows: false,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
  parallax={true}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  loop={true}
  className="mySwiper h-screen z-5"
>
        <div
          slot="container-start"
          className="parallax-bg bg-cover bg-center bg-no-repeat "
          style={{
            "background-image": `url(${image1})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide >
          <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <img className="w-3/4 h-3/4 md:ml-44" src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <img className="w-3/4 h-3/4 md:ml-44" src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <img className="w-3/4 h-3/4 md:ml-44" src={image5} />
        
        </SwiperSlide>
      </Swiper>
    </>
  );
}
