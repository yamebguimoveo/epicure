import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Lazy } from "swiper";
import { Card } from "./Card";
import "swiper/css";
import "swiper/css/lazy";

export const CardSwiper = (props: {
  items: Restaurant[] | Dish[];
  isDish?: boolean;
  isMinimalCardShow?: boolean;
}) => {
  const mobileWidth = props.isMinimalCardShow ? 170 : props.isDish ? 260 : 200;
  const slidesPerView = (window.innerWidth - 35) / mobileWidth;

  const isMobile = useMediaQuery({ query: "(max-width:500px)" });
  return (
    <div className='card-swiper flex-center'>
      <Swiper
        slidesPerView={isMobile ? slidesPerView : 3}
        lazy={true}
        modules={[Lazy]}
        spaceBetween={isMobile ? (props.isMinimalCardShow ? -50 : -30) : 0}
      >
        {props.items.map((item,index) => {
          return (
            <SwiperSlide key={index}>
              <div className='flex-center flex-column'>
                {!!props.isDish && (
                  <h3 className='above-card-title'> {item.restaurantName} </h3>
                )}
                <Card
                  data={item}
                  isMinimalShow={!!props.isMinimalCardShow}
                  key={item.restaurantName}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
