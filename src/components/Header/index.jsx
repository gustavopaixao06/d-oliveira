import { Link, useLocation } from "react-router-dom";
import './header.css';
import React, { useEffect } from 'react';


export function Header() {

    return (
        <>
            <header>
                <div className="center">
                    <figure className="logo">
                        <img src="/img/Logo.svg" alt="" />
                    </figure>

                    <nav className="menu-desktop">
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
                </div>
            </header>
        </>
    );
}
