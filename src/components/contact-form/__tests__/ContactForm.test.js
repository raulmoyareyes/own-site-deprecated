import React from 'react'
import { shallow } from 'enzyme'

import { ContactForm } from '../../contact-form'

describe('<Contact />', () => {
  const props = {
    change: jest.fn(),
    submit: jest.fn(),
  }
  let contactForm

  beforeEach(() => {
    contactForm = shallow(<ContactForm { ...props } />)
  })

  it('should render correctly', () => {
    expect(contactForm).toBeDefined()
    expect(contactForm.exists()).toBeTruthy()
    expect(contactForm.is('.contact-form')).toBeTruthy()
  })

})