/* eslint-disable no-unused-vars */
import React from "react";

import styled from "styled-components";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>loading...</div>;

  if (error) return <div>something went wrong!</div>;

  return (
    <CharactersDiv>
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <img src={character.image}></img>
            <h1>{character.name}</h1>
          </Link>
        );
      })}
    </CharactersDiv>
  );
}

const CharactersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
