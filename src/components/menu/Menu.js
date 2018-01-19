import React from 'react'

import './assets/menu.css'

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="https://raulmoya.es" className="active">Home</a></li>
        <li><a href="https://blog.raulmoya.es">Blog</a></li>
      </ul>
    </nav>
  )
}