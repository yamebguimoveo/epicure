interface Restaurant{
    imagePath: string,
    chef:string
    restaurantName: string,
}

interface Dish extends Restaurant{
    dishName: string,
    dishPrice: number,
    dishDescription: string,
    dishSensitivities:string[]
}

interface Icon{
  iconMeaning: string,
  iconUrl:string 
}

interface Chef{
  chefName: string,
  chefDescription: string,
  chefImageChef:string,
  ownRestaurant: Restaurant[],
}
