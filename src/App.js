import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/navbar';
import Description from './components/body/description';
import Project from './components/project/project';
import Contact from './components/contact/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Description />}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </Router>
    
  );
}

export default App;
