import React from 'react'
import { Card } from '../../reusable/Card';
import { CardSwiper } from '../../reusable/CardSwiper';


export const SignatureDishes: React.FC<{ dishes: Dish[] }> = (props: {dishes:Dish[]}) => {
  return (
    <section className='signature-dishes-section flex-center container-1100 gap-30 flex-column container'>
      <h3 className='section-title'>SIGNATURE DISH OF :</h3>
      <CardSwiper items={props.dishes} isDish={true }/>
    </section>
  );
}
