import React, { Fragment } from 'react'

import { Menu } from '../menu'
import { Header } from '../header'
import { Section } from '../section'

// TODO: Replace with Firebase Database
import SECTIONS from '../../datas/sections'

import './assets/app.css'

export const App = () => {
  return (
    <Fragment>
      <Menu />
      <Header />
      { SECTIONS.map(section => 
        section.visible && <Section key={ section.id } { ...section } />
      ) }
    </Fragment>
  )
}