import React from 'react'
import ReactDOM from 'react-dom'

import { Layout } from './components/layout'
import registerServiceWorker from './services/service-worker'

ReactDOM.render(<Layout />, document.getElementById('root'))
registerServiceWorker()
