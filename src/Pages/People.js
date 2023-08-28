import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

let players = [
    {Name:'Moh Shiha', Selected: false},
    {Name:'Moh Otaki', Selected: false},
    {Name:'Moh Che', Selected: false},
    {Name:'Nadeem', Selected: false},
    {Name:'Sobhi', Selected: false},
    {Name:'BBK', Selected: false},
    {Name:'Haisam', Selected: false},
    {Name:'Jamil', Selected: false},
    {Name:'Mohanad', Selected: false},
    {Name:'Niail', Selected: false}];  
//let randomTeams =[];

export default function People() {

    const [selectedPlayers, setSelectedPlayers] = useState(players);
    //const [randomisedPlayers, setRandomisedPlayers] = useState();

    function handlechange(selected) {  
        const UpdatedPlayers = selectedPlayers.map((player,index) => {
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
        setSelectedPlayers(UpdatedPlayers);
        }
    function randomTeams(){
        let finalPlayers = [];
        let index=0;
        selectedPlayers.map(player => {
            if(player.Selected){
                finalPlayers[index] = player.Name;
                index++;
            }
            return null;
        });
        const shuffled = finalPlayers.sort(() => Math.random() - 0.5)
        let arrLength = finalPlayers.length;
        const randomNumber = Math.floor(Math.random() * finalPlayers.length);
        console.log(shuffled);
    }
    return ( 
        <>
        <div>
           <ul className="list-group">
                {
                selectedPlayers.map((Player) => 
                    <li 
                    className= { Player.Selected ? 'list-group-item active':'list-group-item'}
                    key={Player.Name}
                    onClick={() => handlechange(Player.Name)}
                    >
                        {Player.Name}
                    </li>)
                }
            </ul>    
            <button
            onClick = {() => randomTeams()}
            >Pick Teams</button>
                
        </div>
        </> 
    );

};




 