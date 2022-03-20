import React from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByTitle } from "../../redux/actions/movie";
import Movie from "../../Components/Movie/Movie"; 
import './Search.css'
const Search = () => {
    const { title } = useParams();
    useEffect(() => {
        getMoviesByTitle(title)
    }, [title])

  return <div className='searchContainer'><Movie></Movie></div>;
};

export default Search;
