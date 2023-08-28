import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {Link, Route, Routes} from 'react-router-dom';
import People from '../Pages/People';




function NavBar(){
return(
<nav className="Nav" >
  <div >
   
  <a href="/Foosball_App">
    <button className="NavButton">Home</button>
    </a>
    <a href="/Foosball_App/#/players">
    <button className="NavButton">Players</button>
    </a>
  </div>
</nav>
);
}

export default NavBar