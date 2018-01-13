import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './components/app'
import registerServiceWorker from './services/service-worker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
