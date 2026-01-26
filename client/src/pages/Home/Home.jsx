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
            Senior Full Stack Engineer with experience owning and operating production systems end-to-end, with a strong focus on building reliable, data-driven user interfaces.
          </p><br/>
          { showMore ? (
            <div className='about-more'>
              <p className='home-about about-2'>
                In recent work, I served as the sole engineer on a production platform supporting legacy data migration, complex relational systems, and compliance-sensitive constraints. The role involved designing frontend architecture alongside backend systems and infrastructure, ensuring the system behaved correctly from data model through user-facing workflows.
              </p><br/>
              <p className='home-about about-3'>
                While I work comfortably across the stack, I am most engaged when solving problems at the boundary between system behavior and user experience, where frontend design must accurately reflect underlying state, constraints, and business logic.
              </p><br/>
              <p className='home-about about-4'>
                My background includes frontend development with React, Next.js, and TypeScript, supported by backend APIs, relational data modeling, and cloud infrastructure where needed to deliver complete, production-ready systems.
              </p><br/>
              <p className='home-about about-5'>
                Much of my recent professional work is not publicly displayed due to confidentiality, but I&apos;m always happy to discuss system design decisions, architectural tradeoffs, and lessons learned.
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
        <small>click for more details</small>
      </div>
      <Projects />
    </div>
  )
}

export default Home
