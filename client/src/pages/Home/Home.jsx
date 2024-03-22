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
          I'm an experienced and passionate Full-Stack Developer with a strong focus on JavaScript, React, Node.js, and Express, skilled in crafting dynamic applications for diverse needs.
          </p><br/>
          <div className="more-button" onClick={handleMore}>
            { showMore ? 'less' : 'more'}
          </div>
          { showMore ? (
            <div className='about-more'>
              <p className='home-about about-2'>
              A graduate of General Assembly's Software Engineering bootcamp, I am well-versed in modern development practices and technologies.
              </p><br/>
              <p className='home-about about-3'>
              I have successfully applied my knowledge in a variety of settings, from small business projects to personal ventures, creating solutions for a wide range of needs including data visualization, file management, process optimization, IoT solutions, automation tools, and entertainment applications.
              </p><br/>
              <p className='home-about about-4'>
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