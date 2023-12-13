import { Link } from 'react-router-dom'
import LogoSvg from '../../assets/logo.jsx'

import "./Header.css"

const Header = () => {
  return (
    <nav className='Header'>
      <div className='logo'>
        <LogoSvg />
      </div>
      <Link to="/">Projects</Link>
      <Link to="/">Resume</Link>
      <Link to="/">Contact</Link>
    </nav>
  );
};

export default Header;