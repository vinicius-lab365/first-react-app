import "./styles.css";

function Header() {
    return (
        <header>
            <div className="logo"><a href="/">Adventure Trails FD</a></div>
            <div className="links">
                <a href="#">Explorar trilhas</a>
                <a href="#">Cadastrar trilhas</a>
            </div>
        </header>
    );
}

export default Header;
