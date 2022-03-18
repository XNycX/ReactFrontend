import store from "../store";
import axios from "axios";
import { LOGIN, MODIFY_CREDENTIALS, RESET,USER_INFO,GET_USERS, DELETE_USER } from "../types";
const API_URL = "http://localhost:5500";

export const register = async (dataUser) => {
  try {
    let res = await axios.post(API_URL + "/users/register",dataUser);
    return res;
  } catch (error) {
    console.log(error);
  }
};

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
      ` ${API_URL}+/users/${id}`,
      dataUser,
      config
    );
    await store.dispatch({ type: MODIFY_CREDENTIALS, payload: res.data });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async () => {
  try {
    const credentials = JSON.parse(
      localStorage.getItem("redux_localstorage_simple_credentials")
    );
    let config = {
      headers: { Authorization: credentials.token },
    };
    let res = await axios.get(
      `${API_URL}/users/id`,
      config
    );
    await store.dispatch({ type: USER_INFO, payload: res.data });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {

  try {
    const credentials = JSON.parse(
      localStorage.getItem("redux_localstorage_simple_credentials")
    );
    let config = {
      headers: { Authorization: credentials.token },
    };
    let res = await axios.get(
      `${API_URL}/users`,config);
    store.dispatch({ type: GET_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteUser = async (id) => {
  try {
      const credentials = JSON.parse(
          localStorage.getItem("redux_localstorage_simple_credentials")
      );
      let config = {
          headers: { Authorization: credentials.token },
      };
      const res = await axios.delete(API_URL + `/users/delete/${id}`, config);
    store.dispatch({ type: DELETE_USER, payload: res.data })
    return res
  } catch (error) {
    console.log(error);
    
  }
  
};