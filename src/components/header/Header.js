import React from 'react'

import './assets/header.css'

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        raú<span className="header__title--effect">l:</span>moya
      </h1>
      <h2 className="header__subtitle">
        Frontend Engineer & Javascript Developer
      </h2>
    </header>
  )
}