import React from 'react'
import classes from '../styles/App.module.css'
import { GrLinkedin, GrInstagram, GrFacebookOption,GrTwitter } from 'react-icons/gr'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className="d-flex flex-row justify-content-center">
                <div className={classes.social}>
                    <a href="https://twitter.com/cajamag" target="_blank" rel="noopener noreferrer">
                        <GrTwitter />
                    </a>
                </div>
                <div className={classes.social}>
                    <a href="https://www.instagram.com/cajamag.oficial/?hl=es" target="_blank" rel="noopener noreferrer">
                        <GrInstagram />
                    </a>
                </div>
                <div className={classes.social}>
                    <a href="https://www.facebook.com/cajamag/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <GrFacebookOption />
                    </a>
                </div>
            </div>
            <div className={classes.copyright}>
                <small>
                    Copyright 2024 by Mrh Rifat | All Rights & Licensed Reserved
                </small>
            </div>
        </div>
    )
}

export default Footer;