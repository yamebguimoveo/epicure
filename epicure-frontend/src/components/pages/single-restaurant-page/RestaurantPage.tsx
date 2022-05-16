import React, { useState } from "react";
import { mockRestaurants, mockDishes } from "../../../utils/mockData";
import { useParams } from "react-router-dom";
import { NavbarButton } from "../resturants/NavbarButton";
import { FilterNavbar } from "../../reusable/FilterNavbar";
import { Card } from "../../reusable/Card";
import Popup from "reactjs-popup";
import { DishModal } from "./DishModal";

type Meal = "Breakfast" | "Lunch" | "Dinner";

export const RestaurantPage = (props: {}) => {
  const { restaurantId } = useParams<string>();
  const [filterTerm, setFilterTerm] = useState<Meal>("Breakfast");
  const [dishModal, setDishModal] = useState<Dish | null>(null);

  const handleClickOnDish = (dish: Dish) => {
    console.log(dish);
    if (dishModal === null) {
      setDishModal(dish);
      document.body.style.overflow = "hidden";
    } else {
      setDishModal(null);
      document.body.style.overflow = "unset";
    }
  };

  const handleCloseModal = () => {
    setDishModal(null);
    document.body.style.overflow = "unset";
  };

  const handleFilter = (newFilterTerm: Meal) => {
    if (newFilterTerm !== filterTerm) {
      setFilterTerm(newFilterTerm);
    }
  };

  let restaurant: Restaurant | undefined;

  if (typeof restaurantId === "string") {
    restaurant = mockRestaurants.find((x) => x.id === parseInt(restaurantId));
  } else {
    return <div>Cannot get this restaurant</div>;
  }

  return (
    <section className='restaurant-page'>
      <img
        className='restaurant-page-image'
        src={restaurant!.imagePath}
        alt={restaurant!.restaurantName}
      ></img>
      <h2 className='restaurant-title'>{restaurant!.restaurantName}</h2>
      <h3 className='restaurant-chef'>{restaurant!.chef}</h3>
      <h4 className='restaurant-availability'>
        <img src={"/assets/icons/clock-icon.svg"} alt='clock'></img>
        <span>Open Now</span>
      </h4>

      <FilterNavbar
        activeFilterTerm={filterTerm}
        filterTerms={["Breakfast", "Lunch", "Dinner"]}
        handlerFunc={handleFilter}
      />
      <div className='dish-cards'>
        {restaurant!.dishesId.map((dishId, index) => {
          return (
            <Popup
              key={index}
              open={dishModal?.id === dishId ? true : false}
              trigger={
                <Card
                  openModalHandler={handleClickOnDish}
                  data={mockDishes.find((dish) => dish.id === dishId)!}
                />
              }
              modal
            >
              <DishModal
                dish={mockDishes.find((dish) => dish.id === dishId)!}
                closeModalHandler={handleCloseModal}
                sideDishes={["White Bread", "Sticky Rice"]}
                changes={["Without Peanuts", "Less Spicy"]}
              />
            </Popup>
          );
        })}
      </div>
    </section>
  );
};
