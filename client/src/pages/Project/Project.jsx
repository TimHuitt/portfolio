
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useScrollContext } from '../../scrollContext'
import { getProject } from '../../utilities/projects-service'
import Skills from '../../components/Skills/Skills'
import './Project.css'


const Project = () => {
  const { windowRef } = useScrollContext()
  const [isLoading, setIsLoading] = useState(false)
  const [project, setProject] = useState([])
  
  const { id } = useParams()
  
  const handleRequest = async () => {
    try {
      const projectData = await getProject(id)
      if (projectData) setProject(projectData)
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleRequest();
    setTimeout(() => {
      windowRef.current.scrollTo(0, 0)
    }, 200)
  }, [])

  const loading = () => (
    <h1>Loading...</h1>
  )

  const loaded = () => (
    <div className='Project'>
      <div className='project-header'>
          <h1 className='font-bold text-3xl'>{project.title}</h1>
      </div>
      <div className="project-links">
        <Link to={project.gitLink} target="_blank" rel="noopener noreferrer">View Code</Link>
        <Link to={project.deployLink} target="_blank" rel="noopener noreferrer">View App</Link>
      </div>
      <div className="project-skills-container">
        <div className="project-skills">
          <Skills small={false} skills={project.skills?.length > 0 ? project.skills : ''} />
        </div>
      </div>
      <div className={Array.isArray(project.images) && project.images.length <= 2 ? 'project-details mb-[100px] py-8' : 'project-details mt-[-100px] py-8'}>
        <p className='font-bold text-xl mt-10'>{project.role}</p>
        <p className="content" dangerouslySetInnerHTML={{ __html: project.header }} ></p>
        <div className="project-image">
          <img src={project.images && project.images[0]} />
        </div>
        <p className="content" dangerouslySetInnerHTML={{ __html: project.body }} ></p>
        <div className="project-image">
          <img src={project.images && project.images[1]} />
        </div>
        <ul>
          {project.features && project.features.map((feature, index) => (
            <li key={`${feature}-${index}`}><h3>{feature[0]}</h3>{feature[1]}</li>
          ))}
        </ul>
      </div>
      <div className="project-images pb-24">
        {Array.isArray(project.images) && project.images.map((image)=> {
          let isWire = false
          image.slice(0,2) === "w-" 
            ? (image = image.slice(2), isWire = true)
            : null

          return (
            <>
              { isWire && <p>Wireframe:</p> }
              { image !== project.images[0] && image !== project.images[1] && (
                <div className="m-5 flex justify-center" key={image + "-link"}>
                  <img src={image} />
                </div>
              )}
            </>
          )
        })}
      </div>
    </div>
  )
  return isLoading ? loading() : loaded()
}
export default Project