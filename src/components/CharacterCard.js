import React from "react";
import "../stylesheet/App.scss";

const CharacterCard = (props) => {
  return (
    <article className="card">
      <img
        className="card-image"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
      />
      <h3 className="card-title"> {props.character.name}</h3>

      <p className="card-text">{props.character.species}</p>
    </article>
  );
};
export default CharacterCard;
