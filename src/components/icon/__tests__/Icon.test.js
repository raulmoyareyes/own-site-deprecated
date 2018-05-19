import React from 'react'
import { shallow } from 'enzyme'

import { Icon } from '../../icon'

describe('<Icon />', () => {
  const props = {
    name: 'github',
  }

  let icon

  beforeEach(() => {
    icon = shallow(<Icon { ...props }/>)
  })

  it('should render correctly', () => {
    expect(icon).toBeDefined()
    expect(icon.exists()).toBeTruthy()
  })

})