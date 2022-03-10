import {combineReducers} from 'redux';
import credentials from './dataLogin-reducer';
import films from './searchFilms-reducer';


const rootReducer = combineReducers({
    credentials,
    films
});

export default rootReducer;