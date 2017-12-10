import React from 'react'
import { shallow } from 'enzyme'

import Section from '../'

describe('<Header />', function () {
  const props = {
    id: 1,
    title: 'GOOD TITLE',
    subtitle: 'the best subtitle',
    theme: 1,
  }

  let section

  beforeEach(function () {
    section = shallow(<Section { ...props }/>)
  })

  it('should render correctly', function () {
    expect(section).toBeDefined()
    expect(section.exists()).toBeTruthy()
  })

})