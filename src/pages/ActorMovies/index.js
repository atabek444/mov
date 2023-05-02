import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../components/context";

const ActorMovies = ({id}) => {
    const [movies, setMovies] = useState([])
    const {language} = useContext(LanguageContext)
    const {black} = useContext(LanguageContext)

    const getMovies = (key) => {
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
            .then((res) => (
                setMovies(res.data.cast)
            ))
    }
    useEffect(() => {
        getMovies(API_KEY)
    }, [language])
    console.log(movies)

    return (
        <div id={"actorMovies"} style={{
            background : black
        }}>
            {/*<div className="container">*/}
            <h1 style={{fontSize : "20px"}}>Известность за</h1>
                <div className="actorMovies">

                    {
                        movies.map((el) => (
                            <div className={"actorMovies--nav"}>
                           <Link to={`/movie/details/${el.id}`}>
                               {
                                   el.poster_path  ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                                       : <img src={"https://www.pngplay.com/wp-content/uploads/6/Cinema-Film-PNG-HD-Quality.png"} alt=""/>
                               }
                           </Link>

                               <h5>
                                   {el.title}
                               </h5>
                            </div>
                        ))
                    }
                </div>
            {/*</div>*/}
        </div>
    );
};

export default ActorMovies;