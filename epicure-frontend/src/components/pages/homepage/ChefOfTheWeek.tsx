import React from "react";
import { getFirstName } from "../../../utils/helpers";
import { Card } from "../../reusable/Card";

const mockRestaurant: Restaurant = {
  chef: "Asaf Granit",
  restaurantName: "Machne",
  imagePath: "assets/pictures/claro.jpg",
};

export const ChefOfTheWeek: React.FC<{ chef: Chef }> = (props: {
  chef: Chef;
}) => {
  return (
    <section className='week-chef-section align-start flex-column container-1100'>
      <h3 className='section-title align-center'>CHEF OF THE WEEK:</h3>
      <div className='flex-row gap-70'>
        <img src={props.chef.chefImageChef} alt='chef'></img>
        <p className='chef-description align-center'>
          {props.chef.chefDescription}
        </p>
      </div>
      <p className='secondary-title'>
        {getFirstName(props.chef.chefName)}’s restaurants:
      </p>
      <div className='chef-restaurants-cards flex-row gap-10'>
        {/* need to add key value- restaurant name now its same name */}
        {props.chef.ownRestaurant.map((restaurant) => {
          return <Card data={restaurant} isMinimalShow={true} />;
        })}
      </div>
    </section>
  );
};
