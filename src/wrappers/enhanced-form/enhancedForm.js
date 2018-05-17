import React, { Component } from 'react'
import { func } from 'prop-types'

export const enhancedForm = WrappedComponent => {
  class EnhancedForm extends Component {

    state = {
      form: {},
    }

    constructor(props) {
      super(props)

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
      event.preventDefault()

      const { form } = this.state
      console.log(form)
      this.props.submit(form)
    }

    handleChange(event) {
      const { target } = event

      const name = target.name
      const value = this.getValue(target)

      this.setState(state => ({
        form: {
          ...state.form,
          ...{ [name] : value },
        }
      }))
    }

    getValue(target) {
      if (target.type === 'checkbox') {
        return target.checked
      }

      return target.value
    }

    render() {
      const { form } = this.state

      return <WrappedComponent
        form={ form }
        change={ this.handleChange }
        submit={ this.handleSubmit }
      />
    }
  }

  EnhancedForm.displayName = `enhancedForm(${getDisplayName(WrappedComponent)})`
  EnhancedForm.propTypes = {
    submit: func.isRequired,
  }

  return EnhancedForm
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent && (WrappedComponent.displayName || WrappedComponent.name || 'Component')
}