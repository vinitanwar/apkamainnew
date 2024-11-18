"use client";
import React, { useState } from "react";
import Header from "../Component/AllComponent/Header";
import CustomSlider from "../Component/AllComponent/Slider";
import FAQSection from "../Component/AllComponent/FAQ";
import Link from "next/link";
import HotelChains from "../Component/AllComponent/HotelChain";
import MobileHeader from "../Component/AllComponent/MobileHeader";
import HotelComp from "../Component/AllComponent/formMaincomp/HotelsComp";
import Hotelmobileheader from "../Component/AllComponent/Hotelmobilheader";

const Page = () => {
  const [showAll, setShowAll] = useState(false);

  const destinations = [
    {
      city: "Delhi",
      url: "/listofhotels", 
      imgSrc: "/Images/del-sm.webp",
      alt: "Delhi",
    },
    {
      city: "Goa",
      url: "/listofhotels",
      imgSrc: "/Images/goa-sm.webp",
      alt: "Goa",
    },
    {
      city: "Mumbai",
      url: "/listofhotels",
      imgSrc: "/Images/mumb-sm.webp",
      alt: "Mumbai",
    },

    {
      city: "Chennai",
      url: "/listofhotels",
      imgSrc: "/Images/chennai-sm.webp",
      alt: "Chennai",
    },
    {
      city: "Hyderabad",
      url: "/listofhotels",
      imgSrc: "/Images/hyd-sm.webp",
      alt: "Hyderabad",
    },
    {
      city: "Jaipur",
      url: "/listofhotels",
      imgSrc: "/Images/jaipur-sm.webp",
      alt: "Jaipur",
    },
    {
      city: "Kolkata",
      url: "/listofhotels",
      imgSrc: "/Images/kolkata-sm.webp",
      alt: "Kolkata",
    },
    {
      city: "Agra",
      url: "/listofhotels",
      imgSrc: "/Images/agra-sm.webp",
      alt: "Agra",
    },
    {
      city: "Udaipur",
      url: "/listofhotels",
      imgSrc: "/Images/udr-sm.webp",
      alt: "Udaipur",
    },
    {
      city: "Shimla",
      url: "/listofhotels",
      imgSrc: "/Images/shimla-sm.webp",
      alt: "Shimla",
    },
    {
      city: "Manali",
      url: "/listofhotels",
      imgSrc: "/Images/manali-sm.webp",
      alt: "Manali",
    },

    {
      city: "Ahemdabad",
      url: "/listofhotels",
      imgSrc: "/Images/ahmd-sm.webp",
      alt: "Pondicherry",
    },
    {
      city: "Varanasi",
      url: "/listofhotels",
      imgSrc: "/Images/varn-sm.webp",
      alt: "Ranthambore",
    },
    {
      city: "Chandigarh",
      url: "/listofhotels",
      imgSrc: "/Images/chnd-sm.webp",
      alt: "Sawai Madhopur",
    },
    {
      city: "Lucknow",
      url: "/listofhotels",
      imgSrc: "/Images/lkcnw-sm.webp",
      alt: "Kolkata",
    },
  ];

  // Function to handle button click
  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  // Determine which destinations to show
  const displayedDestinations = showAll
    ? destinations
    : destinations.slice(0, 6);

  return (
    <>
      <HotelComp />
    <Hotelmobileheader />
      <CustomSlider />
      <div className="px-0 lg:px-20">
        <h2 className="text-lg text-center lg:text-2xl font-semibold mb-5">
          Book Hotels at Popular Destinations
        </h2>
        <div className="_polrdestnbx mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedDestinations.map((dest, index) => (
            <div
              key={index}
              className="ecpl_rbx bg-[#F6FBFF] border border-[#2196F3] m-1 lg:m-0 shadow rounded-lg overflow-hidden"
            >
              <div className="flex gap-5 items-center p-2">
                <Link href={dest.url} passHref className="text-nowrap">
                  <img
                    src={dest.imgSrc}
                    alt={dest.alt}
                    width={100}
                    layout="responsive"
                    className="rounded"
                  />
                </Link>
                <div className="">
                  <Link href={dest.url} passHref className="text-nowrap ">
                    <h5 className="text-xl font-bold mb-1">{dest.city}</h5>
                  </Link>
                  <div className="text-sm">
                    <Link
                      href={dest.url}
                      passHref
                      className="text-nowrap  relative"
                    >
                      Hotels,
                    </Link>
                    <Link
                      href={`${dest.url}`}
                      passHref
                      className="text-nowrap  px-1 relative"
                    >
                      Budget Hotels,
                    </Link>
                    <Link
                      href={`${dest.url}`}
                      passHref
                      className="text-nowrap  px-1 relative"
                    >
                      3 Star Hotels,
                    </Link>
                    <br />
                    <Link
                      href={`${dest.url}`}
                      passHref
                      className="text-nowrap  relative"
                    >
                      4 Star Hotels,
                    </Link>
                    <Link
                      href={`${dest.url}`}
                      passHref
                      className="text-nowrap  px-1 relative"
                    >
                      5 Star Hotels
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={handleViewAll}
            className="bg-[#2196F3] text-white py-2 px-4 rounded-full"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
        <div className="mt-10 mb-5">
          <HotelChains />
        </div>
      </div>

      <section className="px-0 lg:px-20">
        <div className="container mx-auto px-4 py-8 block lg:flex  items-center">
          
          <div className="hidden lg:block flex-shrink-0 w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <div className="relative mx-auto lg:mx-0" style={{margin:"0 auto"}}>
              <span className="spanone"></span>
              <img
                src="/Images/images.webp"
                alt="Hotel App"
                className="w-2/3 relative z-10"
              />
            </div>
          </div>

          {/* Ratings Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <div className="text-center">
              <span className="text-xl font-bold">
                Highest-rated mobile app
              </span>
            </div>
            <div className="flex gap-10 justify-center  items-center mt-4">
              <div>
                {" "}
                <div className="text-4xl font-bold text-gray-800">4.6</div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </svg>
                  ))}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-star-half"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
                  </svg>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="text-gray-600"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                  <span className="ml-2">4,83,459</span>
                </div>
              </div>
              <div className="mt-4  justify-between">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex   mb-2 items-center">
                    <span className="text-sm font-semibold mr-2">{rating}</span>
                    <div
                      className={`h-4  ${
                        rating === 5
                          ? "w-32 bg-[#3ec12f]"
                          : rating === 4
                          ? "w-24 bg-[#80dd87]"
                          : rating === 3
                          ? "w-16 bg-[#e1d013]"
                          : rating === 2
                          ? "w-8 bg-[#d57522]"
                          : "w-4 bg-[#ff7373]"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="text-center  p-4 rounded-lg">
              <div className="text-lg font-bold mb-2">
                Download Apka Trip App
              </div>
              <div className="text-xs border p-3 border-dashed border-[#abc9ae] bg-[#e1ffe4] mb-2">
                Save Up to Rs.5000 OFF on your first hotel <br /> booking Use
                Code: ATI0000
              </div>
              <p className="text-md">For Hassle-Free Hotel Booking</p>
              <div className="mt-4 gap-5 flex justify-center">
                <div>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Images/google-play.webp"
                      alt="Google Play"
                      className="w-40 mb-3"
                    />
                  </Link>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                        src="/Images/app-store.webp"
                      alt="App Store"
                      className="w-40"
                    />
                  </Link>
                </div>

                <div className="flex justify-center">
                  <img
                    src="/Images/tripscan.webp"
                    alt="QR Code"
                    className="w-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-3">
        <FAQSection />
      </div>
    </>
  );
};

export default Page;
