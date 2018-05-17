import React from 'react'
import { shallow } from 'enzyme'

import { Menu } from '../../menu'

describe('<Menu />', () => {
  const props = {
    text: 'hello world!',
  }

  let menu

  beforeEach(() => {
    menu = shallow(<Menu { ...props }/>)
  })

  it('should render correctly', () => {
    expect(menu).toBeDefined()
    expect(menu.exists()).toBeTruthy()
  })

})