import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LanguageContext} from "../components/context";

const MovieCard = ({el}) => {
    const {black} = useContext(LanguageContext)

    return (
      <div id="movieCard" style={{
          background : black
      }}>
          <div className={`movie--card`}>
             <div className="">
                 <Link to={`/movie/details/${el.id}`}>
                     <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>

                 </Link>
                 <h5>{el.title}</h5>
                 <p>{el.release_date}</p>
             </div>
          </div>
      </div>
    );
};

export default MovieCard;