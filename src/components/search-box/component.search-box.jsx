import React from 'react';
import './search-box.style.css'

export const SeachBox = ({placeholder,onchangeHandler}) =>(
    <input 
    className="search-box"
    type="search" 
    placeholder={placeholder}
    onChange={ onchangeHandler }/>
)