import React from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { title } = useParams();
  useEffect(() => {
    console.log(title);
  }, [title]);

  return <div>Search</div>;
};

export default Search;
