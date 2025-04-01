import { useState } from "react";
import { useUser } from "../context/ContextUser";
import './styles/SignIn.css'



export default function SignIn() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {addUser, users} = useUser(); // Pega a lista de usuários e a função de adicionar usuário


    //DEBUG: mostra a lista no console
    console.log(users);

    const handleSubmit = (event: React.FormEvent) => {
        //Quando o formulario for enviado ele entra em espera
        event.preventDefault();

        const newUser = {
            id: Math.random().toString(36).substring(2,9),
            name: name,
            email: email,
            password: password,
        };

        //Adiciona o usuário enviado do formulario para a lista
        addUser(newUser);

        //DEBUG: Exibe no console a lista atualizada
        console.log(users);

        alert(`Usuario ${newUser.name} cadastrado com sucesso!`);
        
    };

    return (
        <div className="sign-in-container">
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome: </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    placeholder="Digite aqui seu nome"
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Digite aqui seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Senha: </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Digite aqui sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            <a href="/login">Login</a>
        </div>
    )
}