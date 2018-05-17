import React from 'react'

import './assets/header.css'

const WEBSITE_SUBTITLE = process.env.REACT_APP_WEBSITE_SUBTITLE

export const Header = () => (
  <header className="header">
    <h1 className="header__title">
      raú<span className="header__title--effect">l:</span>moya
    </h1>
    <h2 className="header__subtitle">{ WEBSITE_SUBTITLE }</h2>
  </header>
)