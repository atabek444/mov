import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {LanguageContext} from "../context";

const Movie = ({id}) => {
    const [movie, setMovie] = useState([])
    const {language} = useContext(LanguageContext)
    const {black} = useContext(LanguageContext)

    let getMovie = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=${language}`)
            .then((res) => {
                setMovie(res.data.results)
            })
    }
    useEffect(() => {
        getMovie(API_KEY)
    }, [language,black])
    console.log(movie)
    return (
        <div id={"iframe"} style={{
            background  : black
        }}>
            <div className="container">
                <h1>
                    Медиа
                </h1>
                <div className="movie">

                    {
                        movie.map((el) => (
                            <div className="movie--iframe">
                                <iframe width="360" height="215" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                ></iframe>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Movie;