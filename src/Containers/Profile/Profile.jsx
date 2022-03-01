import React from 'react';
import Button from '../../Components/Button/Button';
import './Profile.css';

const Profile = () => {


    return(
        <div className='designProfile'>
            soy Profile
            <Button destino={"Home"} url={"/"}/>
            <Button destino={"Login"} url={"/login"}/>
            <Button destino={"Register"} url={"/register"}/>
        </div>
    )
};

export default Profile;