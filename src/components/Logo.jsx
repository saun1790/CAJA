import React from 'react'
import classes from '../styles/App.module.css'
import { FiGithub } from 'react-icons/fi'
import { GrLinkedin, GrGithub } from 'react-icons/gr'
import MiImagen from '../images/logo_cajamag_blanco.png';

const Logo = () => {
    return (
        <div class="d-flex flex-row justify-content-center App_logo__9xoKS">
        <div>
        <img src={MiImagen} alt="logo" style={{ width:'250px', height: '100px' }} /></div>
        </div>
    )
}

export default Logo;