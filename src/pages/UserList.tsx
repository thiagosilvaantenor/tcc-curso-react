import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";
import { Movies } from "../types/Types";
import { getMovieById } from "../components/service/MovieAPI";

const UserList = () => {
    const location = useLocation();
    const { user } = location.state || {};
    const [movies, setMovies] = useState<Movies[] | null>([]);
    const navigate = useNavigate();

    const redirectToAddMovie = () => {
        navigate('/user-add-list', {
            state: { user }, // Envia o usuário para a pagina que sera redirecionada
        });
    }

    const getList = () => {
        let data;
        let listMovies:Movies[] = [];

        user.movieIds?.forEach(async (id: string) => {
            data = getMovieById(id)
            if (typeof (data) === typeof (movies)) {
                listMovies.push(await data);
            } else {
                alert("Erro filme invalido, tente escrever o titulo em inglês")
            }

        });
        setMovies(listMovies);
    }


    return (
        <div>
            <h1>Bem vindo {user.name}</h1>
            <a onClick={redirectToAddMovie}>Clique aqui para adicionar filmes a sua lista</a>
            <p>Sua lista de filmes:</p>





            {user.movies?.map((movie: { Title: string; Poster: string; Year: string; }) => (
                <Card
                    title={movie.Title}
                    poster={movie.Poster}
                    year={movie.Year}
                />
            ))}
        </div>
    )
}
export default UserList