import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User, UserMovie } from "../types/Types";

//Define o tipo Usuário

//Define o tipo do contexto do usuário
type UserContextType = {
    users: User[];
    movies: UserMovie[];
    setUsers: (users: User[]) => void;
    addUser: (user: User) => void;
    setMovies: (movies: UserMovie[]) => void;
    addMovie: (movie: UserMovie, userId: string) => void;
}

const UserContext = createContext<UserContextType>({
    users: [],
    movies: [],
    setUsers: () => { },
    addUser: () => { },
    setMovies: () => { },
    addMovie: () => { },
});

//Cria o provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
    // busca os usuários pelo localStorage
    const storedUsers = localStorage.getItem('users');
    //Se foi encontrado usuário/s então transforma de JSON em objeto
    const initialUsers = storedUsers ? JSON.parse(storedUsers) : [];
    const [users, setUsers] = useState<User[]>(initialUsers.map((user: any) => ({
        ...user,
        movieIds: user.movieIds || [],  // Assegura que movieIds seja sempre um array
    })));

    //Busca os filmes
    const storedMovies = localStorage.getItem('movies');
    const initialMovies = storedMovies ? JSON.parse(storedMovies) : [];

    const [movies, setMovies] = useState<UserMovie[]>(initialMovies)

    //Observa a lista, quando for alterada deve salvar no localStorage
    useEffect(() => {
        if (users.length > 0)
            //Converte a lista de objeto em JSON e salva no localStorage
            localStorage.setItem('users', JSON.stringify(users));
        else
            localStorage.removeItem('users');
    }, [users]);


    ////Observa a lista, quando for alterada deve salvar no localStorage
    useEffect(() => {
        if (movies.length > 0)
            //Converte a lista de objeto em JSON e salva no localStorage
            localStorage.setItem('movies', JSON.stringify(movies));
        else
            localStorage.removeItem('movies');
    }, [movies]);

    // Função para adicionar um novo usuário
    const addUser = (user: User) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };


   // Função para adicionar um filme à lista do usuário logado
   const addMovie = (movie: UserMovie, userId: string) => {
    setUsers((prevUsers) => {
        return prevUsers.map((user) => {
            if (user.id === userId) {
                // Garantir que movieIds existe e adicionar o filme
                const updatedUser = {
                    ...user,
                    movieIds: [...user.movieIds, movie.idMovie]  // Adiciona o ID do filme
                };
                return updatedUser;
            }
            return user;
        });
    });
};

    return (
        <UserContext.Provider value={{ users, setUsers, addUser, movies, setMovies, addMovie }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);