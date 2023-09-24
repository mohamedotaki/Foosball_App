import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState , useEffect} from "react";
import '../App.css';

export default function PlayersList({Players}){

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

return(
    <div>
    <ul className= {"list-group"}>
    {data.map((Player) => 
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
)

}