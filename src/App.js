import './App.css';
import Home from './Pages/Home';
import People from './Pages/People';
import Leaderboard from './Pages/Leaderboard';
import NavBar from './Components/NavBar';
import {Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />       
      <Route path='/players' element={<People />}/>
      <Route path='/Teams' element={<People />}/>
      <Route path='/Leaderboard' element={<Leaderboard />}/>
    </Routes>
    <NavBar/>
    </div>
  );
}

export default App;
