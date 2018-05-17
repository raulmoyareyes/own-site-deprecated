import React from 'react'
import { shallow } from 'enzyme'

import { Footer } from '../../footer'

describe('<Footer />', () => {
  let footer

  beforeEach(() => {
    footer = shallow(<Footer />)
  })

  it('should render correctly', () => {
    expect(footer).toBeDefined()
    expect(footer.exists()).toBeTruthy()
    expect(footer.is('.footer')).toBeTruthy()
  })

})