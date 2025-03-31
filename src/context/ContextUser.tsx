import { createContext, ReactNode, useContext, useEffect, useState } from "react";

//Define o tipo Usuário
type User = {
    id:string,
    name:string,
    email:string,
    password:string,
};
//Define o tipo do contexto do usuário
type UserContextType = {
    users: User[];
    setUsers: (users: User[]) =>  void;
    addUser: (user: User) => void;
}

const UserContext = createContext<UserContextType>({
    users: [],
    setUsers: () => {},
    addUser: () => {},
});

//Cria o provider
export const UserProvider = ({ children }: {children: ReactNode}) => {
    // busca os usuários pelo localStorage
    const storedUsers = localStorage.getItem('users');
    //Se foi encontrado usuário/s então transforma de JSON em objeto
    const initialUsers = storedUsers ? JSON.parse(storedUsers) : [];

    const [users, setUsers] = useState<User[]>(initialUsers);

    //Observa a lista, quando for alterada deve salvar no localStorage
    useEffect(() => {
        if (users.length > 0)
            //Converte a lista de objeto em JSON e salva no localStorage
            localStorage.setItem('users', JSON.stringify(users));
        else
            localStorage.removeItem('users');
    }, [users]);

    // Função para adicionar um novo usuário
    const addUser = (user: User) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    return(
        <UserContext.Provider value={{ users, setUsers, addUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);