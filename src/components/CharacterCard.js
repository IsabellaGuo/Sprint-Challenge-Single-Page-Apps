import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 5px solid hotpink;
  border-radius: 12px;
  background: gray;
`;

const StyledH2 = styled.h2`
  align-self: center;
  margin-left: 20px;
`;

export default function CharacterCard(props) {
  return (
    <StyledDiv>
      <img src = {props.img} />
      <StyledH2>
        <h2>{props.name}</h2>
      </StyledH2>
    </StyledDiv>
  );
}