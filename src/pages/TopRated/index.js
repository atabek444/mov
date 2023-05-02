import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../MovieCard";
import {LanguageContext} from "../../components/context";


    const TopRated = () => {
        const [topRated , setTopRated] = useState([])
        const {language} = useContext(LanguageContext)
        const {black} = useContext(LanguageContext)
        const [page , setPage] = useState(1)

        const getTopRated = (key) => {
            axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${page}`)
                        .then((res) => {
                         setTopRated(res.data.results)
                        })
        }
        useEffect(() => {
            getTopRated(API_KEY)
        } ,[language , page])
        console.log(topRated)


    return (
        <div id="topRated"style={{
            background : black
        }}>
            <div className="container">
                <div className="topRated">
                    {
                        topRated.map((el) => (
                            <MovieCard el={el}/>
                        ))
                    }
                    <div className="topRated--btn">
                        <button onClick={()=> setPage(page === 1 ? page : page - 1) }>Prev</button>
                        <p>Page : {page}</p>
                        <button onClick={() => setPage(page + 1)}>Next</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopRated;