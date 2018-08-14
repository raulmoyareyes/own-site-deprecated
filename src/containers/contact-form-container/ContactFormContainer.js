import React, { PureComponent } from 'react'

import { Email } from '../../services/email'
import { ContactForm } from '../../components/contact-form'
import { enhancedForm } from '../../wrappers/enhanced-form'

const EnhancedContactForm = enhancedForm(ContactForm)

export class ContactFormContainer extends PureComponent {

  constructor() {
    super()

    this.sendEmail = this.sendEmail.bind(this)
  }

  sendEmail(form) {
    Email.send(form)
  }

  render () {
    return (
      <EnhancedContactForm submit={ this.sendEmail } />
    )
  }
}