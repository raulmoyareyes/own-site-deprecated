import React, { StrictMode } from 'react'

import { Menu } from '../menu'
import { Header } from '../header'
import { Section } from '../section'
import { Contact } from '../contact'
import { Footer } from '../footer'

// TODO: Replace with Firebase Database
import SECTIONS from '../../data/sections'

import './assets/layout.css'

export const Layout = () => (
  <StrictMode>
    <Menu />
    <Header />
    { SECTIONS.map(section =>
      section.visible && <Section key={ section.id } { ...section } />
    ) }
    <Contact />
    <Footer />
  </StrictMode>
)