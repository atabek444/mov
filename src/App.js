
import './App.scss';
import Header from "./components/Header";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
// import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import MovieDetails from "./pages/movieDetails";
import ActorDetails from "./pages/ActorDetails";
import Search from "./pages/Search";
import {LanguageContext} from "./components/context";
import {useContext} from "react";
// import ActorDetails from "./pages/ActorsDetails";

function App() {
    const {black} = useContext(LanguageContext)

  return (
    <div className="App" style={{
        color : black === "#181818" ? "white" : true ,
        background : black
    }}>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/topRated" element={<TopRated/>}/>
            <Route path="/movie/details/:movieId" element={<MovieDetails/>}/>
            <Route path="/actors/details/:actorsId" element={<ActorDetails/>}/>
            <Route path="/movie/search/:searchName" element={<Search/>}/>
        </Routes>
         <Footer/>



    </div>
  );
}

export default App;
