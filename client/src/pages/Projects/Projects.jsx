import { useState, useEffect } from 'react'
import { getProjects } from '../../utilities/projects-service'
import "./Projects.css"

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const handleRequest = async () => {
    try {
      const projectsData = await getProjects()
      if (projectsData) {
        setProjects(projectsData)
      }
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleRequest()
  }, [])

  if (isLoading) {
    return <h1 key="load">Loading...</h1>
  } else {
    return (
      <div className='Projects'>
        <div className='projects-header'>
          <h1>Projects</h1>
        </div>
        {projects.map((p) => (
          <div className='project' key={p._id}>
            <p>{p.title}</p>
            <p>{p.description}</p>
            <p>{p.gitLink}</p>
            <p>{p.deployLink}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects