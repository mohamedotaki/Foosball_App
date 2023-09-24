import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Button from "./Button";
import { Reception4, PeopleFill } from "react-bootstrap-icons";

function NavBar() {
  return (
    <nav className="Nav">
      <a href="/Foosball_App"></a>
      <a href="/Foosball_App/#/players">
        <Button
          className="NavButton"
          icon={<PeopleFill color="Black" size={"100%"} />}
        ></Button>
      </a>
      <a href="/Foosball_App/#/Leaderboard">
        <Button
          className="NavButton"
          icon={<Reception4 color="" size={"100%"} />}
        ></Button>
      </a>
    </nav>
  );
}

export default NavBar;
