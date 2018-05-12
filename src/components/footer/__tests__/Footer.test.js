import React from 'react'
import { shallow } from 'enzyme'

import { Footer } from '../../footer'

describe('<Footer />', function () {
  let footer

  beforeEach(function () {
    footer = shallow(<Footer />)
  })

  it('should render correctly', function () {
    expect(footer).toBeDefined()
    expect(footer.exists()).toBeTruthy()
    expect(footer.is('.footer')).toBeTruthy()
  })

})