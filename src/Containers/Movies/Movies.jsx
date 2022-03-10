import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { MOVIE_DETAIL } from "../../redux/types";
import "./Movies.css";
import { getMovies } from "../../redux/actions/movie";

const Movies = (props) => {
  const [films, setFilms] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getMovies();
    console.log("valgo", props);
  }, []);

  //useEffect custom para el hook films

  useEffect(() => {
    console.log("vaya, , films ha cambiado, ", films);
  }, [films]);

  return (
    <div className="designRooster">
      {props.movies.map((movie) => {
        return (
          <div>
            <h1>{movie.title}</h1>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  movies: state.films.movies,
});
export default connect(mapStateToProps)(Movies);
