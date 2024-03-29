import { useState, useEffect } from 'react'
import { useScrollContext } from './scrollContext'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const  { windowRef }  = useScrollContext()
  const [ isDark, setIsDark ] = useState(true)

  useEffect(() => {
    const root = document.documentElement;
    const gradientLight = "linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, .85) 50%, rgba(255, 255, 255, .5) 75%, rgba(255, 255, 255, 0) 100%)"
    const gradientDark = "linear-gradient(rgba(28, 30, 41, 1) 0%, rgba(28, 30, 41, 1) 25%, rgba(28, 30, 41, .85) 50%, rgba(28, 30, 41, .5) 75%, rgba(28, 30, 41, 0) 100%"
    root.style.setProperty('--bg', isDark ? '#1c1e29' : '#f6f7f9')
    root.style.setProperty('--bg-dark', isDark ? '#131519' : '#ebebeb')
    root.style.setProperty('--bg-light', isDark ? '#272d37' : '#fafafa')
    root.style.setProperty('--shadow', isDark ? '#232323' : '#454b54')
    root.style.setProperty('--footer', isDark ? '#648792' : '#c4d0de')
    root.style.setProperty('--shadow-light', isDark ? '#282d35' : '#c4d0de')
    root.style.setProperty('--shadow-lighter', isDark ? '#7281a7' : '#c4d0de')
    root.style.setProperty('--gradient-light', isDark ? gradientDark : gradientLight)
    root.style.setProperty('color', isDark ? '#ccc' : '#444')
  },[isDark])

  useEffect(() => {
    const clearStorage = () => {
      sessionStorage.clear()
    }
    window.addEventListener('beforeunload', clearStorage)

    return () => {
      window.removeEventListener('beforeunload', clearStorage)
    }
  },[])

  return (
    <div className='App' ref={windowRef}>
      <Header isDark={isDark}/>
      <Main />
      <Footer setIsDark={setIsDark} isDark={isDark} />
    </div>
  )
}

export default App

