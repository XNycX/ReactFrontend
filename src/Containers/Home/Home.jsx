import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css';

const Home = () => {

  let navigate = useNavigate();

  //Primero comprobamos en el hook si tenemos el token (estamos logeados)
  const [credentials, setCredentials] = useState(JSON.parse(localStorage.getItem("dataUser")));

  const takeMeLogin = () => {
    setTimeout(() => {
      navigate("/login");
    }, 1500)
  }

  if (credentials?.dataUser?.token !== undefined) {

    return (
      <div>
        Hola {credentials.dataUser.name}, Bienvenid@ a films2022
      </div>
    )
  } else {
    return (
      <div className='home'>
        Hola foraster@, debes de logearte primero....
        <div className='buttonHome' onClick={() => takeMeLogin()}>
          LOGIN
        </div>
      </div>
            
    )
  }
};
export default Home;