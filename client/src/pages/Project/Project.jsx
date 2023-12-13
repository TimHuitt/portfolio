
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
      <h1 className="text-3xl">{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.gitLink}</p>
      <p>{project.deployLink}</p>
      
      {Array.isArray(project.images) && project.images.map((image)=> (
        <p key={image + "-link"}>{image}</p>
      ))}
    </>
  )
  return isLoading ? loading() : loaded()
}
export default Project