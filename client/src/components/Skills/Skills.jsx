import { useEffect } from 'react'
import './Skills.css'
import reactSvg from '../../assets/react.svg'
import expressSvg from '../../assets/express.svg'
import mongoSvg from '../../assets/mongo.svg'
import jsSvg from '../../assets/javascript.svg'
import htmlSvg from '../../assets/html.svg'
import cssSvg from '../../assets/css.svg'
import bootstrapSvg from '../../assets/bootstrap.svg'
import tailwindSvg from '../../assets/tailwind.svg'
import npmSvg from '../../assets/npm.svg'
import gitSvg from '../../assets/git.svg'
import nodeSvg from '../../assets/node.svg'
import pythonSvg from '../../assets/python.svg'
import vbaSvg from '../../assets/vba.svg'
import jquerySvg from '../../assets/jquery.svg'

const Skills = ({ small, skills }) => {

  const skillsList = {
    'react': { 'name': 'React', 'link': reactSvg },
    'express': { 'name': 'Express', 'link': expressSvg },
    'mongo': { 'name': 'Mongo', 'link': mongoSvg },
    'node': { 'name': 'Node.js', 'link': nodeSvg },
    'js': { 'name': 'JavaScript', 'link': jsSvg },
    'jq': { 'name': 'jQuery', 'link': jquerySvg },
    'py': { 'name': 'Python', 'link': pythonSvg },
    'vba': { 'name': 'VBA', 'link': vbaSvg },
    'html': { 'name': 'HTML5', 'link': htmlSvg },
    'css': { 'name': 'CSS3', 'link': cssSvg },
    'bootstrap': { 'name': 'Bootstrap', 'link': bootstrapSvg },
    'tailwind': { 'name': 'Tailwind', 'link': tailwindSvg },
    'npm': { 'name': 'npm', 'link': npmSvg },
    'git': { 'name': 'git', 'link': gitSvg },
  }
  
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--skills-width', small ? '30px' : '50px')
    root.style.setProperty('--skills-height', small ? '30px' : '50px')
    root.style.setProperty('--skills-display', small ? 'none' : 'block')
    root.style.setProperty('--skills-img-height', small ? '85%' : '60%')
  },[])

  return (
    <div className="Skills">
      {Object.keys(skillsList).map((skill) => {
          const name = skillsList[skill].name
          const link = skillsList[skill].link
        return (
          <div className="skill-container" key={"skill-" + name}>
            <img src={link} />
            <p>{name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Skills