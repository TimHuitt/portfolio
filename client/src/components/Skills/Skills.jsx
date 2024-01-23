/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import './Skills.css'
import reactSvg from '/react.svg'
import expressSvg from '/express.svg'
import mongoSvg from '/mongo.svg'
import jsSvg from '/javascript.svg'
import htmlSvg from '/html.svg'
import cssSvg from '/css.svg'
import djangoSvg from '/django.svg'
import bootstrapSvg from '/bootstrap.svg'
import postgresqlSvg from '/postgresql.svg'
import tailwindSvg from '/tailwind.svg'
import npmSvg from '/npm.svg'
import gitSvg from '/git.svg'
import nodeSvg from '/node.svg'
import pythonSvg from '/python.svg'
import vbaSvg from '/vba.svg'
import jquerySvg from '/jquery.svg'

const Skills = ({ small, skills }) => {

  const skillsList = {
    'react': { 'name': 'React', 'link': reactSvg },
    'express': { 'name': 'Express', 'link': expressSvg },
    'mongo': { 'name': 'Mongo', 'link': mongoSvg },
    'node': { 'name': 'Node.js', 'link': nodeSvg },
    'django': { 'name': 'Django', 'link': djangoSvg },
    'postgresql': { 'name': 'PostgreSQL', 'link': postgresqlSvg },
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
          skills.includes(skill) || skills === 'all' ? (
            <div className="skill-container" key={"skill-" + name}>
              <img src={link} />
              <p>{name}</p>
            </div>
          ) : (
            null
          )
        )
      })}
    </div>
  )
}

export default Skills