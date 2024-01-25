import { Link } from 'react-router-dom'
import "./Resume.css"
import { useEffect } from 'react'
import resumePDF from '../../assets/Tim-Huitt_Resume.pdf'

const Resume = () => {
  const resume_url = "https://docs.google.com/document/d/1_sAfRg1CnfYK6I2_q3yoDlR0f7ZbxTHAT0Y6fEnLhyI/edit?usp=sharing"

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="Resume">
      
      <div className="resume-container">
        <div className="links-container">
          <Link to={resume_url} target="_blank" rel="noopener noreferrer" title="Open in Google Docs">
            <div className="open">
              <button>
                Open .docx
              </button>
            </div>
          </Link>
        </div>
        <object data={resumePDF} type="application/pdf" width="100%" height="100%" />
      </div>
    </div>
  )
}

export default Resume
