import { useState, useEffect } from 'react'
import { getProjects } from '../../utilities/projects-service'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
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
        <div className="">
          <div className='projects-header'>
            <h1 className='p-4 font-bold text-3xl'>Projects</h1>
          </div>
        </div>
        {projects.map((p) => (
          <ProjectCard  key={p._id + "-card"} p={p}/>
        ))}
      </div>
    );
  }
}

export default Projects