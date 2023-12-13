import { Route, Routes } from 'react-router-dom'
import Projects from '../../pages/Projects/Projects'
import Home from '../../pages/Home/Home'
import Resume from '../../pages/Resume/Resume'
import Contact from '../../pages/Contact/Contact'
import Project from '../../pages/Project/Project'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Projects />} />
      </Routes>
    </main>
  );
};

export default Main;