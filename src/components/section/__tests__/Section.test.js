import React from 'react'
import { shallow } from 'enzyme'

import { Section } from '../../section'

describe('<Section />', function () {
  const props = {
    id: 1,
    title: 'GOOD TITLE',
    subtitle: 'the best subtitle',
    content: [ 
      { type: 'paragraph', id: '1' },
      { type: 'paragraph', id: '2' },
      { type: 'paragraph', id: '3' },
    ],
  }

  let section

  beforeEach(function () {
    section = shallow(<Section { ...props }/>)
  })

  it('should render correctly', function () {
    expect(section).toBeDefined()
    expect(section.exists()).toBeTruthy()
  })

  it('should render with section--* class name if has a theme', function () {
    section.setProps({ theme: -1 })

    expect(section.is('section')).toBeTruthy()
    expect(section.hasClass('section--undefined')).toBeTruthy()
  })

})