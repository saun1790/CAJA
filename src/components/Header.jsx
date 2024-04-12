import React from 'react'
import classes from '../styles/App.module.css'
import { FiGithub } from 'react-icons/fi'
import { GrLinkedin, GrGithub } from 'react-icons/gr'


const Header = () => {
    return (
        <div class="row App_header__NiW2c">
           <div class="col-12" style={{ color: 'white', 'font-size': '38px' }}>
            <p>Sitio en Mantenimiento</p>
            </div>
           <div class="col-12" style={{ 'background-color': '#182058',padding: '10px 0','border-radius': '25px'}}>
            <p style={{ margin: '0px 15px'  }}>Nuestro sitio web se encuentra en mantenimiento. Por favor, inténtalo de nuevo más tarde. ¡Gracias por tu paciencia y comprensión! Te invitamos a visitar nuestras redes sociales.</p>
        </div>
       </div>
    )
}

export default Header;