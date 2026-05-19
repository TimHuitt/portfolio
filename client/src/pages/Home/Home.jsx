import { useState, useEffect } from 'react'
import { useScrollContext } from '../../scrollContext'
import Skills from '../../components/Skills/Skills'
import Projects from '../Projects/Projects'
import profileImage from '/profile.png'
import './Home.css'

const Home = () => {
  const { windowRef } = useScrollContext()
  const [ showMore, setShowMore ] = useState(false)
  const [ showSkills, setShowSkills ] = useState(false)

  const handleMore = () => {
    setShowMore(prev => !prev)
  }

  const handleSkills = () => {
    setShowSkills(prev => !prev)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (windowRef.current) {
        const pos = sessionStorage.getItem('pos')
          if (pos !== null) {
            windowRef.current.scrollTop = parseInt(pos, 10)
          }
      }
    }, 300)
    return () => clearTimeout(timer)
  },[windowRef])


  return (
    <div className='Home'>
      <div className="home-header">
        <h1>Tim Huitt</h1>
        <div />
        <h2>Software Engineer</h2>
      </div>
      <div className='profile-image'>
        <img src={ profileImage } />
      </div>
      <div className="home-skills-container">
        <Skills small={false} skills={showSkills ? 'all' : ['ts', 'next', 'node', 'postgresql', 'tailwind']}/>
        <div className="skills-button" onClick={handleSkills}>
          { showSkills ? 'less' : 'show more'}
        </div>
      </div>
      <div className='about-me'>
          <p className='home-about about-1'>
            I help businesses replace the processes they've outgrown with software built around how they actually operate. From initial planning through deployment, I work directly with the people closest to the problem to make sure the solution fits.
          </p><br/>
          { showMore ? (
            <div className='about-more'>
              <p className='home-about about-2'>
                My most recent work involved serving as the sole engineer on a production platform, responsible for full stack design and operation from backend infrastructure through user-facing workflows. This included inheriting and significantly expanding a complex data model to support evolving business requirements.
              </p><br/>
              <p className='home-about about-3'>
                My technical background is accompanied by decades in client-facing and operational roles across management, financial services, and data analytics. This experience allows me to better understand problems and how to approach them throughout development.
              </p><br/>
              <p className='home-about about-4'>
                Across frontend development, backend APIs, databases, and cloud infrastructure, I deliver complete production-ready systems.
              </p><br/>
              <p className='home-about about-5'>
                Most of my professional work is confidential, but I'm always happy to discuss the work itself, the decisions made, and the problems it solved.
              </p><br/>
            </div>
          ) : (
            ''
          )}
          <div className="about-button" onClick={handleMore}>
            { showMore ? 'less' : 'show more'}
          </div>
      </div>

      <div className='projects-header'>
        <h1>Projects</h1>
        <small>Select a project for more details</small>
      </div>
      <Projects />
    </div>
  )
}

export default Home
