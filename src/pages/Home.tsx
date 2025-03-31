import MovieSearch from "../components/MovieSearch";

export default function Home() {
    return(
        <div>
            <h1>Bem vindo ao Minha Lista de Filmes 🎬</h1>
            <p>Aqui é possivel pesquisar seus filmes favoritos🌟</p>
            <div className="form-search">
              <MovieSearch />
            </div>
        </div>
    )
}