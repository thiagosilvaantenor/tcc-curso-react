import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const UserList = () => {
    const location = useLocation();
    const { user } = location.state || {};
    
    const navigate = useNavigate();
    
    const redirectToAddMovie = () => {
        navigate('/user-add-list',  {
            state: { user}, // Envia o usuário para a pagina que sera redirecionada
          });        
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