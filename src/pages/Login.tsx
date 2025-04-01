import { useState } from "react"
import { useUser } from "../context/ContextUser"
import './styles/Login.css'
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {users} = useUser();
    const navigate = useNavigate();

    //Função para lidar com o login
    const handleLogin = (event: React.FormEvent) => {
        //Quando formulario for enviado entra em espera para não sair da página
        event.preventDefault();
        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user){
            //TODO: Caso credenciais corretas deve seguir para a lista do usuário
            navigate('/userlist', {
                state: {user:user},
            });
        } else {
            alert('Erro, informações invalidas, tente novamente');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                    value={password}
                    placeholder="Digite aqui sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                <button
                type="button"
                onClick={() => {
                    setEmail(''),
                    setPassword('')
                }}
                >Limpar campos</button>
            </form>
            <a href="/user">Cadastre-se</a>
        </div>
    )
}