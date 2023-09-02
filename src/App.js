import './App.css';
import Home from './Pages/Home';
import People from './Pages/People';
import NavBar from './Components/NavBar';
import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />       
      <Route path='/players' element={<People />}/>
      <Route path='/Teams' element={<People />}/>
    </Routes>
    <NavBar/>
    </div>
  );
}

export default App;
