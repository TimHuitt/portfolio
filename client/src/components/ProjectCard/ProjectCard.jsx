/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Skills from '../../components/Skills/Skills'
import "./ProjectCard.css"

export const ProjectCard = ({p}) => {
  return (
    <div className="project-card-wrapper">
      <Link to={"/project/" + p.title}>
        <div className='project-card text-2xl'>
          <div className='card-details-wrapper'>
            <p className="font-bold">{p.title}</p>
            <div 
            className='text-base pt-2 pr-2'
            dangerouslySetInnerHTML={{ __html: p.description }} />

          </div>
          <div className="project-card-images">
            <img className="rounded" src={p.images[0]} />
          </div>
          <div className="card-skills-container">
              <Skills small={true} skills={p.skills?.length > 0 ? p.skills : ''} />
          </div>
        </div>
      </Link>
    </div>
  )
}
