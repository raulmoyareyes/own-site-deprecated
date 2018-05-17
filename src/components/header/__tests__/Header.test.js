import React from 'react'
import { shallow } from 'enzyme'

import { Header } from '../../header'

describe('<Header />', () => {
  let header

  beforeEach(() => {
    header = shallow(<Header />)
  })

  it('should render correctly', () => {
    expect(header).toBeDefined()
    expect(header.exists()).toBeTruthy()
    expect(header.is('.header')).toBeTruthy()
  })

})