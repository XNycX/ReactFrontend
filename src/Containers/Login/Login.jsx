import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/user';

const Login = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState("");
    const [dataUser, setDataUser] = useState({email: "", password: ""});
    const [msgError, setMsgError] = useState("");
    const [msgError2, setMsgError2] = useState("");
    //Funciones handlers
    const fillData = (e) => {
        setDataUser({...dataUser, [e.target.name]: e.target.value})
    };
    const checkPassword = (e) => {
        if(e.target.value.length < 4){
            setMsgError("EL password debe de tener 4 caracteres");
        } else {
            setMsgError("");
        }
    };

    useEffect(()=>{
        if(credentials?.token !== undefined){

            setTimeout(()=>{
                navigate("/");
            }, 3000);
        };

    });

    const onSubmit = async () => {
        try {
            login(dataUser)
            // let result = await axios.post("https://movie-db-geekshubs.herokuapp.com/usuarios/login",dataUser);
            // if(result.data === "Usuario o contraseña inválido"){
            //     setMsgError2("Usuario o contraseña inválido")
            // } else {
                setTimeout(()=>{
                    navigate("/");
                },1500);
            // }
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
                    <input type="email" name="email" id="email" title="email" placeholder="Correo Electrónico" autoComplete="off" onChange={(e)=>{fillData(e)}}/>
                    <input type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{fillData(e); checkPassword(e)}}/>
                    {msgError}
                    {msgError2}
                </div>
                <div className="loginButton space" onClick={()=>onSubmit()}>LOG ME!</div>
                En caso de no estar registrad@, debes registrarte
                <div className='buttonRegister2' onClick={()=>takeMeRegister()}>
                    HAZ CLIC AQUÍ PARA REGISTRARTE
                </div>
            </div>
        );
    };  
};
export default connect()(Login);
