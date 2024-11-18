"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../Component/AllComponent/Header";
import CustomSlider from "../Component/AllComponent/Slider";
import FAQSection from "../Component/AllComponent/FAQ";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import MobileHeader from "../Component/AllComponent/MobileHeader";
import TrainComp from "../Component/AllComponent/formMaincomp/TrainComp";

const page = () => {
  const journeyItems = [
    {
      href: "/trainSearch",
      imgSrc: "/Images/america.webp",
      alt: "UK Trains",
      title: "UK Trains",
    },
    {
     href: "/trainSearch",
      imgSrc: "/Images/1ny6u12000djzth5m52EE.webp",
      alt: "Europe Trains",
      title: "Europe Trains",
    },
    {
     href: "/trainSearch",
      imgSrc: "/Images/1ny7412000djztnftC466.webp",
      alt: "Italy Trains",
      title: "Italy Trains",
    },
    {
     href: "/trainSearch",
      imgSrc: "/Images/1ny1a12000djzrp2n9533.webp",
      alt: "Spain Trains",
      title: "Spain Trains",
    },
    {
     href: "/trainSearch",
      imgSrc: "/Images/1ny4r12000djzsdm4E7EC.webp",
      alt: "China Trains",
      title: "China Trains",
    },
    {
     href: "/trainSearch",
      imgSrc: "/Images/1ny1j12000djzt1tu1655.webp",
      alt: "South Korea Trains",
      title: "South Korea Trains",
    },
  ];
  const partners = [
    {
      alt: "National Rail",
      src: "/Images/1ny2h12000d3hiw1z84D6.webp",
      width: 101,
      height: 36,
    },
    {
      alt: "Eurostar",
      src: "/Images/1ny6312000d3hisi48DE1.webp",
      width: 128,
      height: 45,
    },
    {
      alt: "Italo",
      src: "/Images/1ny3p12000d3hj3yz0E04.webp",
      width: 93,
      height: 24,
    },
    {
      alt: "Trenitalia",
      src: "/Images/1ny2512000d3hj3egE3C9.webp",
      width: 93,
      height: 30,
    },
    {
      alt: "Renfe",
      src: "/Images/1ny6t12000d3hixzc6816.webp",
      width: 80,
      height: 30,
    },
    {
      alt: "SNCF",
      src: "/Images/1ny4q12000d3hj1go74C3.webp",
      width: 58,
      height: 30,
    },
    {
      alt: "Iryo",
      src: "/Images/1os0z12000cp6jjqm0781.webp",
      width: 112,
      height: 28,
    },
    {
      alt: "National Rail",
      src: "/Images/1ny2h12000d3hiw1z84D6.webp",
      width: 101,
      height: 36,
    },
    {
      alt: "Eurostar",
      src: "/Images/1ny6312000d3hisi48DE1.webp",
      width: 128,
      height: 45,
    },
    {
      alt: "Italo",
      src: "/Images/1ny3p12000d3hj3yz0E04.webp",
      width: 93,
      height: 24,
    },
    {
      alt: "Trenitalia",
      src: "/Images/1ny2512000d3hj3egE3C9.webp",
      width: 93,
      height: 30,
    },
    {
      alt: "Renfe",
      src: "/Images/1ny6t12000d3hixzc6816.webp",
      width: 80,
      height: 30,
    },
    {
      alt: "SNCF",
      src: "/Images/1ny4q12000d3hj1go74C3.webp",
      width: 58,
      height: 30,
    },
    {
      alt: "Iryo",
      src: "/Images/1os0z12000cp6jjqm0781.webp",
      width: 112,
      height: 28,
    },
  ];

  const trainTicketTips = [
    {
      imgSrc: "/Images/1ny1812000dgky7y0BB97.webp",
      altText: "Book in Advance",
      title: "Book in Advance",
      description:
        "Advance tickets are usually available for purchase 12 weeks before your travel and save an average of 61% on your tickets.",
    },
    {
      imgSrc: "/Images/1ny2t12000dilbsy8F2F7.webp",
      altText: "Travel Off-Peak",
      title: "Travel Off-Peak",
      description:
        "Off-Peak tickets are cheaper and allow you to travel at less busy times on weekdays, or anytime on weekends.",
    },
    {
      imgSrc: "/Images/1ny3q12000dilbiwi6C3C.webp",
      altText: "Train Passes",
      title: "Train Passes",
      description:
        "For more complex itineraries with 4 or more train journeys, a train pass is often the better choice. It not only saves money but offers flexibility.",
    },
    {
      imgSrc: "/Images/1ny5v12000dilb9yjB499.webp",
      altText: "Discounts at Apka Trip",
      title: "Discounts at Apka Trip",
      description:
        "Apka Trip frequently offers promotions and discounts, so follow us to stay updated on cheap train fares.",
    },
  ];
  return (
    <>
      <TrainComp />
      <MobileHeader />
      <CustomSlider />

      <div className="content px-5 py-0 lg:px-40 lg:py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Book Train Tickets with Apka Trip?
        </h2>
        <ul className="block lg:flex items-center justify-center gap-20">
          <li className="mb-5 md:mb-0">
            <div className="img-container flex-shrink-0">
              <img
                src="/Images/1ny5512000dkon9p3A3E5.png_.webp"
                alt="Cheap Trains in Europe and Asia"
                width={100} 
                height={100}
                className="w-10 h-10  mx-auto object-cover"
              />
            </div>
            <div className="text-center mt-5">
              <h3 className="name text-xl font-semibold mb-3">
                Cheap Trains in Europe and Asia
              </h3>
              <p className="desc text-gray-600">
                Promotions and discounts to get cheap train tickets
              </p>
            </div>
          </li>
          <li className="mb-5 md:mb-0">
            <div className="img-container flex-shrink-0">
              <img
                src="/Images/1ny5c12000dkolhv7B2D7.png_.webp"
                alt="Live Train Fares and Times"
                width={100} // Adjust size as needed
                height={100} // Adjust size as needed
                className="w-10 h-10  mx-auto object-cover"
              />
            </div>
            <div className="text-center mt-5">
              <h3 className="name text-xl font-semibold mb-3">
                Live Fares and Times
              </h3>
              <p className="desc text-gray-600">
                View rail status, departure info and compare prices
              </p>
            </div>
          </li>
          <li className="mb-5 md:mb-0">
            <div className="img-container flex-shrink-0">
              <img
                src="/Images/1ny4g12000dkolhv536C3.png_.webp"
                alt="E-tickets Available"
                width={100} // Adjust size as needed
                height={100} // Adjust size as needed
                className="w-10 h-10  mx-auto object-cover"
              />
            </div>
            <div className="text-center mt-5">
              <h3 className="name text-xl font-semibold mb-3">
                E-tickets Available
              </h3>
              <p className="desc text-gray-600">
                Digital tickets on your phone for contactless travel
              </p>
            </div>
          </li>
          <li className="mb-5 md:mb-0">
            <div className="img-container flex-shrink-0">
              <img
                src="/Images/1ny4v12000dkomd640BC9.png_.webp"
                alt="Work with Trusted Partners"
                width={100} // Adjust size as needed
                height={100} // Adjust size as needed
                className="w-10 h-10  mx-auto object-cover"
              />
            </div>
            <div className="text-center mt-5">
              <h3 className="name text-xl font-semibold mb-3">
                Trusted Operators
              </h3>
              <p className="desc text-gray-600">
                We bring all train operators together for easier rail travel
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className=" px-5 md:px-20  py-10">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Your Next Train Journey Starts Here
        </h2>
        <div className="text-lg max-w-4xl mx-auto font-medium text-center mb-6">
          Your reliable and authorised train journey planner for the
          <Link href="/trainSearch">UK</Link>,
          <Link href="/trainSearch">Eurostar</Link>,
          <Link href="/trainSearch">Europe</Link>,
          <Link href="/trainSearch">Italy</Link>,
          <Link href="/trainSearch">Spain</Link>,
          <Link href="/trainSearch">China</Link>,
          <Link href="/trainSearch">Hong Kong</Link>, and
          <Link href="/trainSearch">South Korea</Link>, offering cheap train
          tickets and the best plan for your next train journey.
        </div>

        <div className="journey-body mt-5 rounded-t-lg">
          <div className="relative">
            <img
              src="/Images/1ny4212000djy4enwAAC6_W_1920_10000_Q50.webp"
              alt="Your Next Train Journey Starts Here"
              layout="responsive"
              width={1920}
              className="rounded-t-lg h-60"
              loading="lazy"
            />
          </div>
          <div className="journey-list grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 rounded-b-lg p-5">
            {journeyItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="journey-item flex bg-white  justify-between items-center p-4  rounded-lg shadow-lg hover:bg-gray-100 transition ease-in-out duration-300"
              >
                <div className="flex gap-5 items-center">
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-16 h-16 object-cover rounded-full"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold ">{item.title}</h3>
                </div>
                <IoMdArrowDropright className="text-5xl" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className=" px-5 md:px-20 py-10">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Trusted Partners
        </h2>
        <p className="mb-6 text-gray-700 text-center">
          We work with over 1,000 trusted train partners across Europe including
          LNER, GWR, Trenitalia, NTV Italo, Deutsche Bahn, Renfe, and many more.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 shadow-xl lg:grid-cols-5 gap-10 rounded-lg p-10 mx-0 lg:mx-20">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 px-5 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-5 md:mb-10">
          How To Buy Cheap Train Tickets?
        </h2>
        <div className="relative">
          <ul className=" block md:flex gap-5 justify-center">
            {trainTicketTips.map((tip, index) => (
              <li
                key={index}
                className="shadow-custom rounded-lg p-5 my-5 lg:my-0 m-auto lg:m-0 w-80 bg-white"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={tip.imgSrc}
                    alt={tip.altText}
                    width={100}
                    height={100}
                    className="mb-2"
                  />
                  <h3 className="text-xl text-justify font-semibold mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-justify text-[#455873]">
                    {tip.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FAQSection />
    </>
  );
};

export default page;
