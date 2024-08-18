import React from 'react';
import SortElement from './SortElement';
import "./SortBar.css";

export default function () {
  return (
    <div className='sortArea'>
      <div>Showing: 123 Results.</div>
      <div className='sortBtn'>
        <p>Sort by:</p>
        <SortElement />
      </div>
    </div>
  )
}
