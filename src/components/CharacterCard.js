import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <article className="card">
      <Link to={`/character/${props.character.id}`}>
        <img
          className="card-image"
          src={props.character.image}
          alt={`Foto de ${props.character.name}`}
        />
        <h3 className="card-title"> {props.character.name}</h3>

        <p className="card-text">{props.character.species}</p>
      </Link>
    </article>
  );
};
export default CharacterCard;
