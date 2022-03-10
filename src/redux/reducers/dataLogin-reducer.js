import { LOGIN, LOGOUT, MODIFY_CREDENTIALS,RESET } from "../types";

const initialState = {
  token: "",
  user: null,
  message: "",
};

const dataLoginReducer = (state = initialState, action) => {
  console.log('ee',action.payload?.message)
  switch (action.type) {
    //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        message: action.payload.message,
      };

    //BORRAMOS DATOS GUARDADOS DE USUARIO LOGUEADO Y DEJAMOS VALORES VACIOS
    case LOGOUT:
      return initialState;
    //MODIFICAMOS LOS DATOS QUE TENEMOS GUARDADOS EN ESTE ESTADO CON LOS VALORES QUE METAMOS POR INPUT EN Perfil.js
    case MODIFY_CREDENTIALS:
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
      case RESET:
        return {
          ...state,
          message: "",
        };
    default:
      return state;
  }
};

export default dataLoginReducer;
