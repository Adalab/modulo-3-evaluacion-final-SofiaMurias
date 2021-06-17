import React from "react";
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
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
              <li>Episodes:{props.character.episode /*.length*/}</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
