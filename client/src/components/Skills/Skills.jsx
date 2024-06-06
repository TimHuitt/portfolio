/* eslint-disable react/prop-types */
import Tooltip from '../Tooltip/Tooltip'
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
import nodeSvg from '/node.svg'
import gitSvg from '/git.svg'
import axiosSvg from '/axios.svg'
import pythonSvg from '/python.svg'
import openaiSvg from '/openai.svg'
import vbaSvg from '/vba.svg'
import jquerySvg from '/jquery.svg'
import nextSvg from '/next.svg'
import typescriptSvg from '/typescript.svg'
import cloudinarySvg from '/cloudinary.svg'

const Skills = ({ small, skills }) => {

  const skillsList = {
    'react': { 'name': 'React', 'path': reactSvg },
    'next': { 'name': 'Next.js', 'path': nextSvg },
    'js': { 'name': 'JavaScript', 'path': jsSvg },
    'ts': { 'name': 'TypeScript', 'path': typescriptSvg },
    'node': { 'name': 'Node.js', 'path': nodeSvg },
    'postgresql': { 'name': 'PostgreSQL', 'path': postgresqlSvg },
    'tailwind': { 'name': 'Tailwind', 'path': tailwindSvg },
    'django': { 'name': 'Django', 'path': djangoSvg },
    'openai': { 'name': 'OpenAI', 'path': openaiSvg },
    'py': { 'name': 'Python', 'path': pythonSvg },
    'express': { 'name': 'Express', 'path': expressSvg },
    'mongo': { 'name': 'MongoDB', 'path': mongoSvg },
    'jq': { 'name': 'jQuery', 'path': jquerySvg },
    'vba': { 'name': 'VBA', 'path': vbaSvg },
    'html': { 'name': 'HTML5', 'path': htmlSvg },
    'css': { 'name': 'CSS3', 'path': cssSvg },
    'bootstrap': { 'name': 'Bootstrap', 'path': bootstrapSvg },
    'npm': { 'name': 'npm', 'path': npmSvg },
    'git': { 'name': 'git', 'path': gitSvg },
    'axios': { 'name': 'Axios', 'path': axiosSvg },
    'cloudinary': { 'name': 'cloudinary', 'path': cloudinarySvg },
  }

  return (
    <div className="Skills">
      {Object.keys(skillsList).map((skill) => {
        const name = skillsList[skill].name
        const path = skillsList[skill].path
        
        if (skills.includes(skill) || skills === 'all') {
          const skillElement = ( 
            <div 
              className="skill-container" 
              key={"skill-" + name} 
              style={{ width: small ? '30px' : '50px', height: small ? '30px' : '50px' }}
            >
              <img src={path} alt={name} style={{ height: small ? '85%' : '60%' }}/>
              <p>{small ? '' : name}</p>
            </div>
          )

          return small ? (
            <Tooltip key={"skill-" + name + "-tooltip"} content={name}>
              {skillElement}
            </Tooltip>
          ) : (
            <Tooltip key={"skill-" + name + "-tooltip"} content={name}>
              {skillElement}
            </Tooltip>
          )
        }
      })}
    </div>
  )
}

export default Skills