
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState , useEffect} from "react";

export default function ListTeams({players,updatelist,listType,callback}){

 const [data, setData] = useState(players);

 
 function handlechange(selected) {  
        const UpdatedPlayers = data.map((player) => {
            if(player.Name === selected)
            {
           return{
            ...player,
            Selected: player.Selected? false:true,
                 };
            }
            else
            {
                return player;
            }
        });
        setData(UpdatedPlayers);
        callback(UpdatedPlayers);
        
       
    };

    useEffect(() => {
        if (updatelist) {
            console.log("Updated")
            console.log(updatelist)

            setData(players);
        }
      }, [updatelist] );

       
return (
   
<div>
 <ul className= {listType}>
    {
    data.map((Player) => 
        <li 
            className= { Player.Selected ? 'list-group-item active':'list-group-item'}
            key={Player.Name}
            onClick={() => handlechange(Player.Name)}
        >
        {Player.Name}
        </li>)
    }

 </ul>
</div>

);



}


