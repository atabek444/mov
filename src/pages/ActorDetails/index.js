import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import ActorMovies from "../ActorMovies";
import {LanguageContext} from "../../components/context";

const ActorDetails = () => {
    const [actor, setActor] = useState({})
    const {language} = useContext(LanguageContext)

    const {actorsId} = useParams()
    const {biography, profile_path, name,birthday, place_of_birth, popularity} = actor
    const {black} = useContext(LanguageContext)

    const getActorDetails = (key) => {
        axios(`https://api.themoviedb.org/3/person/${actorsId}?api_key=${key}&language=${language}`)
            .then((res) => setActor(res.data))
    }
    useEffect(() => {
        getActorDetails(API_KEY)
    }, [language])
    // console.log(actor)

    return (
        < >
            <div id="actorsDetails" style={{
                background : black
            }}>
                <div className="container">
                    <div className="actorsDetails">
                        <div className="actorsDetails--info">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                          <div>
                              <h3>Персоналная информация</h3>
                              <h4>Известность за</h4>
                              <h5>Актёрское искусство</h5>
                              {/*<h4>Популярность</h4>*/}
                              {/*<h5>{ Math.floor(popularity * 2)}</h5>*/}
                              <h4>Пол</h4>
                              <h5>{popularity === 1 ? "Женский" : "Мужской"}</h5>
                              <h4>Дата рождения</h4>
                              <h5>{birthday}</h5>
                              <h4>Место рождения</h4>
                              <h5>{place_of_birth}</h5>
                              <h4>Также известность как</h4>
                              {/*<div>{also_known_as?.map((el) => <h5>{el} <br/></h5>    )}</div>*/}
                          </div>
                        </div>
                        <div className="actorsDetails--card">
                            <h1>{name}</h1>
                            <div className="actorDetails__bio">
                                <h3>Биография</h3>
                                <p>{biography}</p>

                            </div>
                            <ActorMovies id={actorsId}/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ActorDetails;