import React from 'react'
import { shallow } from 'enzyme'

import { Header } from '../../header'

describe('<Header />', function () {
  let header

  beforeEach(function () {
    header = shallow(<Header />)
  })

  it('should render correctly', function () {
    expect(header).toBeDefined()
    expect(header.exists()).toBeTruthy()
    expect(header.is('.header')).toBeTruthy()
  })

})