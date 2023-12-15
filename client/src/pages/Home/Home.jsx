import './Home.css'
import profileImage from '../../assets/profile.png'
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
          <h1 className='p-4 font-bold text-3xl'>
            <p>
            I'm an experienced Software Engineer with a strong passion for solving intricate problems through innovative programming, driven to enhance efficiency and create positive impacts at all levels. 
            <br /><br />
            My history includes the professional development and deployment of Python and VBA applications, the completion of an intensive software engineering course, and many successful leadership roles.
            </p>
          </h1>
      </div>
    </div>
  )
}
export default Home