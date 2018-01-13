import React, { Fragment } from 'react'

import { Header } from '../header'
import { Section } from '../section'

// TODO: Replace with Firebase Database
import SECTIONS from '../../datas/sections'

import './assets/app.css'

export const App = () => {
  const section = SECTIONS[0]
  return (
    <Fragment>
      <Header />
      <Section key={ section.id } { ...section } />
    </Fragment>
  )
}