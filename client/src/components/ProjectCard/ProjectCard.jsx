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
    <div className='project-card flex flex-col sm:flex-row items-stretch'>
      {p.images?.[0] && (
        <div className="w-full aspect-video sm:aspect-auto sm:w-1/4 shrink-0 overflow-hidden rounded-t sm:rounded-t-none sm:rounded-l">
          <img className="w-full h-full object-cover object-left" src={p.images[0]} />
        </div>
      )}
      <div className="project-content">
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
