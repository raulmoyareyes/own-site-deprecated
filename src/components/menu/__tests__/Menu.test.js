import React from 'react'
import { shallow } from 'enzyme'

import { Menu } from '../../menu'

describe('<Menu />', function () {
  const props = {
    text: 'hello world!',
  }

  let menu

  beforeEach(function () {
    menu = shallow(<Menu { ...props }/>)
  })

  it('should render correctly', function () {
    expect(menu).toBeDefined()
    expect(menu.exists()).toBeTruthy()
  })

})