import React, { Fragment, useEffect, useState } from "react";
//import sections for home page
import { Hero } from "./Hero";
import { RecommendedRestaurants } from "./RecommendedRestaurants";
import { SignatureDishes } from "./SignatureDishes";
import { IconsSection } from "./IconsSection";
import { ChefOfTheWeek } from "./ChefOfTheWeek";
import { AboutUs } from "./AboutUs";
//import mock data
import { mockDishes, mockChef, mockRestaurants } from "../../../utils/mockData";
import { MobileLinksSection } from "../../mobile/MobileLinksSection";
//import services
import { getSignatureDishes } from "../../../services/getSignetureDishes";
import { getRecommendedRestaurants } from "../../../services/getRecommendedRestaurant";
import { getCOTW } from "../../../services/getChefOfTheWeek";

export const Homepage = () => {
  const [recommendedRestaurants, setRecommendedRestaurants] = useState<Restaurant[]>([]);
  const [signatureDishes, setSignatureDishes] = useState<Dish[]>([]);
  const [ChefWeek, setChefWeek] = useState<Chef>(mockChef);


  useEffect(() => {
    async function getDishesForHomepage() {
      const dishes = await getSignatureDishes();
      const restaurants = await getRecommendedRestaurants();
      const chef = await getCOTW();
      console.log(dishes);
      setChefWeek(chef);
      setRecommendedRestaurants(restaurants);
      setSignatureDishes(dishes);
    }
    getDishesForHomepage();
  }, []);

  return (
    <Fragment>
      <Hero />
      <MobileLinksSection />
      <RecommendedRestaurants restaurants={recommendedRestaurants} />
      <SignatureDishes dishes={signatureDishes} />
      <IconsSection />
       <ChefOfTheWeek chef={ChefWeek} />
      <AboutUs />
    </Fragment>
  );
};
