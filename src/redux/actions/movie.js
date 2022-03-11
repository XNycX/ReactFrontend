import store from "../store";
import axios from "axios";
import { GET_MOVIES,MOVIE_DETAIL } from "../types";

const API_URL = "http://localhost:5500";

export const getMovies = async () => {
    try {
      const res = await axios.get(API_URL + "/movies");
      store.dispatch({
        type: GET_MOVIES,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
};
export const getMovieById = async (id) => {
  try {
    const res = await axios.get(API_URL + "/movies/" +id);
    store.dispatch({
      type: MOVIE_DETAIL,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};