import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../MovieCard";

const Search = () => {
    const [search, setSearch] = useState([])
    const {searchName} = useParams()
    const getSearch = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchName}`)
            .then((res) => setSearch(res.data.results))
    }
    useEffect(() => {
        getSearch(API_KEY)
    }, [searchName])
    console.log(search)
    return (
        <div className="container">
        <div className="search">
                {
                    search.map((el) => (
                        <MovieCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Search;