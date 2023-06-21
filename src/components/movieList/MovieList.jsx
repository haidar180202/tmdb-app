import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../card/Card';
import './MovieList.css'

function MovieList() {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    const getData = () =>{
        fetch(
            `https://api.themoviedb.org/3/movie/${type ? type :"popular"}?api_key=4b09296318533ae039bc2930ab07f96c`
          )
            .then((res) => res.json())
            .then((data) => setMovieList(data.results));
    }
    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
      getData();
    }, [type])
    
    
    return(
        <div className="movie__list">
          <h2 className="list__title">
            {(type ? type :"POPULAR").toUpperCase()}
          </h2>
          <div className="list__cards">
              {movieList.map((movie)=>(
                <Card movie={movie}/>
              ))}
          </div>
        </div>
    )
  
}

export default MovieList