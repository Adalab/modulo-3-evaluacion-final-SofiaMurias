import React, { useState, useEffect } from "react";
import getApiData from "../services/api";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import "../stylesheet/App.scss";

const App = () => {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    getApiData().then((characterData) => {
      setCharacter(characterData);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1>
          <img className="title" src={logo} alt="Ricky and Morty" />
        </h1>
        <input className="input" type="text"></input>
      </div>
      ;
      <CharacterList character={character} />
    </>
  );
};

export default App;
