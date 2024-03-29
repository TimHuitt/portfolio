
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
          <Skills small={false} skills={project.skills?.length > 0 ? project.skills : ''} />
      </div>
      <div className='project-details'>
        <div 
          className='text-base pt-2 w-full'
          dangerouslySetInnerHTML={{ __html: project.description }} 
        />
      </div>
      <div className="project-images pb-24">
        {
          Array.isArray(project.images) && project.images.map((image)=> {
            let isWire = false
            image.slice(0,2) === "w-" 
              ? (image = image.slice(2), isWire = true)
              : null

            return (
              <>
                { isWire && <p>Wireframe:</p> }
                <div className="m-5"key={image + "-link"}>
                  <img src={image} />
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
  return isLoading ? loading() : loaded()
}
export default Project