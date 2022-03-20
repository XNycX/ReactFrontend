import React, { useEffect } from "react";
import "./Movies.css";
import { getMovies } from "../../redux/actions/movie";
import Movie from "../../Components/Movie/Movie";
import { Loader } from "@mantine/core";
import { connect } from "react-redux";

const Movies = (props) => {
  useEffect(() => {
    getMovies();
  }, []);
  if (!props.movies) return <Loader />;
  return (
    <div className="designRooster">
      <Movie />
    </div>
  );
};
const mapStateToProps = (state) => ({
  movies: state.films.movies,
});
export default connect(mapStateToProps)(Movies);
