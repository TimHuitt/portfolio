/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import "./ProjectCard.css"
export const ProjectCard = ({p}) => {
  return (
    <div className="project-wrapper">
      <Link to={"/project/" + p._id}>
        <div className='project text-2xl'>
          <p className="font-bold">{p.title}</p>
          <img className="rounded" src={p.images[0]} />
          <div 
          className='text-base pt-2'
          dangerouslySetInnerHTML={{ __html: p.description }} />
          {/* <p>{p.gitLink}</p>
          <p>{p.deployLink}</p> */}
        </div>
      </Link>
    </div>
  )
}
