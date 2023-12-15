
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProject } from '../../utilities/projects-service'
import './Project.css'

const Project = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [project, setProject] = useState([])
  
  const { id } = useParams()
  
  const handleRequest = async () => {
    try {
      const personData = await getProject(id)
      if (personData) setProject(personData)
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleRequest()
  }, [])

  const loading = () => (
    <h1>Loading...</h1>
  )

  const loaded = () => (
    <div className='Project'>
      <div className='project-header'>
          <h1 className='p-4 font-bold text-3xl'>{project.title}</h1>
      </div>
      <div className="project-links">
        <p className='text-left'><a href={project.gitLink}>View Code</a></p>
        <p className='text-right'><a href={project.deployLink}>View App</a></p>
      </div>
      <div className='project-details'>
        <div 
          className='text-base pt-2 w-full'
          dangerouslySetInnerHTML={{ __html: project.description }} 
        />        
      </div>
      <div className="project-images pb-24">
        {Array.isArray(project.images) && project.images.map((image)=> (
          <div className="m-5"key={image + "-link"}>
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  )
  return isLoading ? loading() : loaded()
}
export default Project