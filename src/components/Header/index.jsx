import "./styles.css";

// Link
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="logo"><Link to="/">Adventure Trails FD</Link></div>
            <div className="links">
                <Link to='/lista-trilhas'>Explorar trilhas</Link>
                <Link to='/cadastro-trilha'>Cadastrar Trilhas</Link>
            </div>
        </header>
    );
}

export default Header;
