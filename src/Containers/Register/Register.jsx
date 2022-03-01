import React from 'react';
import Button from '../../Components/Button/Button';
import './Register.css';

const Register = () => {


    return(
        <div className='designRegister'>
            soy Register
            <Button destino={"Home"} url={"/"}/>
            <Button destino={"Login"} url={"/login"}/>
            <Button destino={"Profile"} url={"/profile"}/>
        </div>
    )
};

export default Register;