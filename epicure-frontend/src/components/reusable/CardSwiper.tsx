import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy } from "swiper";
import { Card } from './Card';
import "swiper/css";
import "swiper/css/lazy";

export const CardSwiper: React.FC<{ items: Restaurant[] | Dish[] , isDish?:boolean }> = (props: { items: Restaurant[] | Dish[], isDish?: boolean }) => {
  return (
    <div className='card-swiper container-1100 flex-center'>
      <Swiper
        
        slidesPerView={3}
        lazy={true}
        modules={[Lazy]}
        spaceBetween={0}
      >
        {props.items.map((item) => {
          return (
            <SwiperSlide>
              <div className='flex-center flex-column gap-20'>
                {!!props.isDish && <h3 className='above-card-title'> {item.restaurantName} </h3>}
              <Card data={item} key={item.restaurantName} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
