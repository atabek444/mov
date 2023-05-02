import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../components/context";
// import Movie from "../movie";

const ActorsCrd = ({id}) => {
    const [actor, setActor] = useState([])
    const {language} = useContext(LanguageContext)
    const {black} = useContext(LanguageContext)

    // const []
    const getActor = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${language}`)
            .then((res) => setActor(res.data.cast))
    }
    useEffect(() => {
        getActor(API_KEY)
    }, [language])
    console.log(actor)
    return (
        <>
            <div id={"actor"} style={{
                background : black
            }}>
                <div className="container">
                    <h1>Главный ролях</h1>
                    <div className="actor--card">
                        {
                            actor.map((el) => <div>
                                <Link to={`/actors/details/${el.id}`}>
                                    {
                                        el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`} alt=""/>
                                            : <img src={`https://www.seekpng.com/png/detail/899-8992523_user-png.png`} style={{
                                                height: "160px"
                                            }} alt=""/>

                                    }
                                </Link>

                                <h4>{el.name}</h4>
                                <h5>{el.character}</h5>

                            </div>)
                        }
                    </div>
                    {/*<div className="">*/}
                    {/*    <iframe width="560" height="315" src="https://www.youtube.com/embed/mKnbgV-x5AY"*/}
                    {/*            title="YouTube video player" frameBorder="0"*/}
                    {/*            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                    {/*            allowFullScreen*/}
                    {/*    >*/}

                    {/*    </iframe>*/}
                    {/*</div>*/}
                </div>
            </div>
              {/*<Movie id={}/>*/}
        </>
    );
};

export default ActorsCrd;