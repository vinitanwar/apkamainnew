"use client";
import React, { useEffect, useRef, useState } from "react";
import {
 
  FaCalendarWeek,
  FaChevronDown,
 
} from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getBuscityapi } from "../../Store/slices/busSearchSlice";
import { select } from "@nextui-org/react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { getbuses } from "../../Store/slices/busslices";
import { useRouter } from "next/navigation";






const BusComp = () => {
  const [selected,setselected]=useState("")
  const defaultstore =    JSON.parse(localStorage.getItem("busSearch"))
  
  const [fromCity, setFromCity] = useState( (defaultstore && defaultstore.fromCity) || {
  CityId: 1354,
    CityName: "Delhi",
    
  });
  const [toCity, setToCity] = useState ( ( defaultstore && defaultstore.toCity) || {
      CityId:3534,
      CityName: "Mumbai",
 
  });
  const localTimeZone = getLocalTimeZone();
  const currentDate = today(localTimeZone);

  const [pickupdate,setpickdate]=useState( (defaultstore && new Date(defaultstore.pickupdate)) || new Date(Date.now()))

  const route=useRouter()

const handleRangeChange = (newRange) => {
  const date = new Date(newRange.year, newRange.month - 1, newRange.day+1);
  1
  setpickdate(date);
  setselected("");
};

const handelSearch=()=>{
  localStorage.setItem("busSearch",JSON.stringify({fromCity,toCity,pickupdate}))
 const newdate=  pickupdate.toISOString().split('T')[0];
route.push(`/buses/DateOfJourney=${newdate}&OriginId=${fromCity.CityId}&DestinationId=${toCity.CityId}`)
 
}










  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Array of day names
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

 
  
  const futureDate = new Date();


 
  const [isVisible, setIsVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const dispatch=useDispatch();
 const state=useSelector(state=>state.busCityslice)


  const handleClick = (option) => {
    setSelectedOption(option);
    setIsVisible(true);

    switch (option) {
      case "from":
        handleFromClick();
        break;
      case "to":
        handleToClick();
        break;
      case "traveller":
        handleToClick(); // Add the appropriate handler for traveller
        break;
      default:
        console.log("Unknown option:", option);
    }
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFromClick = () => {
    // Your logic for 'From' click
    console.log("From clicked");
  };

  const handleToClick = () => {
    // Your logic for 'To' click
    console.log("To clicked");
  };
const [searchparam,setsearchparam]=useState("")
 const handelBusSearch=(e)=>{
 
  setsearchparam(e.target.value)
 }
 useEffect(()=>{
 const intervels= setTimeout(() => {
  dispatch(getBuscityapi(searchparam))
}, 500);
return ()=>clearTimeout(intervels)
 },[searchparam])


return (
    <>
      <div className="flex flex-col  lg:block custom-color text-white md:px-10 lg:px-52  py-10">
    
              <span className=" text-lg mb-2 mr-2 font-bold  rounded-full ">Online Bus Tickets</span>
        
                <div className="bg-white custom-shadow grid grid-cols-4 gap-0 border-gray-300">
                
                <div className="relative">
                  <div
                    className="flex flex-col bg-white relative px-4 py-3 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                    onClick={() => setselected("from")}
                  >
                    <p className="text-sm text-[#7E7979] font-medium">From</p>
                    <span className="text-3xl py-1 text-black font-bold">
                      {fromCity.CityName}
                    </span>
                  
                  </div>

  { selected=="from" && 
   <div className="absolute top-full bg-white w-full z-30">
<input type="text" value={searchparam} className="w-full text-black" placeholder="Search city..." onChange={(e)=>handelBusSearch(e)}  />
<div className="h-32 overflow-hidden overflow-y-scroll">
{state && !state.isLoading && state.info && state.info.BusCities &&state.info.BusCities.map((item)=>{
  return(
    <p className=" border-b-2 p-1 cursor-pointer" onClick={()=>{setFromCity({
      CityId: item.CityId,
      CityName: item.CityName,
    }),setselected("to"),setsearchparam("")}}>{item.CityName}</p>
  )
})}</div>
     </div>}


                  </div>


                  <div className="relative">
                  <div
                    className="flex flex-col px-4 py-3 relative bg-white border-r hover:bg-[#ECF5FE]"
                    onClick={() => setselected("to")}
                  >
                    <label className="text-sm text-[#7E7979] font-medium">
                      To
                    </label>
                    <span className="text-3xl py-1 text-black font-bold">
                      {toCity.CityName}
                    </span>
                   
                  </div>
                  { selected=="to" && 
   <div className="absolute top-full bg-white w-full z-30">
<input type="text" value={searchparam} className="w-full text-black" placeholder="Search city..." onChange={(e)=>handelBusSearch(e)}  />
<div className="h-32 overflow-hidden overflow-y-scroll">
{state && !state.isLoading && state.info && state.info.BusCities &&state.info.BusCities.map((item)=>{
  return(
    <p className=" border-b-2 p-1 cursor-pointer" onClick={()=>{setToCity({
      CityId:item.CityId,
      CityName:item.CityName,
    }),setselected("date") ,setsearchparam("")   }}>{item.CityName}</p>
  )
})}</div>
     </div>}
 
     </div>




<div className="relative">
                  <div className="flex flex-col  px-4 py-3 bg-white  border-r hover:bg-[#ECF5FE]" onClick={()=>setselected("date")}>
                    <label className="text-sm text-[#7E7979] font-medium">
                      Departure Date
                    </label>
                    <div className="flex items-baseline text-black">
                      <span className="text-3xl py-1 pr-1 text-black font-bold">
                        {" "}
                        {pickupdate.getDate()-1}
                      </span>
                      <span className="text-sm font-semibold">
                        {pickupdate.toLocaleString('en-US', { month: 'short' })}'
                      </span>
                      <span className="text-sm font-semibold">
                        {" "}
                        {pickupdate.getFullYear()}
                      </span>
                      <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                    </div>
                  
                  </div>
                  { selected === "date" && (
                      <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                        <Calendar
                          aria-label="Select a date"
                          value={""}
                          onChange={handleRangeChange}
                          minValue={currentDate}
                          
                        />
                      </div>
                    )}
            </div>     
                  <button onClick={handelSearch} className="text-white flex items-center justify-center text-2xl font-bold p-4 primary-col rounded-br-lg rounded-tr-lg">
                    Search
                  </button>
                </div>
                </div>
         
           </>
  );
};

export default BusComp;
