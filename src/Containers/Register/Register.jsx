import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/user";

const Register = () => {
  let navigate = useNavigate();
  //Hooks
  const [dataUser, setDataUser] = useState({
    name: "",
    surname: "",
    city: "",
    age: "",
    email: "",
    dni: "",
    password: "",
    password2: "",
    telephone: "",
  });
  const [msgError, setMsgError] = useState("");
  const fillData = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  //Funciones locales del componente
  const handleSubmit = async () => {
    if (dataUser.password !== dataUser.password2) {
      return setMsgError("Los dos password deben de coincidir");
    } else {
      setMsgError("");
    }
    try {
      register(dataUser);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="designRegister">
      <div className="cardRegister">
        <div className="upCardRegister">Formulario de Registro</div>
        <div className="middleCardRegister">
          <input
            type="text"
            name="name"
            id="name"
            title="name"
            placeholder="Nombre:"
            autoComplete="off"
            onChange={(e) => {
              fillData(e);
            }}
          />
          <input
            type="text"
            name="surname"
            id="surname"
            title="surname"
            placeholder="Apellido:"
            autoComplete="off"
            onChange={(e) => {
              fillData(e);
            }}
          />
          <input
            type="text"
            name="city"
            id="city"
            title="city"
            placeholder="Ciudad:"
            autoComplete="off"
            onChange={(e) => {
              fillData(e);
            }}
          />
          <input
            type="text"
            name="age"
            id="age"
            title="age"
            placeholder="Edad:"
            autoComplete="off"
            onChange={(e) => {
              fillData(e);
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            title="email"
            placeholder="Correo Electrónico:"
            autoComplete="off"
            onChange={(e) => {
              fillData(e);
            }}
          />
          <input
            type="text"
            name="dni"
            id="dni"
            title="dni"
            placeholder="DNI"
            autoComplete="off"
            onChange={(e) => {
              fillData(e);
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            title="password"
            placeholder="Contraseña"
            autoComplete="off"
            onChange={(e) => {
              fillData(e);
            }}
          />
          <input
            type="password"
            name="password2"
            id="password2"
            title="password2"
            placeholder="Repite contraseña"
            autoComplete="off"
            onChange={(e) => {
              fillData(e);
            }}
          />
          <input
            type="text"
            name="telephone"
            id="telephone"
            title="telephone"
            placeholder="Telefono"
            autoComplete="off"
            onChange={(e) => {
              fillData(e);
            }}
          />
        </div>
        <div className="bottomCardRegister">
          {msgError}
          <div className="buttonRegister" onClick={() => handleSubmit()}>
            Registro
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
