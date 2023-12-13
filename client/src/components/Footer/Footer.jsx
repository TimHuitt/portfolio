
import './Footer.css'
import CodepenSvg from '../../assets/codepen.jsx'
import GithubSvg from '../../assets/github.jsx'
import LinkedinSvg from '../../assets/linkedin.jsx'
// import LogoSvg from '../../assets/logo.jsx'
const Footer = () => {

  return (
    <div className='Footer'>
      <div className='footer-title'>
        <h1>Tim Huitt</h1>
      </div>
      <div className='footer-links'>
        <div className='footer-link'>
          <span>
            <GithubSvg />
          </span>
        </div>
        <div className='footer-link'>
          <span>
            <LinkedinSvg />
          </span>
        </div>
        <div className='footer-link'>
          <span>
            <CodepenSvg />
          </span>
        </div>

      </div>
    </div>
  )
}

export default Footer