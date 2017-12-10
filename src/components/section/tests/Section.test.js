import React from 'react'
import { shallow } from 'enzyme'

import Section from '../'

describe('<Header />', function () {
  let section

  beforeEach(function () {
    section = shallow(<Section />)
  })

  it('should render correctly', function () {
    expect(section).toBeDefined()
    expect(section.exists()).toBeTruthy()
  })

})