"use client";
import React, { useState } from "react";
import Header from "../Component/AllComponent/Header";
import CustomSlider from "../Component/AllComponent/Slider";
import FAQSection from "../Component/AllComponent/FAQ";
import Link from "next/link";
import MobileHeader from "../Component/AllComponent/MobileHeader";
import { useTranslations } from "next-intl";

const page = () => {
  const t=useTranslations("flight")
  const [city, setCity] = useState("DEL-Delhi, India");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const [selectedMonth, setSelectedMonth] = useState(0);

  // Sample data
  const deals = [
    [
      {
        destination: "Mumbai",
        date: "Thursday 15 Aug 2024",
        airline: "Indigo",
        price: 5478,
      },
      {
        destination: "Bangalore",
        date: "Sunday 25 Aug 2024",
        airline: "Indigo",
        price: 5020,
      },
      {
        destination: "GOA",
        date: "Wednesday 28 Aug 2024",
        airline: "Indigo",
        price: 6262,
      },
      {
        destination: "Pune",
        date: "Friday 16 Aug 2024",
        airline: "Indigo",
        price: 5891,
      },
      {
        destination: "Ahmedabad",
        date: "Saturday 31 Aug 2024",
        airline: "Indigo",
        price: 6751,
      },
      {
        destination: "Lucknow",
        date: "Wednesday 28 Aug 2024",
        airline: "Indigo",
        price: 4716,
      },
    ],
    [
      {
        destination: "Mumbai",
        date: "Thursday 15 Sep 2024",
        airline: "Indigo",
        price: 5478,
      },
      {
        destination: "Bangalore",
        date: "Sunday 25 Sep 2024",
        airline: "Indigo",
        price: 5020,
      },
      {
        destination: "GOA",
        date: "Wednesday 28 Sep 2024",
        airline: "Indigo",
        price: 6262,
      },
      {
        destination: "Pune",
        date: "Friday 16 Sep 2024",
        airline: "Indigo",
        price: 5891,
      },
      {
        destination: "Ahmedabad",
        date: "Saturday 31 Sep 2024",
        airline: "Indigo",
        price: 6751,
      },
      {
        destination: "Lucknow",
        date: "Wednesday 28 Sep 2024",
        airline: "Indigo",
        price: 4716,
      },
    ],
    [
      {
        destination: "Mumbai",
        date: "Thursday 15 Oct 2024",
        airline: "Indigo",
        price: 5478,
      },
      {
        destination: "Bangalore",
        date: "Sunday 25 Oct 2024",
        airline: "Indigo",
        price: 5020,
      },
      {
        destination: "GOA",
        date: "Wednesday 28 Oct 2024",
        airline: "Indigo",
        price: 6262,
      },
      {
        destination: "Pune",
        date: "Friday 16 Oct 2024",
        airline: "Indigo",
        price: 5891,
      },
      {
        destination: "Ahmedabad",
        date: "Saturday 31 Oct 2024",
        airline: "Indigo",
        price: 6751,
      },
      {
        destination: "Lucknow",
        date: "Wednesday 28 Oct 2024",
        airline: "Indigo",
        price: 4716,
      },
    ],
  ];

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const renderDeals = (monthIndex) => {
    return deals[monthIndex].map((deal, index) => (
      <li
        key={index}
        className="flex items-center justify-between p-4 border-b last:border-b-0"
      >
        <div className="flex-1">
          <p className="text-black text-sm lg:text-lg font-bold">
            To {deal.destination}
          </p>
          <p className="text-gray-500 text-sm lg:text-lg">
            {deal.date} | {deal.airline}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-gray-700 text-xs lg:text-lg ">
            One way as low as{" "}
            <strong className="text-orange-600  text-center font-bold">{`₹${deal.price}`}</strong>
          </p>
        </div>
        <div>
          <Link
            href="/flightSearch"
            onClick={() => handleFlightSearch(deal)}
            className="bg-blue-500 text-white font-semibold text-xs lg:text-lg py-2 px-2 lg:px-4 rounded-full hover:bg-blue-600"
          >
            Book now
          </Link>
        </div>
      </li>
    ));
  };

  const handleFlightSearch = (deal) => {
    // console.log("Searching for flight:", deal);
  };
  return (
    <>
      <Header />
      <MobileHeader />
      <CustomSlider />

      <div className="">
        <h2 className="text-lg lg:text-3xl mb-1 lg:mb-0 font-bold text-black text-center py-0 lg:py-5">
          Best Deals on Flight Tickets
        </h2>

        <div className="">
          <div className="flex justify-between bg-gray-100 px-5 lg:px-40 py-5">
            <div className="">
              <div className="text-gray-700 mb-2">Departing from</div>
              <div className="relative w-32 lg:w-52">
                <select
                  className="block w-full bg-white border text-xs lg:text-base border-gray-300 rounded-lg py-2 px-3 text-gray-700"
                  value={city}
                  onChange={handleCityChange}
                >
                  <option value="">Select</option>
                  <option value="DEL-Delhi, India">Delhi (DEL)</option>
                  <option value="BOM-Mumbai, India">Mumbai (BOM)</option>
                  <option value="BLR-Bengaluru, India">Bengaluru (BLR)</option>
                  <option value="HYD-Hyderabad, India">Hyderabad (HYD)</option>
                  <option value="CCU-Kolkata, India">Kolkata (CCU)</option>
                  <option value="MAA-Chennai, India">Chennai (MAA)</option>
                  <option value="GOI-Goa, India">GOA (GOI)</option>
                  <option value="PNQ-Pune, India">Pune (PNQ)</option>
                  <option value="AMD-Ahmedabad, India">Ahmedabad (AMD)</option>
                  <option value="GAU-Guwahati, India">Guwahati (GAU)</option>
                </select>
              </div>
            </div>

            <div className="">
              <div className="text-gray-700 mb-2">Travel Period</div>
              <div className="flex border rounded  text-sm lg:text-base border-black">
                {[0, 1, 2].map((monthIndex) => (
                  <button
                    key={monthIndex}
                    onClick={() => handleMonthChange(monthIndex)}
                    className={`py-1 px-4 border-r border-black ${
                      selectedMonth === monthIndex
                        ? "bg-black text-white  rounded-none"
                        : ""
                    }`}
                  >
                    {["Aug", "Sep", "Oct"][monthIndex]}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <ul className="px-0 list-none lg:px-20">
            {renderDeals(selectedMonth)}
          </ul>
        </div>
      </div>

      <div className="px-5 lg:px-20 py-5 lg:py-10">
        <h6 className="text-lg lg:text-xl font-semibold">
          {t("memorable")}
        </h6>
        <p className="mt-5 text-justify">
         {t("memorable_1")}
        </p>
        <p className="mt-5  text-justify">
      {t("memorable_2")}
        </p>
      </div>

      <FAQSection />
    </>
  );
};

export default page;
