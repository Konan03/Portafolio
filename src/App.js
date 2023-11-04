import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/navbar';
import Description from './components/body/description';

function App() {
  return (
    <>
      <Navbar />
      <Description />
    </>
    
  );
}

export default App;
