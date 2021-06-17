import React from "react";
import { Link } from "react-router-dom";
import gif from "../images/pagNot.gif";

function PageNotFound() {
  return (
    <div className="pagNot">
      <h1 className="pagNot-title">Página no encontrada </h1>
      <p className="pagNot-text">
        Vuelve a inicio haciendo click
        <Link className="pagNot-link" to="/">
          AQUI
        </Link>
      </p>
      <img className="pagNot-gif" src={gif} alt="Gif RickandMorty"></img>
    </div>
  );
}

export default PageNotFound;
