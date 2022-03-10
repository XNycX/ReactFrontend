import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { MOVIE_DETAIL } from "../../redux/types";
import "./Movies.css";

const Movies = (props) => {
  const [films, setFilms] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    //No es correcto realizar el try catch en el useEffect
    //dado que el useEffect es en si un proceso con un callback, meter un proceso
    //asíncrono traería problemas y React no lo permite, por ello, llamamos a una funcion
    //que habremos hecho nosotros y se encargará de ello

    // getFilms();
  }, []);

  //useEffect custom para el hook films

  useEffect(() => {
    console.log("vaya, , films ha cambiado, ", films);
  }, [films]);

  const getFilms = async () => {
    try {
      let res = await axios.get(
        "http://localhost:5500/movies"
      );

      //Una vez han venido los datos del backend, nosotros, lo siguiente que haremos para que no se pierdan
      //será setear esos datos en el hook, haciendo que las peliculas estén disponibles
      //para los return del componente.

      setTimeout(() => {
        setFilms(res.data.results);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  const selectFilms = (movie) => {
    console.log(movie);
    //Guardamos la movie escogida en redux
    props.dispatch({ type: MOVIE_DETAIL, payload: movie });

    //Redirigimos a movieDetail con navigate
    navigate("/moviedetail");
  };

  if (films[0]?.id != undefined) {
    return (
      <div className="designRooster">
        {
          //Voy a mapear las películas
          films.map((movie) => {
            //a cada elemento que voy a mapear
            //le brindo un KEY (obligatorio) que lo distinguirá de
            //el resto de elementos
            return (
              //Al mapear, cada elemento que se itera del array (en este caso movie es ese elemento),
              //si le hacemos propiedad onclick y pasamos el elemento como argumento,
              //a esa funcion le va a llegar el objeto que hayamos clickado entero
              <div key={movie.id} onClick={() => selectFilms(movie)}>
                <img src={movie.img} alt={movie.title} />
              </div>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div className="container-movies">
        <div className="marginLoader">
          {/* <img src={require("../../images/loader.gif")} alt="cargador" /> */}
        </div>
      </div>
    );
  }
};

export default connect()(Movies);
