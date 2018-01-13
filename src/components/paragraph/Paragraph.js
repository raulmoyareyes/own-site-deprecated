import React from 'react'
import PropTypes from 'prop-types'

import './assets/paragraph.css'

export const Paragraph = ({ text }) => {
  return (
    <p className="paragraph">{ text }</p>
  )
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
}