import "./styles.css";

// Link
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <div className="logo"><Link to="/">Adventure Trails FD</Link></div>
            <div className="links">
                <Link to='https://github.com/vinicius-lab365' target="_blank"><img src={"public/assets/github-logo.png"} alt="Logo gitHub" /></Link>
                <Link to='https://www.linkedin.com/in/vin%C3%ADcius-bitencourt-pereira-2b666b221/' target="_blank"><img src={"public/assets/linkedin-logo.png"} alt="Logo linkedin" /></Link>
                <Link to='https://www.instagram.com/vini.btc/' target="_blank"><img src={"public/assets/instagram-logo.png"} alt="Logo instagram" /></Link>
            </div>
        </footer>
    );
}

export default Footer;
