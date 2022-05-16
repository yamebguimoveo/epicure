import React from "react";
import { useMediaQuery } from "react-responsive";
import { getFirstName } from "../../../utils/helpers";
import { Card } from "../../reusable/Card";
import { CardSwiper } from "../../reusable/CardSwiper";

export const ChefOfTheWeek: React.FC<{ chef: Chef }> = (props: {
  chef: Chef;
}) => {
  const isMobile = useMediaQuery({ query: "(max-width:500px)" });

  return (
    <section className='week-chef-section align-start flex-column container-1100'>
      <h3 className='section-title align-center'>CHEF OF THE WEEK:</h3>
      <div className='chef-middle-content flex-row'>
        <img
          className='chef-image'
          src={props.chef.chefImageChef}
          alt='chef'
        ></img>
        <p className='chef-description align-center'>
          {props.chef.chefDescription}
        </p>
      </div>
      <p className='secondary-title'>
        {getFirstName(props.chef.chefName)}’s restaurants:
      </p>
      {isMobile ? (
        <CardSwiper items={props.chef.ownRestaurant} isMinimalCardShow={true} />
      ) : (
        <div className='chef-restaurants-cards flex-row'>
          {/* need to replace key value */}
          {props.chef.ownRestaurant.map((restaurant, index) => {
            return <Card key={index} data={restaurant} isMinimalShow={true} />;
          })}
        </div>
      )}
    </section>
  );
};
