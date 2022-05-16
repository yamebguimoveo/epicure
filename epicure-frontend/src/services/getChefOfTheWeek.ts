import axios from "axios"
const url = "./data/mockChef.json"

//send http request to get chef of the week for homepage
export const getCOTW = async () => {
    const chef= await axios.get(url);
    console.log(chef.data);
    return chef.data;    
}