"use client";

import React, { useState } from 'react'
import SearchManufacture from './SearchManufacture';


export const SearchBar = () => {
 const [manufacturer,setManuFacturer] =  useState('')
    const handleSearch=()=>{};
  return (
   <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
      <SearchManufacture
       manufacturer={manufacturer}
       setManuFacturer={setManuFacturer}
       />
    </div>
   </form>
  )
}
