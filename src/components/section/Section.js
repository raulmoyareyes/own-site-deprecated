import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ title, subtitle }) => {
  return (
    <section className="section">
      <h3>{ title }</h3>
      <h4>{ subtitle }</h4>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Section