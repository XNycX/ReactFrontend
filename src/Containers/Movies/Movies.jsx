import React, { useEffect } from "react";
import "./Movies.css";
import { getMovies } from "../../redux/actions/movie";
import Movie from "../../Components/Movie/Movie";
import { Loader } from "@mantine/core";
import { connect } from "react-redux";
import loader from '../../images/loader.gif'
const Movies = (props) => {
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="designRooster">
    {props.movies?.length <= 0 ? <img src={loader}  /> : ''} 
      <Movie />
    </div>
  );
};
const mapStateToProps = (state) => ({
  movies: state.films.movies,
});
export default connect(mapStateToProps)(Movies);
