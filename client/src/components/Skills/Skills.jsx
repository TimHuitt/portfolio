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
import gitSvg from '/git.svg'
import nodeSvg from '/node.svg'
import pythonSvg from '/python.svg'
import vbaSvg from '/vba.svg'
import jquerySvg from '/jquery.svg'
import nextSvg from '/next.svg'
import typescriptSvg from '/typescript.svg'

const Skills = ({ small, skills }) => {

  const skillsList = {
    'react': { 'name': 'React', 'path': reactSvg },
    'next': { 'name': 'Next.js', 'path': nextSvg },
    'js': { 'name': 'JavaScript', 'path': jsSvg },
    'ts': { 'name': 'TypeScript', 'path': typescriptSvg },
    'django': { 'name': 'Django', 'path': djangoSvg },
    'py': { 'name': 'Python', 'path': pythonSvg },
    'node': { 'name': 'Node.js', 'path': nodeSvg },
    'express': { 'name': 'Express', 'path': expressSvg },
    'mongo': { 'name': 'MongoDB', 'path': mongoSvg },
    'postgresql': { 'name': 'PostgreSQL', 'path': postgresqlSvg },
    'jq': { 'name': 'jQuery', 'path': jquerySvg },
    'vba': { 'name': 'VBA', 'path': vbaSvg },
    'html': { 'name': 'HTML5', 'path': htmlSvg },
    'css': { 'name': 'CSS3', 'path': cssSvg },
    'bootstrap': { 'name': 'Bootstrap', 'path': bootstrapSvg },
    'tailwind': { 'name': 'Tailwind', 'path': tailwindSvg },
    'npm': { 'name': 'npm', 'path': npmSvg },
    'git': { 'name': 'git', 'path': gitSvg },
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
          
            <Tooltip content={name}>
              {skillElement}
            </Tooltip>
          ) : (
            skillElement
          )
        }
      })}
    </div>
  )
}

export default Skills