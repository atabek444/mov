import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import {MdViewList} from "react-icons/md";
import {BsHeartFill} from "react-icons/bs";
import {BsFillBookmarkFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import ActorsCard from "../ActorsCard";
import Movie from "../../components/movie";
import {LanguageContext} from "../../components/context";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const {language} = useContext(LanguageContext)
    const {black} = useContext(LanguageContext)

    const {movieId} = useParams()
    const {
        poster_path,
        title,
        overview,
        tagline,
        genres,
        original_language,
        vote_average,
        release_date,
        backdrop_path,
        runtime
    } = movieDetails
    const getMovieDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`)
            .then((res) => (
                setMovieDetails(res.data)
            ))
    }
    useEffect(() => {
        getMovieDetails(API_KEY)
    }, [language])
    console.log(movieDetails)
    return (

<>
    <div id={"details"} style={{
        background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}") no-repeat center/cover`,
    }}>
        {/*<div className="container">*/}
        <div className="details">
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`} alt=""/>
            <div className="details--title">
                <h1>{title}</h1>

                <div className="details--title__info">
                    {/*<FaElementor/>*/}
                    <h5>{release_date} ( {original_language?.toUpperCase()} ) - </h5>
                    <h5><i>{genres?.map((el) => {
                        return el.name + ` , `
                    })}     </i></h5>
                    <h5>{Math.floor(runtime / 60)}h {runtime % 60}m</h5>
                </div>
                <div className="details--icon">
                    <div className="" style={{
                        display : "flex", alignItems : "flex-start"
                    }}>
                        <h2><i>{Math.floor(vote_average * 10)}<sup>%</sup></i></h2>
                        <h3 style={{padding : "10px 0 0 10px", color  : "wheat" }}> <i>Рейтинг</i></h3>
                    </div>
                    <div className="details--icon__to">
                        <div className={"details--icon__to--ic"}>
                            <MdViewList/>
                        </div>
                        <div className={"details--icon__to--ic"}>
                            <BsHeartFill/>
                        </div>
                        <div className={"details--icon__to--ic"}>
                            <BsFillBookmarkFill/>
                        </div>
                        <div className={"details--icon__to--ic"}>
                            <AiFillStar/>
                        </div>
                    </div>
                </div>

                <h4><i>{tagline} ...</i></h4>
                <h3><i>Обзор</i></h3>
                <p>{overview}</p>
            </div>
            {/*</div>*/}

        </div>

    </div>
    <ActorsCard id={movieId}/>

    <Movie id={movieId}/>
</>
    );
};

export default MovieDetails;