import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import "../App.css";

export default function ListTeams({ players, updatelist, callback, winners }) {
  const [data, setData] = useState(players);
  const [activeItem, setActiveItem] = useState(null);

  function handlechange(selected) {
    const UpdatedPlayers = data.map((player) => {
      if (player.Name === selected) {
        return {
          ...player,
          Selected: player.Selected ? false : true,
        };
      } else {
        return player;
      }
    });
    setData(UpdatedPlayers);
    callback(UpdatedPlayers);
  }

  useEffect(() => {
    if (players) {
      setData(players);
    }
  }, [players]);

  function teamsView() {
    var num = 0;
    let rightindex = 0;

    if (updatelist == 1) {
      {
        return (
          <div>
            {data.map((player, index) => (
              <>
                <ul className="list-group list-group-horizontal">
                  <il
                    className={
                      activeItem === index
                        ? "list-group-item active ListView"
                        : "list-group-item ListView"
                    }
                    onClick={() => {
                      if (activeItem != index) {
                        setActiveItem(index);
                        winners([{ p1: player.p1 }, { p2: player.p2 }]);
                      } else {
                        setActiveItem(null);
                        winners(null);
                      }
                    }}
                  >
                    {player.p1} - {player.p2}
                  </il>
                  <il className="list-group-item">vs</il>
                  <il
                    className={
                      activeItem === player.p3
                        ? "list-group-item active ListView"
                        : "list-group-item ListView"
                    }
                    onClick={() => setActiveItem(player.p3)}
                  >
                    {player.p3} - {player.p4}
                  </il>
                </ul>
              </>
            ))}
          </div>
        );
      }
    } else
      return (
        <div>
          <ul className={"list-group"}>
            {data.map((Player) => (
              <li
                className={
                  Player.Selected ? "list-group-item active" : "list-group-item"
                }
                key={Player.Name}
                onClick={() => handlechange(Player.Name)}
              >
                {Player.Name}
              </li>
            ))}
          </ul>
        </div>
      );
  }

  return teamsView();
}
