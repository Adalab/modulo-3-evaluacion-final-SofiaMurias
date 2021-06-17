import React from "react";
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  const getStatus = () => {
    if (props.character.status === "unknown") {
      return <li>Status: {props.character.status}❔ </li>;
    } else if (props.character.status === "Dead") {
      return <li>Status: {props.character.status} 💀</li>;
    } else if (props.character.status === "Alive") {
      return <li>Status: {props.character.status} 👌🏼 </li>;
    }
  };
  return (
    <>
      <div className="details">
        <Link className="card-details-link" to="/">
          {" "}
          Volver
        </Link>
        <div className="card-details">
          <img
            className="card-details--image"
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
          />

          <section className="card-details--text">
            <h3 className="card-details--text-title">
              {" "}
              {props.character.name}
            </h3>

            <ul className="card-details--text-text">
              <li>Status:{props.character.status}</li>
              <li>Species: {props.character.species}</li>
              <li>Origin: {props.character.origin}</li>
              <li>Episodes: {props.character.episode}</li>
              <li>{getStatus()}</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
