/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import "./ProjectCard.css"
export const ProjectCard = ({p}) => {
  return (
    <div className="project-card-wrapper">
      <Link to={"/project/" + p._id}>
        <div className='project-card text-2xl'>
          <div className='card-details-wrapper'>
            <p className="font-bold">{p.title}</p>
            <div 
            className='text-base pt-2'
            dangerouslySetInnerHTML={{ __html: p.description }} />
            {/* <p>{p.gitLink}</p>
            <p>{p.deployLink}</p> */}
          </div>
          <div className="project-card-images">
            <img className="rounded" src={p.images[0]} />
          </div>
          
        </div>
      </Link>
    </div>
  )
}
