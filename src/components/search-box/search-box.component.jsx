import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder , hanldeChange}) => (
    <input type='search' className='search'
                placeholder={placeholder}
                onChange={hanldeChange}>
                </input>
)