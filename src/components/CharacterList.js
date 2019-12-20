import React, { useEffect, useState } from "react";
import Axios from 'axios';
import styled from 'styled-components';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results)
      setSearchResults(response.data.results)
    })
    .catch(error => console.log(error))

  }, []);

  useEffect(() => {
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    }, []);
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <section className="search-form">
      <form>
       <label htmlFor="title">Search:</label>
       <input id="title" type="text" name="title" onChange={handleChange} 
       value={searchTerm} />
     </form>
     {searchResults.map(character => {
          return <CharacterCard key = {character.id} name = {character.name} img = {character.image} handleChange = {handleChange} searchTerm = {searchTerm}/>;
        })}
    </section>
  );
}
