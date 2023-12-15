import { Link } from 'react-router-dom'
import './Contact.css'
const Contact = () => {

  return (
    <div className='Contact'>
      <div className='contact-header'>
          <h1 className='p-4 font-bold text-3xl'>Contact</h1>
      </div>
      <div className="contact-container">
        <a href="mailto:timhuitt@gmail.com">
          <div className='contact'>
              <button>
                TimHuitt@gmail.com
              </button>
          </div>
        </a>
        <Link to="https://linkedin.com/in/timhuitt" target="_blank" rel="noopener noreferrer">
          <div className='contact'>
              <button>
                LinkedIn.com/in/TimHuitt
              </button>
          </div>
        </Link>
        <Link to="https://github.com/TimHuitt" target="_blank" rel="noopener noreferrer">
          <div className='contact'>
              <button>
                GitHub.com/TimHuitt
              </button>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Contact