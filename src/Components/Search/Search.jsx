import React from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesByTitle } from "../../redux/actions/movie";

const Search = () => {
    const { title } = useParams();
    useEffect(() => {
        getMoviesByTitle(title)
    }, [title])

  return <div>Search</div>;
};

export default Search;
