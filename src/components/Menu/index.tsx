import './Menu.css'

export default function Menu() {
    return(
        <div className='menu-container'>
            <nav>
                <a href="/">Inicio</a>
                <a href="/user">Cadastro</a>
                <a href="/login">Login</a><br />
            </nav>
        </div>
    )
}