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

const Skills = ({ size, skills }) => {

  const skillsList = [
    {'name': 'React', 'link': reactSvg},
    {'name': 'Express', 'link': expressSvg},
    {'name': 'Mongo', 'link': mongoSvg},
    {'name': 'Node.js', 'link': nodeSvg},
    {'name': 'JavaScript', 'link': jsSvg},
    {'name': 'jQuery', 'link': jquerySvg},
    {'name': 'Python', 'link': pythonSvg},
    {'name': 'VBA', 'link': vbaSvg},
    {'name': 'HTML5', 'link': htmlSvg},
    {'name': 'CSS3', 'link': cssSvg},
    {'name': 'Bootstrap', 'link': bootstrapSvg},
    {'name': 'Tailwind', 'link': tailwindSvg},
    {'name': 'npm', 'link': npmSvg},
    {'name': 'git', 'link': gitSvg},
  ]

  return (
    <div className="Skills">
      {skillsList.map((skill) => (
        <div className="skill-container" key={"skill-" + skill.name}>
          <img src={skill.link} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Skills