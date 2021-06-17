import React from "react";
import gif from "../images/CharacterNot.gif";
import { Link } from "react-router-dom";

const CharacterNotFound = (props) => {
  return (
    <div className="characterNot">
      <h3 className="characterNot-title">Personaje no encontrado </h3>

      <Link className="characterNot-link" to="/">
        Prueba otra vez
      </Link>
      <img className="characterNot-gif" src={gif} alt="Gif RickandMorty"></img>
    </div>
  );
};
export default CharacterNotFound;
