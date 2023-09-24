import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import ListTeams from "../Components/ListTeams";
import Button from "../Components/Button";
import {
  getUsersFromDB,
  getUserWinsDB,
  writeToLocalDB,
  readFromLocalDB,
} from "../Functions/Database";
import { Reception4 } from "react-bootstrap-icons";
import "../App.css";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(readFromLocalDB("users"));
    // getUserWinsDB().then((users) => {
    //   writeToLocalDB("users", users);
    //   setPlayers(users);
    // });
  }, []);

  return (
    <div className="MainView">
      {players.map((Player) => (
        <>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item ListView">{Player.Name}</li>
            <li className="list-group-item ListView">
              {"Wins:  " + Player.Win + "    -     Lost: " + Player.Losse}
            </li>
          </ul>
        </>
      ))}
    </div>
  );
}
