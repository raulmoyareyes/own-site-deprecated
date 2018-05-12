import React, { StrictMode } from 'react'

import { Menu } from '../menu'
import { Header } from '../header'
import { Section } from '../section'
import { Footer } from '../footer'

// TODO: Replace with Firebase Database
import SECTIONS from '../../datas/sections'

import './assets/app.css'

export const App = () => {
  return (
    <StrictMode>
      <Menu />
      <Header />
      { SECTIONS.map(section =>
        section.visible && <Section key={ section.id } { ...section } />
      ) }
      <Footer />
    </StrictMode>
  )
}