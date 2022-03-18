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
    store.dispatch({ type: GET_MOVIES_BY_TITLE, payload: res.data })
      return res.data
  } catch (error) {
      console.log(error)
  }

};

export const deleteMovies = async (id) => {
  try {
      const credentials = JSON.parse(
          localStorage.getItem("redux_localstorage_simple_credentials")
      );
      let config = {
          headers: { Authorization: credentials.token },
      };
      const res = await axios.delete(API_URL + `/movies/${id}`, config);
      return res
  } catch (error) {
      console.log(error);
  }
};

export const registerMovie = async (dataMovie) => {
  try {
    let res = await axios.post(API_URL + "/movies/register",dataMovie);
    return res;
  } catch (error) {
    console.log(error);
  }
};