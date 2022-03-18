import { MOVIE_DETAIL,GET_MOVIES,GET_MOVIES_BY_TITLE,DELETE_MOVIE } from '../types';


const initialState = {
    movie: {},
    movies: [],
};

const searchFilmsReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case MOVIE_DETAIL :
            return {
                ...state,
                movie: action.payload
              };
        case GET_MOVIES :
             return {
                ...state,
                movies: action.payload
            };
        case GET_MOVIES_BY_TITLE :
                return {
                   ...state,
                   movies: action.payload
            };
        case DELETE_MOVIE:
                return {
                   ...state,
                   movies: state.movies.filter(movie => movie.id !== +action.payload.id)
                 };
        default :
            return state
    }
}

export default searchFilmsReducer;