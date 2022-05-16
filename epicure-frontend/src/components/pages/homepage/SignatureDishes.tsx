import React from 'react'
import { CardSwiper } from '../../reusable/CardSwiper';


export const SignatureDishes: React.FC<{ dishes: Dish[] }> = (props: {dishes:Dish[]}) => {
  return (
    <section className='signature-dishes-section'>
      <h3 className='section-title'>SIGNATURE DISH OF:</h3>
      <CardSwiper items={props.dishes} isDish={true }/>
    </section>
  );
}
