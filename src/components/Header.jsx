import React from 'react'
import classes from '../styles/App.module.css'
import { FiGithub } from 'react-icons/fi'
import { GrLinkedin, GrGithub } from 'react-icons/gr'


const Header = () => {
    return (
        <div class="row App_header__NiW2c">
            <div class="col-12 App_title__TSMio">
            <p>Nuestro sitio web está en mantenimiento</p>
        </div>
           <div class="col-12 App_message__O+TtB">
           <h2>Error</h2>
            <p>¡Oops! Parece que hemos encontrado un error inesperado. Nuestro equipo está trabajando diligentemente para resolver este problema. Por favor, inténtalo de nuevo más tarde. ¡Gracias por tu paciencia y comprensión!</p>
        </div>
       </div>
    )
}

export default Header;