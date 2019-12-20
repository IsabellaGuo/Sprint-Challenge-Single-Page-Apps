import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     // Add a search form here
     <form>
       <label htmlFor = 'name'>Name</label>
       <input
         id = 'name'
         type = 'text'
         name = 'textfield'
         onChange = {props.handleChange}
         value = {props.searchTerm}
         />
     </form>
    </section>
  );
}
