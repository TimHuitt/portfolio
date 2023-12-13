import { Link } from 'react-router-dom'
import CodepenSvg from '../../assets/codepen.jsx'
import GithubSvg from '../../assets/github.jsx'
import LinkedinSvg from '../../assets/linkedin.jsx'
import './Footer.css'
const Footer = () => {

  return (
    <div className='Footer'>
      <div className='footer-title'>
        <Link to="/"><h1>Tim Huitt</h1></Link>
      </div>
      <div className='footer-links'>
        <Link to="https://github.com/TimHuitt" target="_blank" rel="noopener noreferrer">
          <div className='footer-link'>
            <span>
              <GithubSvg />
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
        <Link to="https://codepen.io/timhuitt" target="_blank" rel="noopener noreferrer">
          <div className='footer-link'>
            <span>
              <CodepenSvg />
            </span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Footer