import {Movie} from "./Movie";
import MovieCard from "./MovieCard";
import "./MovieLibrary.css"
import React, {useState} from "react";


type MovieLibraryProps = {
    movies : Movie[];
    deleteMovie : (id : string) => void
}

export default function MovieLibrary(props : MovieLibraryProps) {

    const [filterText, setFilterText] = useState("");

    const result = props.movies.filter((movie) => movie.title.toLowerCase().includes(filterText.toLowerCase()));

    return (
        <div >
            <div >
                <label>Search here for movies
             <input onChange={(event) =>
                setFilterText(event.target.value)}/>
                </label>
            </div>
            <div className="movie-library">
                 {result.map((movie) =>
                    <MovieCard movie={movie} deleteMovie={props.deleteMovie}/>)}
            </div>
            <div>
                {props.movies.length <1
                    && <h3>No movies available</h3>}
            </div>
        </div>
    )
}