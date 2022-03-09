import {combineReducers} from 'redux';
import credentials from './dataLogin-reducer';
import search from './searchFilms-reducer';


const rootReducer = combineReducers({
    credentials,
    search
});

export default rootReducer;