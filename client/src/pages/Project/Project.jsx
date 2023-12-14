
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProject } from '../../utilities/projects-service'

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
    <>
      <div className='Projects pt-4 text-center'>
        <div className='projects-header'>
            <h1 className='p-4 font-bold text-3xl'>{project.title}</h1>
        </div>
          <p className='text-right pr-3 pt-1'><a href={project.gitLink}>View on GitHub</a></p>
        <div className="flex-col justify-start">
          <div 
            className='text-base pt-2 w-full'
            dangerouslySetInnerHTML={{ __html: project.description }} 
          />
          <p>{project.deployLink}</p>
        </div>
        
        {Array.isArray(project.images) && project.images.map((image)=> (
          <p key={image + "-link"}>{image}</p>
        ))}
      </div>
    </>
  )
  return isLoading ? loading() : loaded()
}
export default Project