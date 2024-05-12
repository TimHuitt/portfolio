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
          I&apos;m an experienced and passionate Full-Stack Developer with a focus on React/Next, JavaScript/TypeScript, Node.js, and PostgreSQL and proficient with many others. My experience in this field includes a lifetime curiosity and combination of diverse projects for small businesses, personal ventures, and ongoing education, shaping my understanding of software development and technology.
          </p><br/>
          { showMore ? (
            <div className='about-more'>
              <p className='home-about about-2'>
              Throughout my career, I have consistently demonstrated initiative in professional environments, optimizing systems and earning trust to tackle critical challenges. The last five years, in particular, have been pivotal in my growth.
              </p><br/>
              <p className='home-about about-3'>
              A graduate of General Assembly&apos;s Software Engineering bootcamp, I am well-versed in modern development practices and technologies including React, Node.js, Django, and various database management systems. My approach combines creativity with efficiency, solving complex problems and leading projects to successful completion.
              </p><br/>
              <p className='home-about about-4'>
              Outside of my professional endeavors, I have pursued my curiosity and creativity through a series of personal projects. These range from IoT solutions and automation tools to applications designed for entertainment and personal growth, each reinforcing my problem-solving skills and technical versatility.
              </p><br/>
              <p className='home-about about-5'>
              My current interests and learning goals include  Web3, Blockchain, Smart Contracts, Machine Learning, Neural Networks, Cybersecurity, AWS, Azure, GCP, Docker, Kubernetes.
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