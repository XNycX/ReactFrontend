import { MOVIE_DETAIL,GET_MOVIES } from '../types';


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
        default :
            return state
    }
}

export default searchFilmsReducer;