import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import ListTeams from '../Components/ListTeams';
import Button  from "../Components/Button";

const players = [
    {Name:'Niail', Selected: false},
    {Name:'Moh Shiha', Selected: false},
    {Name:'Moh Otaki', Selected: false},
    {Name:'Moh Che', Selected: false},
    {Name:'Nadeem', Selected: false},
    {Name:'Sobhi', Selected: false},
    {Name:'BBK', Selected: false},
    {Name:'Haisam', Selected: false},
    {Name:'Jamil', Selected: false},
    {Name:'Mohanad', Selected: false}];  
let buttonName = "Create Teams";

export default function People() {
    const [selectedPlayers, setPlayers] = useState(players);
    const [updatelist, setUpdateList] = useState(0);


    function isOdd(n) {
        return Math.abs(n % 2) == 1;
     }

  
    function randomTeams(){
        let finalPlayers = [];
        let index=0;
        selectedPlayers.map(player => {
            if(player.Selected){
                finalPlayers[index] = player;
                index++;
            }else return null;
        });

        if(finalPlayers.length >3)
        {
        if(isOdd(finalPlayers.length))
        {
            finalPlayers.push({Name:'**Jasim**',Selected: true});
        }

        const shuffled = finalPlayers.sort(() => Math.random() - 0.5);
        setPlayers(shuffled);
        setUpdateList(1);
        buttonName = "Reset";
        }


    }

    function teamButton(){
        if(updatelist != 1){
            randomTeams();
        }
        else if (updatelist == 1){
            buttonName = "Create Teams"
            setPlayers(players);
            setUpdateList(2);
            console.log("reset but")
        }
        else {
            setUpdateList(0);
        }
    }
        const dataFromChild = (value) =>{setPlayers(value)}
    
    return ( 
        <>
        <div>
            <ListTeams players ={selectedPlayers} updatelist = {updatelist} listType = {"list-group"} callback={dataFromChild}/>
            <Button 
            name = {buttonName}
            fun={()=> teamButton()}/>
                
        </div>
        </>  
    );

};
