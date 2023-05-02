import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../MovieCard";
import {LanguageContext} from "../../components/context";

const Popular = () => {
    const [popular , setPopular] = useState([])
    const [page , setPage] = useState(1)
    const {language} = useContext(LanguageContext)
    const {black} = useContext(LanguageContext)
    const getPopular =  (key) => {
            axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`)
            .then((res) => {
            setPopular(res.data.results)
            })


    }
useEffect(() =>{
    getPopular(API_KEY)
},[page,language , black])
    console.log(popular)


    return (
        <div style={{
            background : black
        }}>
            <div id="popular">
                <div className="container">
                    <div className="popular">
                        {
                            popular.map((el) => (
                                <MovieCard el={el}/>
                            ))
                        }
                        <div className="popular--btn">
                            <button onClick={()=> setPage(page === 1 ? page : page - 1) }>Prev</button>
                           <p>Page : {page}</p>
                            <button onClick={() => setPage(page + 1)}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Popular;