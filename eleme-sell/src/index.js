import React from 'react'
import ReactDOM from 'react-dom/client'

import {RouterProvider} from 'react-router-dom'

import router from './router'
import App from './App'

const setupHtmlFontsize = () => document.documentElement.style.fontSize = `${document.documentElement.clientWidth / 375 * 100}px`
window.addEventListener('resize', setupHtmlFontsize)
setupHtmlFontsize()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
  </React.StrictMode>
)
