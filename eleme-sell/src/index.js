import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const setupHtmlFontsize = () => document.documentElement.style.fontSize = `${document.documentElement.clientWidth / 375 * 100}px`
window.addEventListener('resize', setupHtmlFontsize)
setupHtmlFontsize()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
