"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const hotels = [
  // Dubai Hotels
  {
    id: 1,
    name: "The Manila Cathedral",
    image: "/Images/booking1.webp",
    rating: 4.0,
    reviews: 224,
   
    location: "Bangkok",
  },
  {
    id: 2,
    name: "Ramada Plaza by Wyndham Dubai Deira",
    image: "/Images/booking1.webp",
    rating: 4.2,
    reviews: 274,
  
    location: "Manila",
  },
  {
    id: 3,
    name: "Golden Sands Hotel Apartments",
    image: "/Images/booking1.webp",
    rating: 4.1,
    reviews: 276,
   
    location: "Seoul",
  },
  {
    id: 4,
    name: "Super 8 by Wyndham Dubai Deira",
    image: "/Images/booking1.webp",
    rating: 4.3,
    reviews: 248,
   
    location: "Tokyo",
  },
  // Hong Kong Hotels
  {
    id: 5,
    name: "The Peninsula Hong Kong",
    image: "/Images/booking1.webp",
    rating: 4.8,
    reviews: 320,
   
    location: "Taipei",
  },
  {
    id: 6,
    name: "The Langham Hong Kong",
    image: "/Images/booking1.webp",
    rating: 4.7,
    reviews: 210,
  
    location: "Tokyo",
  },
  {
    id: 7,
    name: "Mandarin  Hong Kong",
    image: "/Images/booking1.webp",
    rating: 4.9,
    reviews: 400,
   
    location: "Bangkok",
  },
  {
    id: 8,
    name: "Mandarin  Hong Kong",
    image: "/Images/booking1.webp",
    rating: 4.9,
    reviews: 400,
   
    location: "Bangkok",
  },
  {
    id: 9,
    name: "Mandarin  Hong Kong",
    image: "/Images/booking1.webp",
    rating: 4.9,
    reviews: 400,
   
    location: "Bangkok",
  },
  {
    id: 10,
    name: "InterContinental Hong Kong",
    image:
      "/Images/InterContinental.webp",
    rating: 4.6,
    reviews: 180,
   
    location: "Hong Kong",
  },
];

const FeaturedTwo = () => {
  const [activeTab, setActiveTab] = useState("Bangkok");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter hotels based on active tab
  const filteredHotels = hotels.filter((hotel) => hotel.location === activeTab);

  return (
    <div className="bg-cover bg-center w-full bg-image-two">
      <div className="recommended-module-title text-xl font-bold mb-2 ">
        Popular Attractions
      </div>

      <div className="js-tab-ajax-switch new-theme">
        <div className="tab-con my-4">
          <div className="js-tile-tab">
            <div className="gap-2 text-sm font-semibold flex">
              <span
                onClick={() => handleTabClick("Bangkok")}
                className={`js-tab-item px-4 py-2 cursor-pointer rounded-sm  ${
                  activeTab === "Bangkok"
                    ? "primary-col text-white"
                    : "bg-white text-black"
                }`}
              >
                Bangkok
              </span>
              <span
                onClick={() => handleTabClick("Manila")}
                className={`js-tab-item px-4 py-2 cursor-pointer rounded-sm  ${
                  activeTab === "Manila"
                    ? "primary-col text-white"
                    : "bg-white text-black"
                }`}
              >
                Manila
              </span>
              <span
                onClick={() => handleTabClick("Tokyo")}
                className={`js-tab-item px-4 py-2 cursor-pointer rounded-sm  ${
                  activeTab === "Tokyo"
                    ? "primary-col text-white"
                    : "bg-white text-black"
                }`}
              >
                Tokyo
              </span>
              <span
                onClick={() => handleTabClick("Taipei")}
                className={`js-tab-item px-4 py-2 cursor-pointer rounded-sm  ${
                  activeTab === "Taipei"
                    ? "primary-col text-white"
                    : "bg-white text-black"
                }`}
              >
                Taipei
              </span>
              <span
                onClick={() => handleTabClick("Seoul")}
                className={`js-tab-item px-4 py-2 cursor-pointer rounded-sm  ${
                  activeTab === "Seoul"
                    ? "primary-col text-white"
                    : "bg-white text-black"
                }`}
              >
                Seoul
              </span>
              <span
                onClick={() => handleTabClick("Hong Kong")}
                className={`js-tab-item px-4 py-2 cursor-pointer rounded-sm  ${
                  activeTab === "Hong Kong"
                    ? "primary-col text-white"
                    : "bg-white text-black"
                }`}
              >
                Hong Kong
              </span>
            </div>
          </div>
        </div>
        <div className="content-con">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="w-full md:w-64 rounded-tr-lg rounded-tl-lg overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <div
                      className="relative h-40 rounded-tl-lg rounded-tr-lg bg-cover bg-no-repeat bg-center transition-transform duration-500 ease-in-out hover:scale-110"
                      style={{ backgroundImage: `url(${hotel.image})` }}
                    ></div>
                  </div>
                  <div className="p-4 h-[132px] rounded-bl-lg rounded-br-lg bg-white">
                    <div className="text-base font-bold">
                      {hotel.name}
                      <div className="flex gap-1 my-2 text-[#ff9500]">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${
                              i < Math.floor(hotel.rating)
                                ? "text-[#ff9500]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="c-hot-hotel-item-v2__review flex items-center mt-2">
                      <div className="c-hot-hotel-item-v2__score text-sm">
                        <span>{hotel.rating.toFixed(1)}</span>
                        <span>/</span>
                        <span>5</span>
                      </div>
                      <div className="hotel-comments text-sm ml-2">
                        {hotel.reviews} reviews
                      </div>
                    </div>
                  
                  
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center">
                No hotels available
              </div>
            )}

            <Link href="" className="relative rounded-lg overflow-hidden">
              <div className="rmmc-bg-full-two rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"></div>
              <div
                className="absolute rounded-lg z-10 bottom-0 p-5"
                style={{
                  background:
                    "linear-gradient(180deg,transparent,#5a9aa5 48px,#5a9aa5)",
                }}
              >
                <div className="text-white text-center font-bold text-lg mb-2">
                  Discover great deals on hotels around the world
                </div>
                <button className="bg-[#2196F3] font-bold text-base text-white w-[80%] py-2 px-4 rounded-lg mx-5">
                  Go Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTwo;
