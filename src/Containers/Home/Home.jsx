import React from 'react';
import './Home.css';

import Button from '../../Components/Button/Button';

const Home = () => {


    return(
        <div className='designHome'>
            soy Home
            <Button destino={"Login"} url={"/login"}/>
            <Button destino={"Profile"} url={"/profile"}/>
            <Button destino={"Register"} url={"/register"}/>
        </div>
    )
};

export default Home;