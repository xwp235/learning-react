import './App.scss'
import {useEffect, useState} from 'react'
import {Outlet, useLocation} from 'react-router-dom'

import AppHeader from './components/AppHeader'
import AppTabs from './components/AppTabs'

import Api from './api'

function App() {

  const [seller, setSeller] = useState(null)
  const location = useLocation()

  useEffect(() => {
    // 设置根元素的字体大小
    const setupHtmlFontsize = () => document.documentElement.style.fontSize = `${(document.documentElement.clientWidth / 375) * 100}px`
    // 初始调用一次
    setupHtmlFontsize()
    // 窗口 resize 时更新字体大小
    window.addEventListener('resize', setupHtmlFontsize)

    async function fetchSeller() {
    const sellerData = await Api.getSeller()
      if (!ignore) {
        setSeller(sellerData)
      }
    }
    let ignore = false
    fetchSeller()

    return () => {
        window.removeEventListener('resize', setupHtmlFontsize)
        ignore = true
    }
  }, [])

  return (
    <div className="App">
        {seller && <AppHeader seller={seller}/>}
        <AppTabs/>
        <Outlet context={location.pathname === '/goods' ? {seller} : null}/>
    </div>
  )
}

export default App
