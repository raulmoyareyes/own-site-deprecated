import React from 'react'
import { shallow } from 'enzyme'

import { Paragraph } from '../../paragraph'

describe('<Paragraph />', () => {
  const props = {
    text: 'hello world!',
  }

  let paragraph

  beforeEach(() => {
    paragraph = shallow(<Paragraph { ...props }/>)
  })

  it('should render correctly', () => {
    expect(paragraph).toBeDefined()
    expect(paragraph.exists()).toBeTruthy()
  })

})