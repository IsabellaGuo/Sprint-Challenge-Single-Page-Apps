import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';

import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import Axios from 'axios';


export default function App() {
  return (
    <main>
      <Header />
      <Link to = {'/'}>
        <button>Home</button>
      </Link>

      <Link to = {'/characters'}>
        <button>Characters</button>
      </Link>

      <Route exact path="/" >
        <WelcomePage />
        </Route>
        <Route path="/characters">
         <CharacterList />
        </Route>
    </main>
  );
}
