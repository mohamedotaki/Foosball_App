import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {Link, Route, Routes} from 'react-router-dom';
import People from '../Pages/People';




function NavBar(){
return(
<nav className="Nav" >
  <div >
   
  <a href="/">
    <button className="NavButton   cursor: not-allowed">Home</button>
    </a>
    <a href="/players">
    <button className="NavButton">Players</button>
    </a>
  </div>
</nav>
);
}

export default NavBar