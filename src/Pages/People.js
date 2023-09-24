import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import ListTeams from "../Components/ListTeams";
import Button from "../Components/Button";
import { getUsersFromDB } from "../Functions/Database";
import ConfirmationPopup from "../Components/Popup/ConfirmationPopup";
import { Reception4, Exclamation } from "react-bootstrap-icons";

const players = [
  { Name: "Niail", Selected: false },
  { Name: "Moh Shiha", Selected: false },
  { Name: "Moh Otaki", Selected: false },
  { Name: "Moh Che", Selected: false },
  { Name: "Nadeem", Selected: false },
  { Name: "Sobhi", Selected: false },
  { Name: "BBK", Selected: false },
  { Name: "Haisam", Selected: false },
  { Name: "Jamil", Selected: false },
  { Name: "Mohanad", Selected: false },
];
let buttonName = "Create Teams";
let selectAllBt = "Select All";
let confirmWinersBt = "Confirm Win";
let selectAllBtHide = false;
export default function People() {
  const [selectedPlayers, setPlayers] = useState(players);
  const [updatelist, setUpdateList] = useState(0);
  const [confirmWinersBtHide, setConfirmWinersBtHide] = useState(true);
  const [popupShow, setPopupShow] = useState(false);

  function isOdd(n) {
    return Math.abs(n % 2) == 1;
  }

  function randomTeams() {
    let finalPlayers = [];
    let index = 0;
    selectedPlayers.map((player) => {
      if (player.Selected) {
        finalPlayers[index] = player;
        index++;
      } else return null;
    });

    if (finalPlayers.length > 3) {
      if (isOdd(finalPlayers.length)) {
        finalPlayers.push({ Name: "**Jasim**", Selected: true });
      }

      const shuffled = finalPlayers.sort(() => Math.random() - 0.5);
      let teams = [];
      for (let index = 0; index < shuffled.length; index += 4) {
        var _p3, _p4;
        _p3 = index + 2 >= shuffled.length ? "?" : shuffled[index + 2].Name;
        _p4 = index + 3 >= shuffled.length ? "?" : shuffled[index + 3].Name;
        teams.push({
          p1: shuffled[index].Name,
          p2: shuffled[index + 1].Name,
          p3: _p3,
          p4: _p4,
        });
      }

      setPlayers(teams);
      setUpdateList(1);
      buttonName = "Reset";
      selectAllBtHide = true;
      selectAllBt = "Select All";
    }
  }

  function selcetAll() {
    let temp = selectedPlayers.map((player) => {
      return {
        ...player,
        Selected: selectAllBt === "Select All" ? true : false,
      };
    });
    selectAllBt = selectAllBt === "Select All" ? "Deselect All" : "Select All";
    setPlayers(temp);
  }

  function teamButton() {
    if (updatelist != 1) {
      //getUsersFromDB().then(((data1)=> {setppp(data1)}),((er)=>{console.log(er)}))
      randomTeams();
    } else if (updatelist == 1) {
      buttonName = "Create Teams";
      selectAllBtHide = false;
      setPlayers(players);
      setUpdateList(2);
      setPopupShow(true);
    } else {
      setUpdateList(0);
    }
  }

  const dataFromChild = (value) => {
    setPlayers(value);
  };

  const updateWinners = (value) => {
    if (value) {
      setConfirmWinersBtHide(false);
    } else {
      setConfirmWinersBtHide(true);
    }
  };

  const getUserConfirmation = (value) => {
    //setPopupShow(false);
  };

  function updateWinnersInDB() {}
  //    useEffect(() => {
  //     getUsersFromDB().then((users)=>{users.map((user)=>{console.log(user) })
  //     console.log(users)})

  //    })

  return (
    <div className="MainView">
      <ConfirmationPopup
        icon={<Exclamation fontSize={70} color="orange" />}
        trigger={true}
        setTrigger={setPopupShow}
        acceptBtName={"Reset"}
        message="Do you want to reset the teams?"
        results={getUserConfirmation}
        type={"Notif"}
      />
      <ListTeams
        players={selectedPlayers}
        updatelist={updatelist}
        callback={dataFromChild}
        winners={updateWinners}
      />
      <Button
        className="btn btn-primary GButton"
        buttonName={buttonName}
        onClick={() => teamButton()}
      />
      <Button
        className="btn btn-primary GButton"
        buttonName={selectAllBt}
        onClick={() => selcetAll()}
        hidden={selectAllBtHide}
      />
      <Button
        className="btn btn-primary GButton"
        buttonName={confirmWinersBt}
        onClick={() => {}}
        hidden={confirmWinersBtHide}
      />
    </div>
  );
}
