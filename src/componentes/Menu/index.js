import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';


// componente é uma função:
// todo componente começa com Maiusculo


function Menu() {
    return (
        <nav className="Menu">

            <a href="/">
                <img className="Logo" src={Logo} alt="vttj-flix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
            Novo Video 
            </Button>

        </nav>
    );
}

export default Menu; //