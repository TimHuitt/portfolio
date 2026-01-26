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
            Senior Full Stack Engineer with experience owning and operating production systems end-to-end, including backend architecture, data modeling, and cloud infrastructure.
          </p><br/>
          { showMore ? (
            <div className='about-more'>
              <p className='home-about about-2'>
                In recent work, I have served as the primary engineer on a platform supporting legacy data migration, relational data workflows, and compliance-sensitive operations. My responsibilities span system design, implementation, deployment, and long-term maintenance under operational constraints.
              </p><br/>
              <p className='home-about about-3'>
                I&apos;m most effective in environments with ambiguity, where the work involves making architectural tradeoffs, designing systems that evolve safely over time, and supporting production software.
              </p><br/>
              <p className='home-about about-4'>
                My background includes full-stack development with JavaScript and TypeScript, relational databases, and AWS-based infrastructure.
              </p><br/>
              <p className='home-about about-5'>
                Much of my recent professional work is not publicly displayed due to confidentiality, but I&apos;m always happy to discuss system design decisions, tradeoffs, and lessons learned.
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
