import store from "../store";
import axios from "axios";
import { GET_MOVIES,MOVIE_DETAIL,GET_MOVIES_BY_TITLE } from "../types";

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
export const getMoviesByTitle = async(title) => {

  try {
    const res = await axios.get(API_URL + "/movies/title/" + title)
    await store.dispatch({ type: GET_MOVIES_BY_TITLE, payload: res.data })
      return res.data
  } catch (error) {
      console.log(error)
  }

};