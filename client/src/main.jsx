import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from 'react-ga4'
import { BrowserRouter as Router } from 'react-router-dom'

ReactGA.initialize("G-BQPMN865T2")

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)