import React from 'react'
import Logo from '../../assets/img/logo.png';
import Button from '../Button'
import './menu.css'

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt='AluraFlix' />
            </a>
            
            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;