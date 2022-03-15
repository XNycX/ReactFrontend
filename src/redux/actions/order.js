import store from "../store";
import axios from "axios";
import { GET_ORDERS } from "../types";
const API_URL = "http://localhost:5500";

export const getOrders = async () => {
    try {
        const credentials = JSON.parse(
            localStorage.getItem("redux_localstorage_simple_credentials")
        );
        let config = {
            headers: { Authorization: credentials.token },
        };
        const res = await axios.get(API_URL + "/orders", config);
        store.dispatch({
            type: GET_ORDERS,
            payload: res.data,
        
        });
        
    } catch (error) {
        console.error(error)
    }
};