import React from "react";
import { Link } from "react-router-dom";
import { CardSwiper } from "../../reusable/CardSwiper";

export const RecommendedRestaurants: React.FC<{
  restaurants: Restaurant[];
}> = (props: { restaurants: Restaurant[] }) => {

  return (
    <section className='recommended-restaurant-section'>
      <h3 className='section-title'>THE POPULAR RESTAURANTS IN EPICURE:</h3>
      <CardSwiper items={props.restaurants} />
      <Link to='/restaurants' className='flex-row align-self-end'>
        <span className='all-restaurant-link'>
          <p>All Restaurants</p>
          <img
            src='assets/icons/all-restaurants-arrows.svg'
            alt='arrows-icon'
          ></img>
        </span>
      </Link>
    </section>
  );
};
