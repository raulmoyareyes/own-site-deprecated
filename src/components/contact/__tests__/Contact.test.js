import React from 'react'
import { shallow } from 'enzyme'

import { Contact } from '../../contact'

describe('<Contact />', () => {
  let contact

  beforeEach(() => {
    contact = shallow(<Contact />)
  })

  it('should render correctly', () => {
    expect(contact).toBeDefined()
    expect(contact.exists()).toBeTruthy()
    expect(contact.is('.contact')).toBeTruthy()
  })

})