import { Link } from 'react-router-dom'
import CodepenSvg from '../../assets/codepen.jsx'
import GithubSvg from '../../assets/github.jsx'
import LinkedinSvg from '../../assets/linkedin.jsx'
import './Footer.css'
const Footer = ({ isDark, setIsDark }) => {

  const toggleDark = () => {
    setIsDark(!isDark)
  }

  return (
    <div className='Footer'>
      <div className='logo' onClick={toggleDark}>
        { isDark ? <img src='../../../public/light.svg'></img> : <img src='../../../public/dark.svg'></img> }
      </div>
      <div className='footer-links'>
        <Link to="https://github.com/TimHuitt" target="_blank" rel="noopener noreferrer">
          <div className='footer-link'>
            <span>
              <GithubSvg />
            </span>
          </div>
        </Link>
        <Link to="https://codepen.io/timhuitt" target="_blank" rel="noopener noreferrer">
          <div className='footer-link'>
            <span>
              <CodepenSvg />
            </span>
          </div>
        </Link>
        <Link to="https://www.linkedin.com/in/timhuitt/" target="_blank" rel="noopener noreferrer">
          <div className='footer-link'>
            <span>
              <LinkedinSvg />
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer