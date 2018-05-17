import React from 'react'

import { ContactFormContainer } from '../../containers/contact-form-container'

import './assets/contact.css'

export const Contact = () => (
  <div className="contact">
    <h3 className="contact__title">CONTACTO</h3>

    <div className="contact__info">
      <p>Envíame un mensaje, estaré encantado de hablar contigo. Puedes usar el formulario de la derecha o enviarme un email.</p>
      <h4>info@raulmoya.es</h4>
    </div>

    <div className="contact__form">
      <ContactFormContainer />
    </div>
  </div>
)