import axios from "axios";
const API_URL = process.env.API_URL || "http://localhost:5500";

export const createRent = async (body) => {
  try {
    const credentials = JSON.parse(
      localStorage.getItem("redux_localstorage_simple_credentials")
    );
    let config = {
      headers: { Authorization: credentials.token },
    };

    let res = await axios.post(API_URL + "/orders", body, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};
