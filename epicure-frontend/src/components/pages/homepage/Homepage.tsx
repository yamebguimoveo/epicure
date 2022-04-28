import React, { Fragment } from "react";
import { AboutUs } from "./AboutUs";
import { ChefOfTheWeek } from "./ChefOfTheWeek";
import { Hero } from "./Hero";
import { IconsSection } from "./IconsSection";
import { RecommendedRestaurants } from "./RecommendedRestaurants";
import { SignatureDishes } from "./SignatureDishes";
//import mock data
import { mockDishes, mockChef, mockRestaurants } from "../../../utils/mockData";

export const Homepage = () => {
  return (
    <Fragment>
      <Hero />
      <RecommendedRestaurants restaurants={mockRestaurants} />
      <SignatureDishes dishes={mockDishes} />
      <IconsSection />
      <ChefOfTheWeek chef={mockChef} />
      <AboutUs />
    </Fragment>
  );
};
