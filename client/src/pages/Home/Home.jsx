import { useState, useEffect } from 'react'
import { useScrollContext } from '../../scrollContext'
import Skills from '../../components/Skills/Skills'
import Projects from '../Projects/Projects'
import profileImage from '/profile.png'
import './Home.css'

const Home = () => {
  const { windowRef } = useScrollContext()
  const [ showMore, setShowMore ] = useState(false)

  const handleMore = () => {
    setShowMore(prev => !prev)
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
  },[])


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
        <Skills small={true} skills={'all'}/>
      </div>
      <div className='about-me'>
          <p className='home-about about-1'>
          I&apos;m an experienced and passionate Full-Stack Developer with a strong focus on JavaScript, React, Node.js, and Express. My experience in this field, extending over five years, included a combination of professional projects for small businesses, personal ventures, and continued education, each contributing to my comprehensive understanding of software development and technology.
          </p><br/>
          <div className="more-button" onClick={handleMore}>
            { showMore ? 'less' : 'more'}
          </div>
          { showMore ? (
            <div className='about-more'>
              <p className='home-about about-2'>
              Over the last decade, I have consistently utilized my initiative in professional settings to engineer more efficient systems, earning the trust of my peers and superiors to tackle critical technical challenges. The past five years have been especially transformative, during which I have achieved educational milestones and led the development of enterprise-wide applications for small business using Python and VBA, reflecting my ability to adapt and excel in diverse technological environments.
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