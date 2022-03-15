import React, { useEffect } from "react";
import { getMovies } from "../../../redux/actions/movie";
import Movie from "../../Movies/Movies";
import './AdminMovies.css';

const AdminMovies = () => {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="designRooster">
      <Movie/>
    </div>
  );
};
export default (AdminMovies);