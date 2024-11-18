"use client";

import { FaRupeeSign } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay } from "swiper/modules";

// import required modules
import { EffectCards } from "swiper/modules";

export default function page() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const vouchers = [
    {
      id: 1,
      text: "5000 Vouchers",
      brands: "from Multiple Brands",
      image: "/Images/giftboxati.webp",
    },
    {
      id: 2,
      text: "5000 Vouchers",
      brands: "from Multiple Brands",
      image: "/Images/healthcareati.webp",
    },
    {
      id: 3,
      text: "5000 Vouchers",
      brands: "from Multiple Brands",
      image: "/Images/5-starsati.webp",
    },
    {
      id: 4,
      text: "5000 Vouchers",
      brands: "from Multiple Brands",
      image: "/Images/airplaneati.webp",
    },
    {
      id: 5,
      text: "5000 Vouchers",
      brands: "from Multiple Brands",
      image: "/Images/busati.webp",
    },
    {
      id: 6,
      text: "5000 Vouchers",
      brands: "from Multiple Brands",
      image: "/Images/money-bagati.webp",
    },
    {
      id: 7,
      text: "5000 Vouchers",
      brands: "from Multiple Brands",
      image: "/Images/bookingati.webp",
    },
    {
      id: 8,
      text: "5000 Vouchers",
      brands: "from Multiple Brands",
      image: "/Images/travelati.webp",
    },
  ];

  const faqData = [
    {
      question: "What medical assistance is available on board?",
      answers: [
        "Most airlines are equipped to provide basic first aid on board. Cabin crew are trained to handle medical emergencies and have access to a first aid kit. Some flights may also have automated external defibrillators (AEDs) available.",
      ],
    },
    {
      question: "Can I carry my medications on the flight?",
      answers: [
        "Yes, passengers are allowed to carry necessary medications on flights. It’s recommended to carry medications in their original packaging, along with a copy of your prescription, especially for international travel.",
      ],
    },
    {
      question: "Are there any restrictions on carrying medical equipment?",
      answers: [
        "Passengers can bring essential medical equipment, such as oxygen concentrators, on board. However, it’s important to notify the airline in advance and ensure the equipment complies with airline regulations. Some equipment may require medical clearance.",
      ],
    },
    {
      question:
        "How can I request special medical assistance during my flight?",
      answers: [
        "You can request special medical assistance when booking your flight or by contacting the airline’s customer service. Services include wheelchair assistance, priority boarding, and extra help for passengers with medical conditions.",
      ],
    },
    {
      question: "Can I bring my oxygen supply on the plane?",
      answers: [
        "Passengers who need supplemental oxygen can bring their own oxygen concentrators, provided they meet the airline’s requirements. It's important to inform the airline in advance and bring any necessary medical documentation.",
      ],
    },
    {
      question: "Is there an in-flight doctor available during the flight?",
      answers: [
        "While most flights do not have an in-flight doctor, some airlines have access to medical professionals via radio or satellite communication. If a medical emergency occurs, the cabin crew can also request help from medical professionals on board.",
      ],
    },
    {
      question: "What should I do if I feel unwell during the flight?",
      answers: [
        "If you feel unwell during the flight, notify the cabin crew immediately. They are trained to assist with common health issues, and if necessary, they can provide first aid or arrange for medical help at the destination.",
      ],
    },
    {
      question: "Are there any medical services available at the airport?",
      answers: [
        "Many major airports have medical services available, including clinics and pharmacies. If you require medical assistance before or after your flight, you can inquire at the airport’s information desk.",
      ],
    },
    {
      question: "How do airlines handle medical emergencies in flight?",
      answers: [
        "In case of a medical emergency during the flight, cabin crew are trained to provide first aid and can contact medical professionals on the ground. In serious cases, flights may be diverted to the nearest airport for medical assistance.",
      ],
    },
  ];

  return (
    <div className="joinPro overflow-x-hidden">
      <div className="">
        <div className="firstLinear bg-[#00045D] pt-3 md:pt-10">
          <div className="md:max-h-[80vh] lg:max-h-[28vh] px-5 md:px-20 lg:px-40  text-white">
            <div className="flex justify-between">
              <h3 className="text-xl md:text-2xl font-serif">Apka Trip</h3>
              <button className="text-white border py-1 px-3 md:py-2 rounded md:px-6 text-xs  md:text-sm">
                Login
              </button>
            </div>
            <div className="py-10 flex flex-col gap-10 lg:flex-row justify-between items-center  ">
              <div className="space-y-1">
                <h3 className="text-xl text-center lg:text-start md:text-5xl text-[#F6A50F] capitalize font-extrabold">
                  join Apka Trip
                </h3>
                <p className="text-md text-center lg:text-start text-white font-semibold md:text-2xl lg:text-3xl tracking-wide  leading-relaxed py-4">
                  & Get a Chance to Earn Unlimited
                </p>
                <div className="px-2 w-full md:px-3 rounded-lg flex  py-2 bg-[#2B317C]">
                  <input
                    type="text"
                    className="py-2  text-lg  md:text-md w-full bg-white text-black px-3  rounded-l"
                    placeholder="Enter Your Email id /Phone No"
                  />
                  <button className="bg-orange-600 text-white px-3 py-1 md:py-4 rounded-r">
                    Sumbit
                  </button>
                </div>
              </div>
              <div className="swiperLeftSection custom-swipe  ps-3 ">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  loop={true}
                  modules={[EffectCards, Autoplay]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper overflow-x-hidden"
                >
                  <SwiperSlide>
                    <img
                      src="/Images/pro1.png"
                      className="h-full object-cover"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/Images/pro2.png"
                      className="h-full object-cover"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/Images/pro3.png"
                      className="h-full object-cover"
                      alt=""
                    />
                  </SwiperSlide>{" "}
                
                </Swiper>
              </div>
            </div>
          </div>
         <div className="hidden md:block">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill="#060C49"
              fill-opacity="1"
              d="M0,160L120,176C240,192,480,224,720,213.3C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
         </div>
        </div>
        <div className="secondLinear space-y-7 min-h-[40vh] bg-[#060C49] px-3 md:px-20 lg:px-40 text-white ">
          <div className="text-center text-xl pt-10 lg:pt-0 lg:text-4xl font-bold ">
            <h3>APKA TRIP Benefits</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-center gap-5 sm:gap-8 lg:gap-10 px-4">
            {vouchers.map((voucher, index) => (
              <div
                key={voucher.id}
                className="flex w-full sm:w-auto max-w-xs justify-between mx-auto lg:mx-0 rounded-3xl px-4 sm:px-6 border py-3 sm:py-4 items-center gap-3 bg-gradient-to-r from-blue-400 to-light-green-300"
              >
                <div>
                  <h1 className="text-yellow-500 flex items-center">
                    <FaRupeeSign />
                    <span className="text-md lg:text-lg font-bold text-nowrap">
                      {voucher.text}
                    </span>
                  </h1>
                  <p className="text-xs text-white sm:text-sm lg:text-xl">
                    {voucher.brands}
                  </p>
                </div>
                <div>
                  <img
                    src={voucher.image}
                    className="w-14 sm:w-16 lg:w-24"
                    alt="Gift"
                  />
                </div>
              </div>
            ))}
          </div>

          <section id="faq" className="py-8 md:py-12 lg:py-16 text-white">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-xl lg:text-3xl text-center font-semibold mb-6 md:mb-8 lg:mb-10">
                FAQs
              </h2>
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="mb-6 border-b border-gray-300 flex flex-col justify-center py-4 px-5 rounded-lg"
                >
                  <h3
                    className={`text-lg lg:text-xl flex justify-between items-center font-semibold cursor-pointer transition-colors duration-300`}
                    onClick={() => toggleAnswer(index)}
                  >
                    {index + 1}. {faq.question}{" "}
                    <span>
                      {expandedIndex === index ? <TiMinus /> : <TiPlus />}
                    </span>
                  </h3>
                  <ul
                    className={`${
                      expandedIndex === index
                        ? "h-max mt-5"
                        : "h-0 overflow-hidden"
                    } list-disc pl-6 space-y-2 duration-500`}
                  >
                    {faq.answers.map((answer, i) => (
                      <li key={i} className="text-sm lg:text-md">
                        {answer}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
