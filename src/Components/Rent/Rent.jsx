import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import './Rent.css';

const Rent = (props) => {

    let navigate = useNavigate();

    const rentFilm = async () => {
        
        let body = {
            //este body corresponde al body de pedido de postman
            price: 5,
            MovieId: props.id,
            UserId: props.idUser,
            date_rent: "2021-03-21" ,
            date_return: "2021-03-24"
        }

        let config = {
            headers: { Authorization: `${props.token}` }
        };

        try {

            let res = await axios.post("http://localhost:5500/orders",body,config);

            if(res){
                console.log(res);
                navigate("/");
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="designRent" onClick={()=>rentFilm()}>Alquilar</div>
    )
}

export default Rent;