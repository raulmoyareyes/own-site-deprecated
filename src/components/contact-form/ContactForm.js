import React from 'react'
import { func } from 'prop-types'

import './assets/contact-form.css'

export const ContactForm = ({ change, submit }) => (
  <form className="contact-form" onSubmit={ submit }>
    <input
      type="text"
      name="name"
      placeholder="Tu nombre *"
      onChange={ change }
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Tu email *"
      onChange={ change }
      required
    />

    <input
      type="text"
      name="subject"
      placeholder="El asunto *"
      onChange={ change }
      required
    />

    <textarea
      name="message"
      rows="5"
      placeholder="Escríbe aquí el mensaje"
      onChange={ change }
    ></textarea>

    <button type="submit">Enviar</button>
  </form>
)

ContactForm.propTypes = {
  change: func.isRequired,
  submit: func.isRequired,
}