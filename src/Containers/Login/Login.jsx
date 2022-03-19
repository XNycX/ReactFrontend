import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/user';
import { Input } from '@mantine/core';
import { At,Lock } from 'tabler-icons-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
    AOS.init();
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
            setMsgError(<b>The password must have 4 characters</b>);
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
                setTimeout(()=>{
                    navigate("/");
                },1500);
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
                <div className="cardLogin" data-aos="fade-right">
                    <div className="designFormulario">
                        <b>Email:</b>
                        <Input type="email"
                            icon={<At />}
                            name="email" id="email" title="email" placeholder="Email" autoComplete="off" onChange={(e) => { fillData(e) }} />
                        <b>Password:</b>
                        <Input type="password"
                            icon={<Lock />}
                            name="password" id="password" title="password" placeholder="Password" autoComplete="off" onChange={(e) => { fillData(e); checkPassword(e) }} />
                    {msgError}
                    {msgError2}
                </div>
                <div className="loginButton space" onClick={()=>onSubmit()}><b>Login</b></div>
                <b>If you are not registered, you must register</b>
                <div className='buttonRegister2' onClick={()=>takeMeRegister()}>
                    Click here for Register
                </div>
                </div>
                </div>
        );
    };  
};
export default connect()(Login);
