import React, { useState, useEffect } from "react";
import getApiData from "../services/api";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import ls from "../services/local-storage";
import CharacterFilter from "./CharacterFilter";
import "../stylesheet/App.scss";

const App = () => {
  const characterLocalStorageData = ls.get("character", []);
  const [character, setCharacter] = useState([characterLocalStorageData]);

  useEffect(() => {
    if ((character.lenght = 0)) {
    }
    getApiData().then((characterData) => {
      setCharacter(characterData);
    });
  }, []);

  useEffect(() => {
    ls.set("character", character);
  }, [character]);

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
