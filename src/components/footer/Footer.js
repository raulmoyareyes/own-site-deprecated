import React from 'react'

import { Icon } from '../icon'

import './assets/footer.css'

const WEBSITE_AUTHOR = process.env.REACT_APP_WEBSITE_AUTHOR
const YEAR = new Date().getFullYear()

const SOCIAL_NETWORKS = [
  { name: 'github', link: 'https://github.com/raulmoyareyes' },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/raulmoyareyes/' },
  { name: 'twitter', link: 'https://twitter.com/raulmoyareyes' },
]

export const Footer = () => (
  <div className="footer">
    <div className="footer__content">
      <span>Copyright © { YEAR } - { WEBSITE_AUTHOR }</span>

      { SOCIAL_NETWORKS.map((network, index) => (
        <a key={ index } href={ network.link } target="_blank" rel="noopener noreferrer">
          <Icon name={ network.name }/>
        </a>
      ))}
    </div>
  </div>
)