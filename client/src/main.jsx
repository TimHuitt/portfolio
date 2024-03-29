import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ScrollProvider } from './scrollContext.jsx'
import ReactGA from 'react-ga4'

ReactGA.initialize("G-BQPMN865T2")

ReactDOM.createRoot(document.getElementById('root')).render(
  <ScrollProvider>
    <Router>
      <App />
    </Router>
  </ScrollProvider>
)