import { DELETE_ORDER, GET_ORDERS } from '../types';

const initialState = {
    orders:[],
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
            case DELETE_ORDER:
                return {
                   ...state,
                   orders: state.orders.filter(order => order.id !== +action.payload.id)
                 };
        default:
            return state
    }
};
export default ordersReducer