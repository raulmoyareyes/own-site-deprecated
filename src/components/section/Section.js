import React from 'react'
import { string, array, number } from 'prop-types'

import { Paragraph } from '../paragraph'

import THEMES from '../../data/themes'
import PARAGRAPHS from '../../data/paragraphs'

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
  title: string.isRequired,
  subtitle: string.isRequired,
  content: array.isRequired,
  theme: number,
}