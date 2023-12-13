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
      <div>
        <h1>Projects</h1>
        {projects.map((p) => (
          <div className='Projects' key={p._id}>
            <p key={p._id+"title"}>{p.title}</p>
            <p key={p._id+"description"}>{p.description}</p>
            <p key={p._id+"git"}>{p.gitLink}</p>
            <p key={p._id+"deploy"}>{p.deployLink}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects