import React from 'react'
import classes from '../styles/App.module.css'
import { FiGithub } from 'react-icons/fi'
import { GrLinkedin, GrGithub } from 'react-icons/gr'

const Subscribe = () => {
    return (
        <div class="row">
            <div class="col-12">
                <div class="mb-3 App_subscribe__nJo4n input-group">
                    <input placeholder="Introduzca la dirección de correo electrónico" aria-label="Email" class="form-control" value="" />
                    <button type="button" id="button-addon2" class="btn btn-outline-secondary">Notifícame</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;