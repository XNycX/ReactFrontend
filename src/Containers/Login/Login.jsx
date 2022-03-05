import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    let navigate = useNavigate();
    //1-Hooks (equivalen al estado en los componentes de clase)
    const [credentials, setCredentials] = useState("");
    const [dataUser, setDataUser] = useState({email: "", password: ""});
    const [msgError, setMsgError] = useState("");
    const [msgError2, setMsgError2] = useState("");

    //Funciones handlers
    const rellenarDatos = (e) => {
        //Funcion handler que setea los datos en el hook...[e.target.name] obtiene 
        //el nombre de la propiedad a cambiar, e.target.value tiene el valor..ambos
        //obtienen los datos del evento, que es el hecho de escribir en un input en concreto
        setDataUser({...dataUser, [e.target.name]: e.target.value})
    };
    const checkPassword = (e) => {

        if(e.target.value.length < 4){
            setMsgError("EL password debe de tener 4 caracteres");
        } else {
            setMsgError("");
        }

    };
    //3-useEffect

    // useEffect(()=>{
    //     //Este useEffect, sólo se ejecuta la primera vez que
    //     //se monta el componente. Se diferencia por el argumento 
    //     //de array vacio que hemos puesto

    //     console.log("Me he montado por primera y única vez");

    // },[]);

    useEffect(()=>{
        //Este useEffect se ejecutará por cada vez que se actualize el 
        //componente. Es decir, cuando cambie un hook y por lo tanto se actualize el componente.

        //Es peligroso cambiar hooks aqui, si no tenemos condicionales que eviten
        //que entremos en bucles infinitos.
        // console.log("Credentials vale....", credentials);

        if(credentials?.token !== undefined){

            setTimeout(()=>{
                navigate("/");
            }, 3000);
        };

    });
    //Funciones locales
    const login = async () => {

        try {

            //Me invento las credentials
            let body = {
                email: dataUser.email,
                password: dataUser.password
            };
            let result = await axios.post("https://movie-db-geekshubs.herokuapp.com/usuarios/login",body);

            //Cambiamos el valor del hook credentials, por lo tanto se recargará el componente
            if(result.data === "Usuario o contraseña inválido"){
                setMsgError2("Usuario o contraseña inválido")
            }else{
                setCredentials(result.data);
            }
        }catch (error) {
            console.log(error)
        };  
    };
    const takeMeRegister = () => {
        setTimeout(() => {
            navigate("/register");
        }, 1000);
    };
    //2-Render (lo que pinta en pantalla)
    if(credentials?.token !== undefined){
        return(
            <div>Hola {credentials?.user?.name}, Bienvenido a Films2022, 
            donde encontrar esa pelicula sin publicidad de por medio ya no es un milagro.</div>
        )
    } else {     
        return(            
            <div className='designLogin'>
                <div className="designFormulario">
                    <input type="email" name="email" id="email" title="email" placeholder="Correo Electrónico" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e); checkPassword(e)}}/>
                    {msgError}
                    {msgError2}
                </div>
                <div className="loginDesign espacio" onClick={()=>login()}>LOG ME!</div>
                En caso de no estar registrad@, debes registrarte
                <div className='buttonRegister2' onClick={()=>takeMeRegister()}>
                    HAZ CLIC AQUÍ PARA REGISTRARTE
                </div>
            </div>
        );
    };  
};
export default Login;
