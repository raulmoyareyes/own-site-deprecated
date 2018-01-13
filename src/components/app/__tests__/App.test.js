import React from 'react'
import { shallow } from 'enzyme'

import { App } from '../../app'

describe('<App />', function () {
  let app

  beforeEach(function () {
    app = shallow(<App />)
  })

  it('should render correctly', function () {
    expect(app).toBeDefined()
    expect(app.exists()).toBeTruthy()
  })

})