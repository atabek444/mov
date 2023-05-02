import React, {useState} from 'react';
import {LanguageContext} from "./index";

const RootContext = ({children}) => {
    const  [language , setLanguage] = useState("en-US")
    const [black , setBlack] = useState("Свейтлый")
    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            black ,
            setBlack

        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default RootContext;