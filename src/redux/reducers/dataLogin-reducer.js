import { LOGIN, LOGOUT, MODIFY_CREDENTIALS } from "../types";

const initialState = {
  token: "",
  user: null,
};

const dataLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    //BORRAMOS DATOS GUARDADOS DE USUARIO LOGUEADO Y DEJAMOS VALORES VACIOS
    case LOGOUT:
      return initialState;
    //MODIFICAMOS LOS DATOS QUE TENEMOS GUARDADOS EN ESTE ESTADO CON LOS VALORES QUE METAMOS POR INPUT EN Perfil.js
    case MODIFY_CREDENTIALS:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default dataLoginReducer;
