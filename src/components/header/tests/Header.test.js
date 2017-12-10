import React from 'react'
import { shallow } from 'enzyme'

import Header from '../'

describe('<Header />', function () {
  let header

  beforeEach(function () {
    header = shallow(<Header />)
  })

  it('should render correctly', function () {
    expect(header).toBeDefined()
    expect(header.exists()).toBe(true)
    expect(header.is('.header')).toBe(true)
  })

})