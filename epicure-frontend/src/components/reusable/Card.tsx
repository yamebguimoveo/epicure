import React, { Fragment } from "react";

const isDish = (object: Dish | Restaurant): object is Dish => {
  return (object as Dish).dishName !== undefined;
};

export const Card: React.FC<{
  data: Dish | Restaurant;
  isMinimalShow?: boolean;
}> = (props: { data: Dish | Restaurant; isMinimalShow?: boolean }) => {
  const specificClassName: string = isDish(props.data)
    ? "dish-card"
    : !!props.isMinimalShow
    ? "restaurant-minimal-card"
    : "restaurant-card";

  return (
    <article
      className={specificClassName.concat(
        " card flex-column flex-center space-between"
      )}
    >
      <img src={props.data.imagePath} alt='dish'></img>
      {isDish(props.data) ? (
        <h2 className='card-title'>{props.data.dishName}</h2>
      ) : (
        <h2 className='card-title'>{props.data.restaurantName}</h2>
      )}
      {isDish(props.data) && (
        <div className="dish-footer flex-column flex-center space-around">
          <p>{props.data.dishDescription}</p>
          <div className='sensitivities-icons flex-row'>
            {props.data.dishSensitivities.map((sensitivity) => {
              return (
                <img src={`assets/icons/${sensitivity}-icon.svg`} alt='sensitivity-icon'></img>
              )
            })}
          </div>
          <div className='flex-center flex-row gap-10'>
            <div className='price-line'></div>
            <p className='price'>{"₪" + props.data.dishPrice}</p>
            <div className='price-line'></div>
          </div>
        </div>
      )}
      {!isDish(props.data) && !props.isMinimalShow && <p>{props.data.chef}</p>}
    </article>
  );
};

export const DishFooter: React.FC<{ data: Dish }> = (props: { data: Dish }) => {
  return (
    <div className='flex-column'>
      <p>{props.data.dishDescription}</p>
      <div className='flex-center flex-row '>
        <div className='price-line'></div>
        <p>{"₪" + props.data.dishPrice}</p>
        <div className='price-line'></div>
      </div>
    </div>
  );
};
