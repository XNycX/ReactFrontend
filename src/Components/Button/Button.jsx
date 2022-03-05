import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = (props) => {

    let navigate = useNavigate();

    const llevame = () => {
        navigate(props.url);
    };
    return (
        <div className='designButton' onClick={() => llevame()}>
            {props.destino}
        </div>
    )
};
export default Button;