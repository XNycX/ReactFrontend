import {combineReducers} from 'redux';
import credentials from './dataLogin-reducer';
import films from './searchFilms-reducer';
import orders from './orders-reducer';


const rootReducer = combineReducers({
    credentials,
    films,
    orders
});

export default rootReducer;