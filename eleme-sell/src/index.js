import React from 'react'
import ReactDOM from 'react-dom/client'

import {RouterProvider} from 'react-router-dom'

import router from './router'
import App from './App'

let env
const host = window.location.host
if (host.indexOf('localhost') > -1 || host.indexOf('127.0.0.1') > -1) {
    env = 'dev'
} else if (host === 'xwp235.github.io') {
    env = 'staging'
} else {
    env = 'prod'
}
document.documentElement.dataset.env = env

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
  </React.StrictMode>
)
