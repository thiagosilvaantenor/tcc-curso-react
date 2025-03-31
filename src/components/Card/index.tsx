interface CardProps{
    poster: string,
    title: string,
    year: string,
}

const Card : React.FC<CardProps> = ({poster, title, year}) => {
    return(

        <div>
            <img src={poster} alt="" />
            <h2>{title}</h2>
            <h3>{year}</h3>
        </div>

    )
}
export default Card;