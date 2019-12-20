import React from "react";
import styled from 'styled-components';

const Img = styled.img`
  display: flex;
  justify-content: center;
  margin-left: 35%
  margin-top: 10%;

`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
