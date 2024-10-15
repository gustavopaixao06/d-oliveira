import "../Footer/footer.css";
import { Link } from "react-router-dom";

export function Footer() {

    return (
        <>
            <footer className='rodape'>

                <div className="footer">
                    <nav className="menu-footer">
                        <ul>
                            <li>
                                <Link to="/" className="nav-item" id="">Home</Link>
                            </li>
                            <li>
                                <Link to="/sobre" className="nav-item" id="">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/contato" className="nav-item" id="">Contato</Link>
                            </li>
                            <li>
                                <Link to="/galeria" className="nav-item" id="">Galeria</Link>
                            </li>
                            <li>
                                <Link to="/servicos" className="nav-item" id="">Serviços</Link>
                            </li>
                        </ul>
                    </nav>

                    <figure className="logo-footer">
                        <img src="/img/Logo.svg" alt="" />
                    </figure>

                    <div className="icons">
                        <img src="/img/whatsapp.svg" alt="" />
                        <img src="/img/email.svg" alt="" />
                        <img src="/img/facebook.svg" alt="" />

                    </div>

                </div>

                <div className="linha-footer"></div>
                
                <div className="direitos">
                    <img src="/img/c.svg" alt="" /> <p>2024. Todos os direitos reservados</p>
                </div>

            </footer>
        </>
    )
}