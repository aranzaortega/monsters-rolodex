import React from 'react';

import './search-box.styles.css';


//FUNCTIONAL COMPONENT
//they dont have access to constructor
//neither to life cicle methods
//Get some props and returns some HTML

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className="search" 
        type="search" 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)