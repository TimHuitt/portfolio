
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
    <>
      <div className="flex justify-center">
        <div className='projects-header'>
            <h1 className='p-4 font-bold text-3xl'>{project.title}</h1>
        </div>
      </div>

        <p className='text-right'><a href={project.gitLink}>View on GitHub</a></p>
        <div 
          className='text-base pt-2 w-full'
          dangerouslySetInnerHTML={{ __html: project.description }} 
        />
        <p>{project.deployLink}</p>
        {Array.isArray(project.images) && project.images.map((image)=> (
          <p key={image + "-link"}>{image}</p>
        ))}
    </>
  )
  return isLoading ? loading() : loaded()
}
export default Project