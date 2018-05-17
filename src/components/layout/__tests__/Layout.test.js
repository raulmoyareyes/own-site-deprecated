import React from 'react'
import { shallow } from 'enzyme'

import { Layout } from '../../layout'

describe('<Layout />', () => {
  let layout

  beforeEach(() => {
    layout = shallow(<Layout />)
  })

  it('should render correctly', () => {
    expect(layout).toBeDefined()
    expect(layout.exists()).toBeTruthy()
  })

})