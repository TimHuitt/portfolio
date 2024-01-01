/* eslint-disable react/no-unescaped-entities */
import './Home.css'
import profileImage from '../../assets/profile.png'
import Skills from '../../components/Skills/Skills'

const Home = () => {
  return (
    <div className='Home'>
      <div className='home-header'>
          <h1 className='p-4 font-bold text-3xl'>Tim Huitt</h1>
      </div>
      <div className='profile-image'>
        <img src={ profileImage } />
      </div>
      <div className='about-me'>
          <p className='p-4 font-bold text-3xl'>
            I'm a Software Engineer with a passion for solving complex problems through creative programming. 
            <br /><br />
            I have spent the past several years building my development skills and I am eager to bring my skill set to a team that values innovation, creativity, and continuous learning.
          </p>
      </div>
      <Skills small={true} />
      <div className="spacer" />
    </div>
  )
}

export default Home