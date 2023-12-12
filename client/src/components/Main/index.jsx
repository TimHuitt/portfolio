import { Route, Routes } from 'react-router-dom'
import Projects from '../../pages/Projects'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Projects />} />
      </Routes>
    </main>
  );
};

export default Main;