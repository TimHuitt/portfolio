import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <nav className='Header'>
      <Link to="/">Portfolio</Link>
      <Link to="/">Resume</Link>
      <Link to="/">Contact</Link>
    </nav>
  );
};

export default Header;