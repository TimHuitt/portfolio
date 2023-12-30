import "./Resume.css"
import { useEffect } from 'react'
import resumePDF from '../../assets/resume.pdf'

const Resume = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="Resume">
      <div className="resume-container">
        <object data={resumePDF} type="application/pdf" width="100%" height="100%" />
      </div>
    </div>
  )
}

export default Resume
