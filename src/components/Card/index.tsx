import './Card.css';
import { useUser } from '../../context/ContextUser';

interface CardProps {
    poster: string;
    title: string;
    year: string;
    user?: { id: string };  // user é opcional
}

const Card: React.FC<CardProps> = ({ poster, title, year, user }) => {
    const { addMovie } = useUser();

    const returnMovieFromCard = () => {
        const movie = {
            idMovie: title + year, // ID único para o filme (você pode melhorar isso)
            title,
            poster,
            year,
        };

        if (user) {
            // Se o usuário estiver logado, adiciona o filme à lista do usuário
            addMovie(movie, user.id);
        } else {
            // Caso o usuário não esteja logado, você pode exibir uma mensagem ou redirecionar o usuário para a página de login
            console.log("Usuário não logado, não é possível adicionar à lista.");
        }
    };

    return (
        <div className="card-container">
            <a onClick={returnMovieFromCard}>
                <img src={poster} alt={title} />
                <h2>{title}</h2>
                <h3>{year}</h3>
            </a>
        </div>
    );
};

export default Card;
