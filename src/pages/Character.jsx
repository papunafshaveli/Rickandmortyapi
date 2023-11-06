/* eslint-disable no-unused-vars */
import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const { data, error, loading } = useCharacter(id);

  if (error) return <div>Something is wrong with character!</div>;

  if (loading) return <div>Character loading...</div>;
  return (
    <CharacterDiv>
      <img src={data.character.image} width={750} height={750} alt="image" />
      <div>
        {data.character.episode.map((episode) => {
          return (
            <div key={episode.name}>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          );
        })}{" "}
      </div>
    </CharacterDiv>
  );
}

const CharacterDiv = styled.div`
  display: flex;

  .div {
    margin-left: 2rem;
  }
`;
