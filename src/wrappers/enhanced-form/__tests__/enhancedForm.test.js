import React from 'react'
import { shallow } from 'enzyme'

import { enhancedForm } from '../../enhanced-form'

describe('enhancedForm', () => {
  const fakeEvent = {
    preventDefault: jest.fn(),
    target: {
      type: 'input',
      name: 'email',
      value: 'fake@email.com',
      checked: true,
    }
  }

  const FormComponent = () => (
    <form className="test">Hi</form>
  )

  const props = {
    submit: jest.fn()
  }

  let enhancedFormComponent

  const EnhancedFormComponent = enhancedForm(FormComponent)

  beforeEach(() => {
    enhancedFormComponent = shallow(<EnhancedFormComponent { ...props } />)
  })

  it('should render correctly', () => {
    expect(enhancedFormComponent).toBeDefined()
    expect(enhancedFormComponent.exists()).toBeTruthy()
  })

  it('handleSubmit should call props.submit with form data', () => {
    const fakeForm = { name: 'foo', email: 'fake@email.com' }
    enhancedFormComponent.setState({ form: fakeForm })

    enhancedFormComponent.instance().handleSubmit(fakeEvent)

    expect(props.submit).toHaveBeenCalledWith(fakeForm)
  })

  it('handleChange should set the event info to the state', () => {
    enhancedFormComponent.instance().handleChange(fakeEvent)
    const state = enhancedFormComponent.state()

    const expectedState = { form: { email: 'fake@email.com'} }
    expect(state).toEqual(expectedState)
  })

  describe('getValue method', () => {

    it('should return', () => {
      const value = enhancedFormComponent.instance().getValue(fakeEvent.target)

      const expectedValue = fakeEvent.target.value
      expect(value).toEqual(expectedValue)
    })

    it('should render correctly', () => {
      const fakeTarget = {
        ...fakeEvent.target,
        type: EnhancedFormComponent.CHECKBOX_TYPE,
      }
      const value = enhancedFormComponent.instance().getValue(fakeTarget)

      const expectedValue = fakeEvent.target.checked
      expect(value).toEqual(expectedValue)
    })

  })

})