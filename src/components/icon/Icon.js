import React from 'react'
import { oneOf } from 'prop-types'

import 'simple-line-icons/css/simple-line-icons.css'
import './assets/icon.css'

const ICONS = {
  'github': 'icon-social-github',
  'linkedin': 'icon-social-linkedin',
  'twitter': 'icon-social-twitter',
}

export const Icon = ({ name }) => {
  return (
    <i className={ `icon ${ICONS[name]}` }></i>
  )
}

Icon.propTypes = {
  name: oneOf(['github', 'linkedin', 'twitter' ]),
}