import store from "../store";
import axios from "axios";
const API_URL = "http://localhost:5500";

export const getMoviesByTitle = async(title) => {

    try {
        const res = await axios.get(API_URL + "movies/title/" + title)
        return res.data
    } catch (error) {
        console.log(error)
    }

};