import React from 'react'
import { shallow } from 'enzyme'

import { ContactFormContainer } from '../../contact-form-container'
import { Email } from '../../../services/email'

describe('<ContactFormContainer />', () => {
  let contactFormContainer

  beforeEach(() => {
    contactFormContainer = shallow(<ContactFormContainer />)
  })

  it('should render correctly', () => {
    expect(contactFormContainer).toBeDefined()
    expect(contactFormContainer.exists()).toBeTruthy()
  })

  it('sendEmail should send a email with the email service', () => {
    const fakeForm = { name: 'Foo', email: 'foo@foo.com' }

    contactFormContainer.instance().sendEmail(fakeForm)

    expect(Email.send).toHaveBeenCalledWith(fakeForm)
  })

})