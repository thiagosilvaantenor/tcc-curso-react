import { useLocation, useNavigate } from "react-router-dom";
import MovieSearch from "../components/MovieSearch"
import { useState } from "react";


interface Movies {
    Title: string,
    Poster: string,
    Year: string,
}

const UserAddList = () => {

    const location = useLocation();
    const { user } = location.state || {};
    const [movies, setMovies] = useState<Movies[] | null>(null)
    
    setMovies(user.movies)
    
    const navigate = useNavigate();

    return(
        <div>
            <h1>Olá {user.name}, aqui você pode adicionar filmes a sua lista</h1>
            <MovieSearch 
            />
        </div>
    )
}
export default UserAddList