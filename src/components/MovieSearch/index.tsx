import { useState } from "react";
import Card from "../Card";

interface Movies {
    Title: string,
    Poster: string,
    Year: string,
}

const API_KEY = "34e15e4e";

export default function MovieSearch() {
    const [title, setTitle] = useState("");
    const [movies, setMovies] = useState<Movies[] | null>([]);
    const [error, setError] = useState("");


    const handleSearch = async () => {
        if (title === "") {
            setError('Erro, informe um filme valido');
            return;
        }

        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
            const data = await response.json();

            if (data.Response === "False") {
                setError("Filme não encontrado!");
                setMovies(null);
            } else {
                setMovies(data.Search.slice(0, 3));
                setError("");
            }
        } catch (err) {
            setError("Erro ao buscar o Filme.");
        }
    };
    return (
        <div>

            <h1>Buscar Filmes</h1>
            <form onSubmit={handleSearch}>
                <label htmlFor="title">Digite o nome do filme: </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    placeholder="Ex: Django"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar Filme</button>

                {error && <p className="error">{error}</p>}
                {movies?.map((movie) => (
                    <Card
                        title={movie.Title}
                        poster={movie.Poster}
                        year={movie.Year}
                    />
                ))

                }

            </form>
        </div>
    )
}