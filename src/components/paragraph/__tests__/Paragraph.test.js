import React from 'react'
import { shallow } from 'enzyme'

import { Paragraph } from '../../paragraph'

describe('<Paragraph />', function () {
  const props = {
    text: 'hello world!',
  }

  let paragraph

  beforeEach(function () {
    paragraph = shallow(<Paragraph { ...props }/>)
  })

  it('should render correctly', function () {
    expect(paragraph).toBeDefined()
    expect(paragraph.exists()).toBeTruthy()
  })

})