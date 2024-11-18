"use client";

import React, { useState } from "react";
import InfoSection from "./InfoSection";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";


const TopFlight = () => {
  const [viewAll,setviewAll]=useState(true)
  const t=useTranslations("Popular")
  const cityData = [
    {
      head: t("heading1"),
      images: [
        {
          image: "/Images/london.webp",
          title: "New York to London",
          description: t("des1"),
        },
        {
          image: "/Images/lose.webp",
          title: "Los Angeles to Tokyo",
          description: t("des2"),
        },
        {
          image: "/Images/tokyo.webp",
          title: " Sydney to Auckland",
          description: t("des3"),
        },
        {
          image: "/Images/rome.webp",
          title: "Paris to Rome",
          description: t("des4"),
        },
        {
          image: "/Images/dubai.webp",
          title: "Dubai to Mumbai",
          description: t("des5"),
        },
      ],
    },
    {
      head: t("heading2"),
      images: [
        {
          image: "/Images/europe.webp",
          title: "Explore the Wonders of Europe",
          description: t("desa1"),
        },
        {
          image: "/Images/getways.webp",
          title: "Exotic Getaways to the Caribbean",
          description: t("desa2"),
        },
        {
          image: "/Images/adventure.webp",
          title: "Adventure Awaits in Southeast Asia ",
          description: t("desa3"),
        },
        {
          image: "/Images/maldives.webp",
          title: "Serene Escapes to the Maldives",
          description: t("desa4"),
        },
        {
          image: "/Images/america2.webp",
          title: "Cultural Immersion in South America",
          description: t("desa5"),
        },
      ],
    },
    {
      head: t("heading3"),
      images: [
        {
          image: "/Images/car1.webp",
          title: "Luxury Comfort",
          description: t("desb1"),
        },
        {
          image: "/Images/24.webp",
          title: "24/7 Availability",
          description: t("desb2"),
        },
        {
          image: "/Images/wifi.webp",
          title: "Free Wi-Fi Access",
          description: t("desb3"),
        },
        {
          image: "/Images/safety-first.webp",
          title: "Safety First",
          description: t("desb4"),
        },
        {
          image: "/Images/businesswoman.webp",
          title: "Personalized Service",
          description: t("desb5"),
        },
      ],
    },
  ];

  const attractions = [
    {
      name: "Jaipur",
      icon: "🏰",
      isNew: true,
      link: "/FamousPlaces/InnerLakshadweep",
    },
    { name: "Bali", icon: "🏝️", link: "/FamousPlaces/Bali" },
    { name: "Goa ", icon: "🏖️", link: "/FamousPlaces/Andaman" },
    { name: "Australia ", icon: "🦘", link: "/FamousPlaces/Kashmir" },
    { name: "Dubai", icon: "🏢", link: "/FamousPlaces/Dubai" },
    { name: "Paris", icon: "🗼", link: "/FamousPlaces/Jaipur" },
    { name: "Kashmir", icon: "🏔️", link: "/FamousPlaces/Bengaluru" },
    { name: "Singapore", icon: "🛳️", link: "/FamousPlaces/Singapore" },
    { name: "Leh", icon: "🏯", link: "/FamousPlaces/Leh" },
    { name: "Singapore", icon: "🦁", link: "/FamousPlaces/Leh" },
    { name: "France", icon: "🌉", link: "/FamousPlaces/Leh" },

 
    { name: "Thar", icon: "🏜️", link: "/FamousPlaces/Kerala" },
  ];

  return (
    <>
      <div>
        <main className="flight pt-0 lg:pt-10 px-0 md:px-10  lg:px-40">
          <div className="">
            <div className="relative ">
              <div className="relative text-lg md:text-xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center gap-2  mb-5 lg:mb-6">
               {t("mainheading")}

              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3  xl:px-5 pb-5 justify-center ">
            {cityData.map((city, index) => (
              <div
                className="bg-white border shadow-md my-5 lg:my-0  mx-auto lg:mx-2 rounded-xl overflow-hidden relative  w-[95%] xl:w-[400px]"
                key={index}
              >
                <div className="city-head bg-[#0291d2] text-center">
                  <h4 className="text-white text-lg font-semibold py-3">
                    {city.head}
                  </h4>
                </div>
                <div className=" ">
                  {city.images.map((imageData, i) => (
                    <div
                      className="items-center border-b px-4 flex hover:shadow-lg"
                      key={i}
                    >
                      <div className="city-image">
                        <img
                          src={imageData.image}
                          alt={imageData.title}
                          className="rounded-full h-9 object-cover w-9"
                        />
                      </div>
                      <div className="px-4 w-[80%]">
                        <h3 className="text-sm font-semibold mb-0 mt-4 ">
                          {imageData.title}
                        </h3>
                        <p className="text-[#525252] text-xs font-normal mb-5 pt-1">
                          {imageData.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <InfoSection />

      <div className="w-full mx-auto px-6 md:md:px-10 lg:px-52  pt:0 lg:pt-12 z-[-1]">
        <div className="relative text-lg md:text-xl lg:text-4xl tracking-tighter	 gfont1  font-bold text-gray-900 flex justify-center items-center gap-2 mb-14">
         Tourist 💕<span className="text-[#521010]"> Love</span> 
        </div>
       
        <div className="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5 md:gap-y-8 ">
          {viewAll && attractions.slice(0,7).map((attraction, index) => (
       
       <div className="col-span-1 border-b-4 border-b-[#009dff] duration-200 text-xl shadow-md">
         <Link href={attraction.link} >
           <div className="bg-white shadow-md rounded-lg p-4">
             <div className="flex items-center">
               <div className="icon-box">
                <p className="text-3xl ">{attraction.icon}</p>
               </div>
               <div className="ml-4">
                 <h5 className="font-semibold text-lg">{attraction.name}</h5>
                 <span className="text-gray-500 text-[1rem]">View All Pakage</span>
               </div>
             </div>
           </div>
         </Link>
       </div>
      
    
     
          ))}
           {!viewAll && attractions.map((attraction, index) => (
       
       <div className="col-span-1 border-b-4 border-b-[#009dff] duration-200 text-xl shadow-md">
         <Link href={attraction.link} >
           <div className="bg-white shadow-md rounded-lg p-4">
             <div className="flex items-center">
               <div className="icon-box">
                <p className="text-3xl ">{attraction.icon}</p>
               </div>
               <div className="ml-4">
                 <h5 className="font-semibold text-lg">{attraction.name}</h5>
                 <span className="text-gray-500 text-[1rem]" >View All Pakage</span>
               </div>
             </div>
           </div>
         </Link>
       </div>
      
    
     
          ))}
           {viewAll && <div onClick={()=>setviewAll(false)} className="col-span-1 border-b-4 hover:border-b-[#009dff] duration-200 text-xl shadow-md cursor-pointer">
         <span >
           <div className="bg-white shadow-md rounded-lg p-4">
             <div className="flex items-center">
               <div className="icon-box">
                <p className="text-2xl ">🧾</p>
               </div>
               <div className="ml-4">
                 <h5 className="font-semibold text-lg">View All</h5>
                 <span className="text-gray-500 text-[1rem]">Destination Pakage</span>
               </div>
             </div>
           </div>
         </span>
       </div>}




           </div>
      

        <div className="view_btn my-10 flex justify-center">
          {/* <Link
            href="/FamousPlaces/Cities"
            className="bg-[#2196F3] text-white py-2 px-4 rounded-full"
          >
            View All
          </Link> */}
        </div>
      </div>

      <div className="bg-gray-100 p-5 lg:p-20 mt-12">
        <div className=" flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <div className="">
            <div className="p-4">
              <h3 className="text-4xl font-normal">
               {t("service")}  <br />
              </h3>
              <p className="mt-4 mb-6">
              {t("serviceans")}
              </p>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <img
                    src="/Images/blog2.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                      {t("moreabout")}
                    </h5>
                    <p className="mt-2">
                    {t("moreaboutans")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <img
                    src="/Images/shield.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                     {t("serviceprovider")}
                    </h5>
                    <p className="mt-2">
                  {t("serviceproviderans")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <img
                    src="/Images/general.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                 {t("happyservice")}
                    </h5>
                    <p className="mt-2">
                    {t("happyserviceans")}

                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 my-5 lg:my-0">
            <img
              src="/Images/online-booking.webp"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFlight;
