import axios from 'axios';

export const getCategoryMovies = async (API_URL) => {
    try{
     let response =  await axios.get(API_URL);
      return  response.data;
    } catch(error){
        console.log("Error while calling the API", error.message);
        return error.response.data;
    }
}