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
          {p.images?.[0] && (
            <div className="flex justify-center w-full aspect-video overflow-hidden rounded-t">
              <img className="w-3/4 h-full object-cover" src={p.images[0]} />
            </div>
          )}
          <div className="p-4">
            <p className="font-bold text-2xl">{p.title}</p>
            <p className="font-bold text-xl opacity-50">{p.role}</p>
            <div className='pt-2 text-xl' dangerouslySetInnerHTML={{ __html: p.description }} />
            <div className="card-skills-container mt-2">
              <Skills small={true} skills={p.skills?.length > 0 ? p.skills : ''} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
