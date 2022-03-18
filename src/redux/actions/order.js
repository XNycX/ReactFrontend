import store from "../store";
import axios from "axios";
import { GET_ORDERS, DELETE_ORDER } from "../types";
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

export const deleteOrder = async (id) => {
    try {
        const credentials = JSON.parse(
            localStorage.getItem("redux_localstorage_simple_credentials")
        );
        let config = {
            headers: { Authorization: credentials.token },
        };
        const res = await axios.delete(API_URL + `/orders/${id}`, config);
        store.dispatch({ type: DELETE_ORDER, payload: res.data })
        return res
    } catch (error) {
        console.log(error);
    }
};