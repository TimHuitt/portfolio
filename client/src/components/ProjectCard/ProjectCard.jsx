/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import "./ProjectCard.css"
export const ProjectCard = ({p}) => {
  return (
    <div className="project-wrapper">
      <Link to={"/project/" + p._id}>
        <div className='project'>
          <p>{p.title}</p>
          <p>{p.description}</p>
          <p>{p.gitLink}</p>
          <p>{p.deployLink}</p>
        </div>
      </Link>
    </div>
  )
}
