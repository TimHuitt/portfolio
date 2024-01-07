import { Link, useLocation } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  const loc = useLocation().pathname

  return (
    <nav className='Header'>

      <div className='header-title'>
        <Link to="/"><h1>Tim Huitt</h1></Link>
      </div>
      <Link 
        to="/projects" 
        className={loc==='/projects' ? 'selected tab' : 'tab'}
      >
        Projects
      </Link>
      <Link 
        to="/resume" 
        className={loc==='/resume' ? 'selected tab' : 'tab'}
      >
        Resume
      </Link>
      <Link 
        to="/contact" 
        className={loc==='/contact' ? 'selected tab' : 'tab'}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Header;

