import { Homepage } from "./pages/homepage/Homepage";
import { Routes,Route } from "react-router-dom";
import { RestaurantsPage } from "./pages/resturants/RestaurantsPage";

export const Main = () => {
  return (
    <main className='main flex-column flex-center'>
      <Routes >
        <Route path="/" element={<Homepage />}></Route>
        <Route path="restaurants" element={<RestaurantsPage/>}></Route>
      </Routes>
    </main>
  );
};
