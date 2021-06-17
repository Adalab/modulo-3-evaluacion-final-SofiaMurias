import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.character.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return (
    <div>
      <ul className="cards">{characterElements}</ul>
    </div>
  );
};
export default CharacterList;
