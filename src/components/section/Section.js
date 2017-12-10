import React from 'react'
import PropTypes from 'prop-types'

import THEMES from './datas/themes'

import './assets/section.css'

const Section = ({ title, subtitle, theme = 0 }) => {
  const themeClass = theme ? `section--${ THEMES[theme] }` : ''

  return (
    <section className={ `section ${ themeClass }` }>
      <h3 className="section__title">{ title }</h3>
      <h4 className="section__subtitle">{ subtitle }</h4>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  theme: PropTypes.number,
}

export default Section