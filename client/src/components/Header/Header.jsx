import { Link } from 'react-router-dom'
import LogoSvg from '../../assets/logo.jsx'

import "./Header.css"

const Header = () => {
  return (
    <nav className='Header'>
      <div className='logo'>
        <LogoSvg />
      </div>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;