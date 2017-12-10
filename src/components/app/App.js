import React, { Fragment } from 'react'

import Header from '../header'
import Section from '../section'

// TODO: Replace with Firebase Database
import SECTIONS from '../section/datas/sections'

import './assets/app.css'

const App = () => {
  return (
    <Fragment>
      <Header />
      { SECTIONS.map( section =>
        <Section key={ section.id } { ...section } />
      ) }
    </Fragment>
  )
}

export default App