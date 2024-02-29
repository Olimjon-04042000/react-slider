import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/nature-1.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-2.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-3.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-4.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-5.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-6.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-7.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-8.jpg" alt="nature" />
        </SwiperSlide>
    
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/nature-1.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-2.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-3.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-4.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-5.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-6.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-7.jpg" alt="nature" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/nature-8.jpg" alt="nature" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
