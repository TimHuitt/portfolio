import Skills from '../../components/Skills/Skills'
import Projects from '../Projects/Projects'
import './Home.css'
import '../projects/Projects.css'

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
      <div className="home-skills-container">
        <Skills small={false} skills={'all'}/>
      </div>
      <div className='about-me'>
          <p className='home-about about-1'>
          I am deeply passionate about programming and application development. My journey in this field, extending over five years, was most recently enhanced through a rigorous Software Engineering bootcamp, marking a significant milestone in my continuous pursuit of technical excellence and innovation. This period has been characterized by a combination of personal ventures and professional assignments, each contributing to my comprehensive understanding of software development and technology.
          </p><br/>
          <p className='home-about about-2'>
          Over the last decade, I have consistently utilized my initiative in professional settings to engineer more efficient systems, earning the trust of my peers and superiors to tackle critical technical challenges. The past five years have been especially transformative, during which I have led the development of enterprise-wide applications using Python and VBA, reflecting my ability to adapt and excel in diverse technological environments.
          </p><br/>
          <p className='home-about about-3'>
          My foray into advanced programming was catalyzed by the Google Scholarship program, where I explored Android development among a select group of candidates. This experience was a springboard that allowed me to broaden my technical repertoire across various aspects of software engineering and application development.
          </p><br/>
          <p className='home-about about-4'>
          Outside of my professional endeavors, I have pursued my curiosity and creativity through a series of personal projects. These range from IoT solutions and automation tools to applications designed for entertainment and personal growth, each reinforcing my problem-solving skills and technical versatility.
          </p><br/>
          <p className='home-about about-5'>
          I am excited about the prospect of bringing my unique blend of experience, passion, and commitment to your team. I am keen to contribute to innovative projects and collaborate with talented individuals to drive success and surpass expectations. I eagerly anticipate the opportunity to discuss how my background, skills, and enthusiasm can align with the objectives of your company. 
          </p>
      </div>
      <div className='projects-header'>Projects</div>
      <Projects />
    </div>
  )
}

export default Home