import MovieCard from "../components/MovieCard"
import { useState } from "react";
import "../css/Home.css"

export default function Home() {
    const [searchQuerry, setSearchQuerry] = useState("")
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1999"}
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuerry)
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuerry}
                onChange={(e) => setSearchQuerry(e.target.value)}></input>
            </form>
            <button type="submit" className="search-button">Search</button>
            <div className="movies-grid"> 
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                    ))}
            </div>
        </div>
    )
}