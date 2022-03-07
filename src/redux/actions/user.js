
import store from '../store';
import axios from 'axios';
import {LOGIN} from '../types';

const API_URL = "http://localhost:5500"

export const login = async(user) => {
    try {
        const res = await axios.post(API_URL+'/users/login', user)
        store.dispatch({
            type: LOGIN,
            payload: res.data
        })
        console.log(res.data)
    } catch (error) {
        console.error(error)
    }
}