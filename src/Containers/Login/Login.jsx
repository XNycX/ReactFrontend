import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '../../Components/Button/Button';
import './Login.css';

const Login = () => {

    //HOOKS
    const [credentials, setCredentials] = useState("");
    
    //Funciones de estado
    useEffect(()=>{
      //Esto tan sólo se ejecuta la PRIMERA vez que se monta el componente
      console.log("hola, me he montado :)");  
    },[]);

    useEffect(()=>{
        //Este useEffect se ejecutara SIEMPRE que se actualize algun hook en el componente
        console.log(credentials, "esto vale credentials");
    });

    //Funciones propias
    const fingiendoLogin = async () => {

        let body = {
            email : "Andreu@gmail.com",
            password : "admin"
        }

        try {
            //Vienen los datos del backend
            let resultado = await axios.post("https://movie-db-geekshubs.herokuapp.com/usuarios/login",body);

            setCredentials(resultado.data);

        } catch (error) {
            console.log(error)
        }
    }

    //Renderizado

    if(credentials?.token !== undefined){
        return(
            <div>{credentials.token}</div>
        )
    }else {

    return(
        <div className='designLogin'>
            soy Login
            <Button destino={"Home"} url={"/"} />
            <div className='fakeLogin' onClick={()=>fingiendoLogin()}>LOGEAME</div>
            <Button destino={"Profile"} url={"/profile"}/>
            <Button destino={"Register"} url={"/register"}/>
        </div>
 )
};

};

export default Login;

