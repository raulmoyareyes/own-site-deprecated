import React from 'react'

import './assets/footer.css'

const WEBSITE_NAME = process.env.REACT_APP_WEBSITE_NAME
const YEAR = new Date().getFullYear()

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        Copyright © { YEAR } - { WEBSITE_NAME }
      </div>
    </div>
  )
}