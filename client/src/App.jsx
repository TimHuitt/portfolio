import { useState, useEffect } from 'react'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [ isDark, setIsDark ] = useState(false)

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg', isDark ? '#111' : '#f6f7f9')
    root.style.setProperty('--bg-dark', isDark ? '#131519' : '#ebebeb')
    root.style.setProperty('--bg-light', isDark ? '#272d37' : '#fafafa')
    root.style.setProperty('--shadow', isDark ? '#232323' : '#9a9a9a')
    root.style.setProperty('--shadow-light', isDark ? '#282d35' : '#c4d0de')
    root.style.setProperty('--shadow-lighter', isDark ? '#8372a7' : '#aaa')
    root.style.setProperty('color', isDark ? '#ccc' : '#444')
  },[isDark])

  return (
    <div className='App'>
      <Header setIsDark={setIsDark} isDark={isDark} />
      <Main />
      <Footer />
    </div>
  )
}

export default App

