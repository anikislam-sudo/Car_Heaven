"use client";

import React, { useState } from 'react'
import SearchManufacture from './SearchManufacture';
import Image from 'next/image';
import { useRouter } from "next/navigation";
const SearchButton=({otherClasses}:{otherClasses:string})=>(
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
  <Image
    src={"/magnifying-glass.svg"}
    alt={"magnifying glass"}
    width={40}
    height={40}
    className='object-contain'
  />
</button>
);

export const SearchBar = () => {
 const [manufacturer,setManuFacturer] =  useState('')
 const [model, setModel] = useState("");
 const router = useRouter()
    const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(manufacturer.trim() ===""&& model.trim() === ""){
        alert("please input the field");
      }
      updateSearchParams(manufacturer.toLowerCase(),model.toLowerCase());
    };

    const updateSearchParams=(manufacturer:string,model:string)=>{
       const searchParams = new URLSearchParams(window.location.search)

       if(model){
        searchParams.set("model",model)
       }else{
        searchParams.delete("model",model)
       }
       if(manufacturer){
        searchParams.set("manufacturer",manufacturer)
       }else{
        searchParams.delete("manufacturer",manufacturer)
       }
 
       const newPathName=`${window.location.pathname}?${searchParams.toString()}`

       router.push(newPathName,{scroll:false})
 
    }
  return (
   <form className='searchbar  fixed top-0 left-0 z-50 bg-white w-full p-4 shadow-md' onSubmit={handleSearch}>
    <div className='searchbar__item'>
      <SearchManufacture
       manufacturer={manufacturer}
       setManuFacturer={setManuFacturer}
       />
       <SearchButton otherClasses='sm:hidden' />
    </div>
    <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
   </form>
  )
}
