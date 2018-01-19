import React from 'react'
import PropTypes from 'prop-types'

import { Paragraph } from '../paragraph'

import THEMES from '../../datas/themes'
import PARAGRAPHS from '../../datas/paragraphs'

import './assets/section.css'

export const Section = ({ title, subtitle, content, theme = 0 }) => {
  const themeClass = theme ? `section--${ THEMES[theme] }` : ''

  return (
    <section className={ `section ${ themeClass }` }>
      <h3 className="section__title">{ title }</h3>
      <h4 className="section__subtitle">{ subtitle }</h4>

      { content && content.map( item => 
        <Paragraph key={ item.id } { ...PARAGRAPHS[item.id] } />
      ) }

    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  theme: PropTypes.number,
}