import { Link } from 'react-router-dom'
import "./Resume.css"
import resumeImage from '../../assets/resume.png'

const Resume = () => {
  const resume_url = "https://docs.google.com/document/d/1_sAfRg1CnfYK6I2_q3yoDlR0f7ZbxTHAT0Y6fEnLhyI/edit?usp=sharing"
  return (
    <div className="Resume">
      <div className="links-container">
        <Link to={resume_url} target="_blank" rel="noopener noreferrer" title="Open in Google Docs">
          <div className="open">
            <button>
              Open
            </button>
          </div>
        </Link>
        <a 
          href="../../Tim-Huitt_Resume.pdf" 
          download="Tim-Huitt_Resume.pdf"
        >
          <div className="download">
            Download
          </div>
        </a>
      </div>
      <div className="resume-container">
        <img src={resumeImage} />
      </div>
      <div className='spacer'>

      </div>
    </div>
  )
}

export default Resume
