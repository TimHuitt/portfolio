/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useScrollContext } from '../../scrollContext'
import Skills from '../../components/Skills/Skills'
import "./ProjectCard.css"

export const ProjectCard = ({p}) => {
  const { windowRef } = useScrollContext()

  const handleClick = () => {
    sessionStorage.setItem('pos', windowRef.current.scrollTop)
  }

  return (
    <div className="project-card-wrapper" onClick={handleClick}>
      <Link to={"/project/" + p.title}>
        <div className='project-card'>
          <div className='relative card-details-wrapper text-center'>
              <div className=''>
                <p className="font-bold text-2xl">{p.title}</p>
              </div>
              <p className="font-bold text-xl opacity-50">{p.role}</p>

            <div 
            className='pt-2 pr-2 text-xl'
            dangerouslySetInnerHTML={{ __html: p.description }} />

          </div>
          <div className="card-skills-container">
              <Skills small={true} skills={p.skills?.length > 0 ? p.skills : ''} />
          </div>
          <div className="project-card-images">
            <img className="rounded" src={p.images[0]} />
          </div>
        </div>
      </Link>
    </div>
  )
}
