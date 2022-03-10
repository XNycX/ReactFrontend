import store from "../store";
import axios from "axios";
import { GET_MOVIES } from "../types";

const API_URL = "http://localhost:5500";

export const getMovies = async () => {
    try {
      const res = await axios.get(API_URL + "/movies");
      store.dispatch({
        type: GET_MOVIES,
        payload: res.data,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };