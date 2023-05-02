import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../context";

const Header = () => {
    const [value , setValue] = useState("")
    const nav = useNavigate()

    const handleChange = (e) =>{
        setValue(e.target.value)


    }
    const {black} = useContext(LanguageContext)
    const {setBlack} = useContext(LanguageContext)
    const {setLanguage} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    console.log(language)
    return (
        <div>
            <div id="header">
                <div className="container">
                    <div className="header">
                      <div className="header--item">
                          <h1>MOVIE-APP</h1>
                          <NavLink to="/">Home</NavLink>
                          <NavLink to="/popular">Popular</NavLink>
                          <NavLink to="/topRated">TopRated</NavLink>
                      </div>
                        <div className="header--nav">
                            <input type="text" placeholder="Поиск..."
                            onChange={handleChange}
                            />
                            <button onClick={() => {
                                nav(`/movie/search/${value}`)
                            }
                            }>Найти</button>
                            <select onChange={(e) => setLanguage(e.target.value)}>
                                <option value="en-Us">English</option>
                                <option value="ru-RU">Русский</option>
                                <option value="fr-FR">France</option>
                            </select>
                            <select onChange={(e) => setBlack(e.target.value)}>
                                <option value="#ffffff">Светлый</option>
                                <option value="#181818">Темный</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;