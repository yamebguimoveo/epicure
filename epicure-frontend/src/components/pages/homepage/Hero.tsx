import React from "react";
import { SearchInput } from "../../reusable/SearchInput";

export const Hero = () => {
  return (
    <section className=' hero-section flex-center container'>
      <div className='hero-card flex-column flex-center space-around'>
        <div className='hero-card-content flex-center flex-column gap-20'>
          <h2 className='hero-title'>
            Epicure works with the top chef restaurants in Tel Aviv
          </h2>
          <SearchInput />
        </div>
      </div>
    </section>
  );
};
