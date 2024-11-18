"user client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getAllcityes } from "../Store/slices/citysearchSlice";
import { getSightSeeingapi } from "../Store/slices/sightseeingSlice";
import { Calendar } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const ActivitiesSlider = () => {
  const t=useTranslations("activities")
const [cityval,setcityval]=useState()
const [allsearchdata,setAllsearchdata]=useState()
const debounceTimeoutRef = useRef(null);
const allcityes=useSelector((state)=>state.citysearch)
const [cities,setcities]=useState()
  const dispatch = useDispatch();
const [toDate,settoDate]=useState(new Date(Date.now()))
const [fromDate,setformDate]=useState(new Date(Date.now()))
const [show,setShow]=useState("")
const route=useRouter()


  const handleInputChange=(e)=>{
    
    setcityval(e)


    if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
  
      // Set a new timeout
      debounceTimeoutRef.current = setTimeout(() => {
        dispatch(getAllcityes(e));
      }, 400); 
}
useEffect(()=>{
  setcities(allcityes)
},[allcityes])
 
const handelsearch=(value)=>{
  setcityval(value.Name)
  setAllsearchdata(value)
}

const handleSearch=()=>{
  const date = new Date(toDate);
   const date2=new Date(fromDate);
  const offset = 6*10*10*1000;
  
  const localDate = new Date(date.getTime() + offset);
  const localDate2 = new Date(date2.getTime() + offset);
  const localFormattedDate = localDate.toISOString().slice(0, 19);
  const localFormattedDate2 = localDate2.toISOString().slice(0, 19);

  
  // 
  route.push(`/activities/CityId=${allsearchdata.Code}&FromDate=${localFormattedDate}&ToDate=${localFormattedDate2}`)


}
const handeltoDate=(newRange)=>{
  const date = new Date(newRange.year, newRange.month - 1, newRange.day);
  
    // setSelected(date);
    // handleClick("");
    settoDate(date)
    setShow("from")

}
const handelformDate=(newRange)=>{
  const date = new Date(newRange.year, newRange.month - 1, newRange.day);
setformDate(date)
setShow("")

}

  return (
    <div className="relative pt-6 lg:pt-0">
      <div className="relative">
          <img
            src="/Images/australia-banner-home.webp"
            alt="Kashmir Tour Packages"
            layout="fill"
            objectFit="cover"
            className="w-full h-[350px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 text-white bg-[#a6a4a433] bg-opacity-20"></div>
          <h2 className="absolute left-0 right-0  flex items-center justify-center mx-auto z-10  text-white text-xl lg:text-2xl top-28 md:top-24 font-bold">
            Kashmir Tour Packages
          </h2>
      </div>

      <div className="absolute bottom-16 left-0 right-0 text-center pb-6">
        <h1 className="text-white text-2xl lg:text-4xl font-bold">
          {t("experience")}
        </h1>
        <div className="flex justify-between mt-5 items-center border rounded-full  w-full md:w-[600px] bg-white mx-auto ">
          <div className="relative flex p-2 px-4 w-full items-center">
            <img
              src="/Images/search.svg"
              alt="Search Icon"
              width={24}
              height={24}
            />
            <input
              type="text"
              id="txtDesCity"
              className="ml-2 flex-grow border-none p-2 w-full rounded-lg placeholder-gray-500 focus:outline-none"
              placeholder="Enter Your Dream Destination!"
value={cityval}
onChange={(e)=>handleInputChange(e.target.value)}

            />
           {cityval && !allsearchdata  && <div className="bg-white absolute w-full  h-36 overflow-y-auto top-full">
  {cities && cities.isLoading && <div>Loading...</div> }
  {cities && !cities.isLoading && cities.info.map((item)=>{
    return(
      <div className=" text-start m-4 cursor-pointer border-b-2 pb-1" onClick={()=>handelsearch(item)}>{item.Name}</div>
    )
  }) }
            </div>}
          </div>

<div className="relative text-[10px]">
<div className=" cursor-pointer px-2 mx-1 h-full" onClick={()=>setShow("To")}>
  <p className="text-nowrap">To Date</p>
 <span> {toDate.toLocaleDateString('en-US', {month: 'short',})}-{toDate.getDate()}</span>
 <p>{toDate.getFullYear()}</p>
</div>
{ show == "To" &&
<div className="absolute top-full bg-white z-20">
<Calendar
                          aria-label="Select a date"
                          value={""}
                          onChange={handeltoDate}
                          // minValue={toDate}
                          
                        />
                        </div>}
</div>


<div className="relative text-[10px]">
<div className=" cursor-pointer px-2 mx-1" onClick={()=>setShow("from")} >
  <p className="text-nowrap">From Date</p>
 <span> {fromDate.toLocaleDateString('en-US', {month: 'short',})}-{fromDate.getDate()}</span>
 <p>{fromDate.getFullYear()}</p>
</div>
{ show == "from" &&
<div className="absolute top-full bg-white z-20">
<Calendar
                          aria-label="Select a date"
                          value={""}
                          onChange={handelformDate}
                          // minValue={toDate}
                          
                        />
                        </div>}
                        </div>

          <button
            className="ml-2 primary-col text-white px-8 py-2 h-14  rounded-full hover:bg-[#ef6414ed]"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSlider;
