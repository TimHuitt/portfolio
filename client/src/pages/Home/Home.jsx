/* eslint-disable react/no-unescaped-entities */
import profileImage from '../../assets/profile.png'
import Skills from '../../components/Skills/Skills'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='profile-image'>
        <img src={ profileImage } />
      </div>
      <div className='about-me'>
          <p className='p-4 font-bold text-3xl'>
          I'm a Software Engineer with a passion for solving complex problems through creative programming. I have spent the past several years building my development skills and I am eager to put these skills to work.
          <br/><br/>
          Along the way, I have acquired extensive leadership experience in various industries, including service, finance, and analytics, where I've excelled at guiding, directing, and training teams and management. 
          <br/><br/>
          In addition to many personal and collaborative projects, I have developed several professional applications using Python for standalone programs and VBA for complex excel data processing and manipulation. 
          </p>
      </div>
      <Skills small={false} skills={'all'}/>
      <div className="spacer" />
    </div>
  )
}

export default Home