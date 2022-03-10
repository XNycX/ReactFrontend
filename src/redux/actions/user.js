import store from "../store";
import axios from "axios";
import { LOGIN, MODIFY_CREDENTIALS, RESET } from "../types";

const API_URL = "http://localhost:5500";

export const login = async (user) => {
  try {
    const res = await axios.post(API_URL + "/users/login", user);
    store.dispatch({
      type: LOGIN,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id, dataUser) => {
  try {
    const credentials = JSON.parse(
      localStorage.getItem("redux_localstorage_simple_credentials")
    );
    let config = {
      headers: { Authorization: credentials.token },
    };
    let res = await axios.put(
      `http://localhost:5500/users/${id}`,
      dataUser,
      config
    );
    await store.dispatch({ type: MODIFY_CREDENTIALS, payload: res.data });


    return res;
  } catch (error) {
    console.log(error);
  }
};
