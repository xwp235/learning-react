import './App.scss'
import {useEffect} from 'react'
import {Outlet} from 'react-router-dom'

import AppHeader from './components/AppHeader'
import AppTabs from './components/AppTabs'

function App() {
  useEffect(() => {
    // 设置根元素的字体大小
    const setupHtmlFontsize = () => document.documentElement.style.fontSize = `${(document.documentElement.clientWidth / 375) * 100}px`
    // 初始调用一次
    setupHtmlFontsize()
    // 窗口 resize 时更新字体大小
    window.addEventListener('resize', setupHtmlFontsize)
    // 清理监听器
    return () => window.removeEventListener('resize', setupHtmlFontsize)
  }, [])

  return (
    <div className="App">
        <AppHeader />
        <AppTabs/>
        <Outlet/>
    </div>
  )
}

export default App
