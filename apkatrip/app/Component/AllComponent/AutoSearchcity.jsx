// import Link from 'next/link';
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




import { getAllcityes } from "../Store/slices/citysearchSlice";


const AutoSearch = ({ value, onSelect, }) => {
 
  const allcityes=useSelector((state)=>state.citysearch)
 const [inputValue,setinputvalue]=useState("")

 const addCitdef = {
  info: [
    { Code: "100881", Name: "Haryana" },
    { Code: "144227", Name: "Bheeramballi" },
    { Code: "102750", Name: "Perambalur" },
    { Code: "103345", Name: "Sambalpur" },
  ],
}
const [cities,setallcities]=useState(addCitdef)
console.log('sfr',cities)
const debounceTimeoutRef = useRef(null);

  const dispatch = useDispatch();
  

  

const handleInputChange=(e)=>{
    
    setinputvalue(e)

    if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
  
      // Set a new timeout
      debounceTimeoutRef.current = setTimeout(() => {
        dispatch(getAllcityes(e));
      }, 400); 
}




useEffect(()=>{dispatch(getAllcityes())},[])

 useEffect(()=>{
    setallcities(allcityes)
 },[allcityes])

 





 



  return (
    <div className="autosearch fromsectr" id="fromautoFill_in">
      <div className="searcityCol flex gap-3 bg-white p-3 items-center">
        <img src="/Images/icon-search.svg" alt="Search" />
        <input
          id="a_FromSector_show"
          type="text"
          className="srctinput autoFlll w-full text-black text-sm"
          placeholder={value}
          autoComplete="off"
          value={inputValue}
          autoFocus
          onChange={(e)=>handleInputChange(e.target.value)}
        />
      </div>

      <div
        id="fromautoFill"
        className="text-black overflow-hidden h-72 overflow-y-auto"
      >
        <div className="clr"></div>
        <div className="bg-[#ECF5FE] py-1 px-2 border-t border-[#ECECEC] text-sm font-semibold">
          Top Cities
        </div>

        <ul>
             {  cities  &&  cities.isLoading && <p>Loading...</p>}
          { cities && cities.isError && <p>Error fetching data.</p>}

          {cities && !cities.isLoading  && !cities.isError && cities.info && cities.info.map((item)=>{
            return(
         <li className=" m-auto my-1 hover:bg-gray-200 cursor-pointer duration-150 p-2" onClick={()=>onSelect(item)} >
            {item.Name}
         </li>

            )
          })  }

          
        </ul>
      </div>
    </div>
  );
};

export default AutoSearch;
