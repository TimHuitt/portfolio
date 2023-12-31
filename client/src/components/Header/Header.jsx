import { Link, useLocation } from 'react-router-dom'
import LogoSvg from '../../assets/logo.jsx'

import "./Header.css"

const Header = ({ isDark, setIsDark }) => {
  const loc = useLocation().pathname

  const toggleDark = () => {
    setIsDark(!isDark)
  }

  return (
    <nav className='Header'>
      <div className='logo' onClick={toggleDark}>
        <LogoSvg />
      </div>
      <Link 
        to="/projects" 
        className={loc==='/projects' ? 'selected' : ''}
      >
        Projects
      </Link>
      <Link 
        to="/resume" 
        className={loc==='/resume' ? 'selected' : ''}
      >
        Resume
      </Link>
      <Link 
        to="/contact" 
        className={loc==='/contact' ? 'selected' : ''}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Header;

