
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
      {(project.gitLink || project.deployLink) && (
        <div className="project-links">
          {project.gitLink && <Link to={project.gitLink} target="_blank" rel="noopener noreferrer">View Code</Link>}
          {project.deployLink && <Link to={project.deployLink} target="_blank" rel="noopener noreferrer">View App</Link>}
        </div>
      )}
      <div className="body-container">
        <div className="project-skills-container">
          <div className="project-skills">
            <Skills small={false} skills={project.skills?.length > 0 ? project.skills : ''} />
          </div>
        </div>
        <div className={Array.isArray(project.images) && project.images.length <= 2 ? 'project-details mb-[100px] py-8' : 'project-details mt-[-100px] py-8'}>
          <p className='font-bold text-xl mt-24'>{project.role}</p>
          <p className="content" dangerouslySetInnerHTML={{ __html: project.header }} ></p>
          {project.images?.[0] && (
            <div className="project-images">
              <img src={project.images[0]} />
            </div>
          )}
          <p className="content" dangerouslySetInnerHTML={{ __html: project.body }} ></p>
          {project.images?.[1] && (
            <div className="project-images">
              <img src={project.images[1]} />
            </div>
          )}
          {project.caseStudy && (
            <div className="flex justify-center mt-10 pb-10">
              <Link to="/cases" className="text-xl font-[400] border border-[#aaa] rounded-lg px-8 py-3 hover:underline">
                View Case Study
              </Link>
            </div>
          )}
          <ul className="features-container">
            {project.features && project.features.map((feature, index) => (
              <li key={`${feature}-${index}`}><h3>{feature[0]}</h3>{feature[1]}</li>
            ))}
          </ul>
        </div>
        <div className="project-images-grid pb-24 mt-10">
          {Array.isArray(project.images) && project.images.map((image)=> {
            let isWire = false
            image.slice(0,2) === "w-" 
              ? (image = image.slice(2), isWire = true)
              : null

            return (
              <div key={image + "-container"}>
                { isWire && <p>Wireframe:</p> }
                { image !== project.images[0] && image !== project.images[1] && (
                  <div className="project-images m-5 flex justify-center">
                    <img src={image} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
  return isLoading ? loading() : loaded()
}
export default Project