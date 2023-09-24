import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState , useEffect } from "react";
import ListTeams from '../Components/ListTeams';
import Button  from "../Components/Button";
import {addUserToDB} from "../Functions/Database"


export default function ManagePlayers() {

    const [name, setName] = useState("");
  

    function add(){
        if(name.length>4){
       console.log(addUserToDB(name,0,0))
       document.getElementById("PlayerName").value = "";
        }else{
            alert("Min 5 letters")
        }
    }

    return(

<>
  <div className="form-group">
    <input type="text" className="PlayerNameText" id="PlayerName" placeholder="Enter New Player Name" maxLength={20} minLength={2}
    onChange={(e) => setName(e.target.value)}
    autoComplete="off"
    
    />
  </div>
<button 
  onClick={()=> add()}
  type="submit"
  className="GButton">
    Submit
</button>
</>
);

}