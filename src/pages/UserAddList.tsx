import { useLocation } from 'react-router-dom';
import MovieSearch from "../components/MovieSearch";

const UserAddList = () => {
    const location = useLocation();
    const { user } = location.state || {};  // Acessando o usuário logado via estado de navegação
    
    return (
        <div>
            <h1>Olá {user?.name}, aqui você pode adicionar filmes à sua lista</h1>
            <MovieSearch user={user} /> {/* Passando o usuário para o componente de busca */}
        </div>
    );
};

export default UserAddList;
