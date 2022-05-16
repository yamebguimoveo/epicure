
interface Restaurant {
  id:number,
  imagePath: string,
  chef: string
  restaurantName: string,
  tags: string[],
  dishesId:number[]
}

interface Dish{
  id: number,
   chef: string,
  restaurantName: string,
  imagePath: string,
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

type RestaurantLocation = {
  from: {
    state : Restaurant;
  }
}
