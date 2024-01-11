/* eslint-disable react/no-unescaped-entities */
import profileImage from '../../assets/profile.png'
import Skills from '../../components/Skills/Skills'
import Projects from '../Projects/Projects'
import './Home.css'

const Home = () => {

//   function isScrolledIntoView(elem){
//       var docViewTop = $(window).scrollTop();
//       var docViewBottom = docViewTop + $(window).height();
// 
//       var elemTop = $(elem).offset().top;
//       var elemBottom = elemTop + $(elem).height();
// 
//       return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
//   }

  return (
    <div className='Home'>
      <div className="home-header">
        <h1>Tim Huitt</h1>
        <div />
        <h2>Software Engineer</h2>
      </div>
      {/* <div className='profile-image'>
        <img src={ profileImage } />
      </div> */}
      <div className='about-me'>
          <p className='home-about-1'>
          I'm a Software Engineer with a passion for solving complex problems through creative programming. 
          </p>
          <br/><br/>
          <p className='home-about-2'>
          I have spent the past several years building my development skills and I am eager to put these skills to work.
          </p>
      </div>
      <div className="home-skills-container">
        <Skills small={false} skills={'all'}/>
      </div>
      <div className="spacer" />
      {/* <Projects /> */}
    </div>
  )
}

export default Home