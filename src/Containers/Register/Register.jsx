import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkError } from "../../utiles";
import "./Register.css";
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
    //Array de distintos campos
    setMsgError("");
    let error = "";
    let arrayFields = Object.entries(dataUser);
    // //1 comprobación de errores antes de enviar al backend
    if (dataUser.password !== dataUser.password2) {
      return setMsgError("Los dos password deben de coincidir");
    } else {
      setMsgError("");
    }
    for (let element of arrayFields) {
      error = checkError(element[0], element[1]);

      if (error !== "ok") {
        setMsgError(error);
        return;
      }
    }
    //3 envio de axios
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
        <div className="upCardRegister">Registration Form</div>
        <div className="middleCardRegister">
          <input
            type="text"
            name="name"
            id="name"
            title="name"
            placeholder="Name:"
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
            placeholder="Surname:"
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
            placeholder="City:"
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
            placeholder="Age:"
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
            placeholder="Email:"
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
            placeholder="Password"
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
            placeholder="Repeat password"
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
            placeholder="Telephone"
            autoComplete="off"
            onChange={(e) => {
              fillData(e);
            }}
          />
        </div>
        <div className="bottomCardRegister">
          {msgError}
          <div className="buttonRegister" onClick={() => handleSubmit()}>
            Register
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
