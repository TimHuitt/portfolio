import "./Resume.css"
import resumeImage from '../../assets/resume.png'

const Resume = () => {
  return (
    <div className="Resume">
      <div className="resume-container">
        <img src={resumeImage} />
      </div>
    </div>
  )
}

export default Resume
