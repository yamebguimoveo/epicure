import axios from "axios"
const url = "./data/mockDishes.json"

export const getSignatureDishes = async () => {
    const signatureDishes = await axios.get(url);
    console.log(signatureDishes.data);
    return signatureDishes.data;    
}