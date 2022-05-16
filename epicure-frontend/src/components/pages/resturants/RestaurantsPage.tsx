import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Card } from "../../reusable/Card";
import { NavbarButton } from "./NavbarButton";

export const RestaurantsPage = (props: { restaurants: Restaurant[] }) => {
  const [filterTerm, setFilterTerm] = useState<string>("All");
  const [restaurantsToRender, setRestaurantsToRender] = useState<Restaurant[]>(
    props.restaurants
  );

  const filterRestaurants = useCallback((
    restaurants: Restaurant[],
    filterTerm: string
  ): Restaurant[] => {
    if (filterTerm === "All") {
      return props.restaurants;
    } else {
      const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.tags.includes(filterTerm)
      );
      console.log(filteredRestaurants);

      return filteredRestaurants;
    }
  },[props.restaurants]);

  // this function set filter term after click navbar buttons
  const handleFilter = (newFilterTerm: string) => {
    if (newFilterTerm !== filterTerm) {
      setFilterTerm(newFilterTerm);
    }
  };

  useEffect(() => {
    setRestaurantsToRender(filterRestaurants(props.restaurants, filterTerm));
  }, [filterRestaurants, filterTerm, props.restaurants]);

  console.log(restaurantsToRender);
  return (
    <Fragment>
      <ul className='restaurants-navbar'>
        <li>
          <NavbarButton
            activeFilterTerm={filterTerm}
            filterTerm='All'
            handler={handleFilter}
          />
        </li>
        <li>
          <NavbarButton
            activeFilterTerm={filterTerm}
            filterTerm='New'
            handler={handleFilter}
          />
        </li>
        <li>
          <NavbarButton
            activeFilterTerm={filterTerm}
            filterTerm='Most Popular'
            handler={handleFilter}
          />
        </li>
        <li>
          <NavbarButton
            activeFilterTerm={filterTerm}
            filterTerm='Open'
            handler={handleFilter}
          />
        </li>
      </ul>
      <div className='restaurants-cards'>
        {restaurantsToRender.map((restaurant, index) => {
          return <Card key={index} data={restaurant} />;
        })}
      </div>
    </Fragment>
  );
};
