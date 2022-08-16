import React from "react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slides.css";

export default function Slides() {
   return (
      <div>
         <Swiper
            className="mySwiper"
            slidesPerView={1}
            loop={true}
            pagination={{
               clickable: true,
               dynamicBullets: true,
            }}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Pagination, Autoplay]}
         >
            <SwiperSlide className="header-slide">
               <img src="pics/first.jpg" alt="" className="header-slide__img" />
            </SwiperSlide>
            <SwiperSlide className="header-slide">
               <img src="pics/seconds.jpg" alt="" className="header-slide__img" />
            </SwiperSlide>
         </Swiper>
      </div>
   );
}
