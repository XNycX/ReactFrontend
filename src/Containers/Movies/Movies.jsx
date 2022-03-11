import React, { useEffect } from "react";
import "./Movies.css";
import { getMovies } from "../../redux/actions/movie";
import Movie from "../../Components/Movie/Movie";

const Movies = () => {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="designRooster">
      <Movie />
    </div>
  );
};

export default (Movies);
