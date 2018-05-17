import React from 'react'
import { string } from 'prop-types'

import './assets/paragraph.css'

export const Paragraph = ({ text }) => (
  <p className="paragraph">{ text }</p>
)

Paragraph.propTypes = {
  text: string.isRequired,
}