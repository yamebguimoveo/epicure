import axios from "axios"
const url = "./data/mockRestaurants.json"

export const getRecommendedRestaurants = async () => {
    const RecommendedRestaurants = await axios.get(url);
    console.log(RecommendedRestaurants.data);
    return RecommendedRestaurants.data;    
}