import './Card.css'
interface CardProps {
    poster: string,
    title: string,
    year: string,
}

const Card: React.FC<CardProps> = ({ poster, title, year }) => {

    const returnMovieFromCard = () => {
        let movieCard = [title, poster, year];
        return movieCard; 
    }

    return (

        <div className="card-container">
            <a onClick={() => returnMovieFromCard}>
                <img src={poster} alt="" />
                <h2>{title}</h2>
                <h3>{year}</h3>
            </a>
        </div>

    )
}
export default Card;