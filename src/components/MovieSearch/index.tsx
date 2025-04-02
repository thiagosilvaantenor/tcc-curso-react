import React, { useState } from "react";
import { Movies } from "../../types/Types";
import Card from "../Card";
import { getMoviebyTitle } from "../service/MovieAPI";
import './MovieSearch.css';


const API_KEY = "34e15e4e";

const MovieSearch = ({ user }: { user?: { id: string } }) => {
    const [title, setTitle] = useState("");
    const [movies, setMovies] = useState<Movies[] | null>([]);
    const [error, setError] = useState("");

    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();
        if (title === "") {
            setError('Erro, informe um filme válido');
            return;
        }

        try {
            const data = getMoviebyTitle(title)
            if (typeof (data) == typeof (movies)) {
                setMovies(await data);
            } else {
                setError("Erro filme invalido, tente escrever o titulo em inglês")
            }
        } catch (err) {
            setError("Erro ao buscar o Filme.");
        } finally {
            if (error != '') {
                alert(error);
            }
        }
    };

    return (
        <div className="movie-search-container">
            <h1>Buscar Filmes</h1>
            <form className="movie-form" onSubmit={handleSearch}>
                <label htmlFor="title">Digite o nome do filme: </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    placeholder="Ex: Django"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar Filme</button>
                <div className="card-wrapper">
                    {error && <p className="error">{error}</p>}
                    {movies?.map((movie) => (
                        <Card
                            key={movie.Title}
                            title={movie.Title}
                            poster={movie.Poster}
                            year={movie.Year}
                            user={user}
                        />
                    ))}
                </div>
            </form>
        </div>
    )
}
export default MovieSearch;
