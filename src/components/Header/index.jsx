import styles from "./styles.module.css";

// Link
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className={styles.logo}><Link to="/">Adventure Trails FD</Link></div>
            <div className={styles.links}>
                <Link to='/lista-trilhas'>Explorar trilhas</Link>
                <Link to='/cadastro-trilha'>Cadastrar Trilhas</Link>
            </div>
        </header>
    );
}

export default Header;
