"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaWifi } from "react-icons/fa";
import Image from "next/image";
import { FaArrowRight, FaClock } from "react-icons/fa6";

const page = () => {
  // data/tripOverview.js
  const tripOverview = {
    trainDetails: "Snsi Kalka Exp - 22455 | Sleeper Class",
    stations: [
      {
        name: "Sainagar Shirdi",
        city: "Shirdi",
        platform: "2",
        dateTime: "3 Dec | 10:00",
      },
      {
        name: "Kalka",
        city: "Kalka",
        platform: "2",
        dateTime: "4 Dec | 12:10",
      },
    ],
    duration: "26hr 10min",
    wifiLink: "#",
    wifiStation: "Sainagar Shirdi",
  };

  // data/travellers.js
  const travellers = [
    {
      sNo: 1,
      bookingStatus: "S2 ,58",
      currentStatus: "S2 ,58",
      coach: "NA",
      berth: "Middle",
      confirmationChances: "NA",
    },
    {
      sNo: 2,
      bookingStatus: "S2 ,59",
      currentStatus: "S2 ,59",
      coach: "NA",
      berth: "Upper",
      confirmationChances: "NA",
    },
    {
      sNo: 3,
      bookingStatus: "S2 ,59",
      currentStatus: "S2 ,59",
      coach: "NA",
      berth: "Upper",
      confirmationChances: "NA",
    },
    {
      sNo: 4,
      bookingStatus: "S2 ,59",
      currentStatus: "S2 ,59",
      coach: "NA",
      berth: "Upper",
      confirmationChances: "NA",
    },
    {
      sNo: 5,
      bookingStatus: "S2 ,59",
      currentStatus: "S2 ,59",
      coach: "NA",
      berth: "Upper",
      confirmationChances: "NA",
    },
    // Add more traveller data as needed
  ];
  // data/fareDetails.js
  const fareDetails = {
    fareCharges: 4170,
    cancellationCharges: 360,
    refundPolicy: "No Refund is applicable after 03 Dec, 09:30 am",
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStation, setSelectedStation] = useState("");

  const stations = [
    "Sainagar Shirdi",
    "Manmad Jn",
    "Bhusaval Jn",
    "Khandwa",
    "Itarsi Jn",
    "Bhopal Jn",
    "V Lakshmibai Jhansi Jhs",
    "Gwalior",
    "Agra Cantt",
    "Mathura Jn",
    "H Nizamuddin",
    "New Delhi",
    "Panipat Jn",
    "Ambala Cant Jn",
    "Chandigarh",
    "Kalka",
  ];

  const handleSelect = (station) => {
    setSelectedStation(station);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="relative pt-6 lg:pt-0">
        <div className="relative h-60 custom-color"></div>

        <div className="absolute bottom-10 left-0 right-0 text-center pb-6">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            PNR Status
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
                className="ml-2 w-full flex-grow border-none p-2 rounded-lg placeholder-gray-500"
                placeholder="Enter your 10 digit PNR number"
              />
            </div>
            <button
              className="ml-2 primary-col text-white px-8 py-2 h-14  rounded-full hover:bg-[#ef6414ed]"
              type="button"
              // onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-[#f2f2f2] px-5 md:px-24 py-10">
        <ol className="hidden md:flex space-x-2 text-sm text-gray-500">
          <li className="flex items-center">
            <Link
              href="/"
              className="breadcrumb-item text-blue-500 hover:underline"
            >
              Home
            </Link>
            <span className="mx-2">››</span>
          </li>
          <li className="flex items-center">
            <span className="nolink-text text-gray-700">
              PNR Status Enquiry
            </span>
          </li>
        </ol>

        <section className="">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Why Check PNR Status with Apka Trip?
          </h2>

          <div className="flex items-center justify-center mb-6">
            <img
              src="/Images/IRTC.webp"
              alt="Official IRCTC Partner for train ticket booking"
              width="50"
              height="50"
              className="mr-4"
            />
            <h4 className="text-lg font-semibold">IRCTC Authorised Partner</h4>
          </div>

          <div className="block md:flex gap-8">
            <div className="text-center">
              <img
                src="/Images/ticket.webp"
                alt="Railway ticket check"
                width="50"
                height="50"
                className="mx-auto"
              />
              <div>
                <h4 className="text-lg font-bold my-3">
                  PNR Status Indian Railways
                </h4>
                <p className="text-sm">
                  Using PNR status 10 digit, you can check the latest PNR status
                  with ease on Apka Trip or use the PNR Prediction feature and
                  avoid getting waitlisted.
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/Images/services.webp"
                alt="24x7 Customer Support for train booking"
                width="50"
                height="50"
                className="mx-auto"
              />
              <div>
                <h4 className="text-lg font-bold my-3">
                  24x7 Support for Ticket Booking
                </h4>
                <p className="text-sm">
                  Whatever your questions may be, Apka Trip will provide 24x7
                  assistance. You can reach out to the Customer Support team by
                  clicking on the 'Contact Us' section on the Apka Trip Trains
                  app.
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/Images/cancelled.webp"
                alt="Hassle-Free Cancellation on Train tickets"
                width="50"
                height="50"
                className="mx-auto"
              />
              <div>
                <h4 className="text-lg font-bold my-3">
                  Free Cancellation on Train Tickets
                </h4>
                <p className="text-sm">
                  Unsure of your travel plans? Opt for Assured Flex by paying a
                  nominal fee and modify your train bookings without any hassle!
                  Get an instant full train fare refund after cancellation with
                  Assured Flex.
                </p>
              </div>
            </div>

            <div className="text-center">
              <img
                src="/Images/mobile-app.webp"
                alt="Live running status"
                width="50"
                height="50"
                className="mx-auto"
              />
              <div>
                <h4 className="text-lg font-bold my-3">
                  Check Live Train Running Status
                </h4>
                <p className="text-sm">
                  Is your train running late? Check the live status of your
                  train on the Apka Trip app or website. You can also see the
                  train route, coach position, and the expected delays along the
                  way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="py-10 px-5 md:px-28">
        <div className="block md:flex gap-10 ">
          <div className="w-3/4">
            <div className="info-section">
              <h2 className="text-2xl font-semibold mb-2">Trip Overview</h2>
              <p className="text-lg mb-4">{tripOverview.trainDetails}</p>
              <div className="flex justify-start items-center relative mb-4">
                {tripOverview.stations.map((station, index) => (
                  <div key={index} className="flex-1">
                    <div className="text-2xl font-bold text-[#00000061]">
                      {station.name}
                    </div>
                    <div className="text-3xl  font-semibold my-3">
                      {station.city}
                    </div>

                    <div className="text-lg text-[#00000061]">
                      Expected Platform: {station.platform}
                    </div>
                    <div className="text-lg text-gray-600">
                      {station.dateTime}
                    </div>
                  </div>
                ))}
                <div className="text-center absolute left-60">
                  <FaArrowRight className="text-6xl mx-auto text-blue-600" />

                  <span className="text-lg text-gray-400">
                    {tripOverview.duration}
                  </span>
                </div>
              </div>
              <div className="my-4  text-md font-semibold  text-gray-600">
                <Link href={tripOverview.wifiLink} className=" flex gap-1">
                  <FaWifi className="text-xl" />{" "}
                  <span className="text-blue-600 uppercase"> Free WiFi</span>{" "}
                  available at {tripOverview.wifiStation}
                </Link>{" "}
              </div>
            </div>

            <div className="info-section mt-10 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Traveller Info</h2>
              <table className="min-w-full text-center text-sm  border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className=" p-3">S.No</th>
                    <th className=" p-3">Booking Status</th>
                    <th className=" p-3">Current Status</th>
                    <th className=" p-3">Coach</th>
                    <th className=" p-3">Berth</th>
                    <th className=" p-3">Confirmation Chances</th>
                  </tr>
                </thead>
                <tbody className="font-semibold">
                  {travellers.map((traveller, index) => (
                    <tr key={index} className="">
                      <td className=" p-4">{traveller.sNo}</td>
                      <td className=" p-4">{traveller.bookingStatus}</td>
                      <td className=" p-4 text-green-500">
                        {traveller.currentStatus}
                      </td>
                      <td className=" p-4">{traveller.coach}</td>
                      <td className=" p-4">{traveller.berth}</td>
                      <td className=" p-4">{traveller.confirmationChances}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4  text-md text-gray-600">
                Chart not prepared | Synced moments ago
              </div>
            </div>

            {/* Fare Details Section */}
            <div className=" border-y py-10 my-8">
              <h2 className="text-lg font-semibold mb-2">Fare Details</h2>
              <div className="flex gap-10 my-4">
                <div className="text-md ">
                  Fare Charges:{" "}
                  <span className="text-gray-600">
                    {fareDetails.fareCharges}
                  </span>
                </div>
                <div className="text-md ">
                  Cancellation Charges:{" "}
                  <span className="text-gray-600">
                    {fareDetails.cancellationCharges}
                  </span>
                </div>
              </div>
              <div className="text-sm">
                <h3 className="text-lg py-2">Refund/ Cancellation Policy</h3>
                <p>{fareDetails.refundPolicy}</p>
              </div>
            </div>

            <div className="disclaimer">
              <h3 className="text-lg font-bold mb-2">Disclaimer</h3>
              <ul className=" text-gray-500 list-decimal pl-4">
                <li>
                  Train timings and status are subject to change without prior
                  notice.
                </li>
                <li className="my-3">
                  Please verify them with Indian Railways before boarding. The
                  confirmation chances, cancellation charges, platform numbers,
                  and berth types are projections alone, and ixigo does not take
                  responsibility if the predictions are not accurate.
                </li>
                <li>
                  The user will get a full refund of cancellation if the train
                  is delayed by more than 3 hours, subject to the condition that
                  the cancellation is done prior to the departure time.
                </li>
              </ul>
            </div>
          </div>

          <div className="border h-max px-3 py-5 w-3/12">
            <h2 className="text-lg font-semibold mb-2">Coach Position</h2>
            <div className="text-sm border-b pb-1">16 Coaches</div>
            <div className=" relative">
              <p className="text-center py-4 text-sm ">
                {" "}
                Click on coach to view seat layout
              </p>
              <div className="relative">
                <div className="border-b pb-1 border-gray-400">
                  <input
                    type="text"
                    className="w-full cursor-pointer bg-transparent focus:outline-none"
                    value={selectedStation}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    readOnly
                    placeholder="Select Station"
                  />
                </div>
                {isDropdownOpen && (
                  <ul className="absolute bg-white border border-gray-200 mt-2 w-full max-h-40 overflow-auto z-10">
                    {stations.map((station, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelect(station)}
                      >
                        {station}
                      </li>
                    ))}
                  </ul>
                )}
                <div
                  className="absolute right-2 top-0 transform rotate-0 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  &#9662;
                </div>
              </div>

              <div className="">
                <div className="">
                  <input className="" readOnly placeholder="" type="text" />
                </div>
                <ul className="dropdown-list box list-none hidden">
                  {[
                    "Sainagar Shirdi",
                    "Manmad Jn",
                    "Bhusaval Jn",
                    "Khandwa",
                    "Itarsi Jn",
                    "Bhopal Jn",
                    "V Lakshmibai Jhansi Jhs",
                    "Gwalior",
                    "Agra Cantt",
                    "Mathura Jn",
                    "H Nizamuddin",
                    "New Delhi",
                    "Panipat Jn",
                    "Ambala Cant Jn",
                    "Chandigarh",
                    "Kalka",
                  ].map((station, index) => (
                    <li
                      key={index}
                      data-index={index}
                      className="dropdown-list-item"
                    >
                      <span>{station}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" relative">
                <div className=" h-screen overflow-hidden overflow-y-auto custom-scrollbar">
                  {[
                    { number: 0, code: "EN" },
                    { number: 1, code: "SLR" },
                    { number: 2, code: "GN" },
                    { number: 3, code: "GN" },
                    { number: 4, code: "3A" },
                    { number: 5, code: "3A" },
                    { number: 6, code: "2A" },
                    { number: 7, code: "SL" },
                    { number: 8, code: "SL" },
                    { number: 9, code: "SL" },
                    { number: 10, code: "SL" },
                    { number: 11, code: "SL" },
                    { number: 12, code: "GN" },
                    { number: 13, code: "GN" },
                    { number: 14, code: "GN" },
                    { number: 15, code: "SLR" },
                  ].map((coach) => (
                    <div className="text-center" key={coach.number}>
                      <div className="text-[#4285f4] inline-block">
                        {coach.number}
                      </div>

                      <div className="text-xs w-[54px] mx-[10px] mb-[11px] bg-[#89b2f8] rounded-md inline-block">
                        <div className="w-[38px] text-center py-[23px] bg-[#4285f4] text-white mx-auto break-words max-h-[63px]">
                          {coach.code}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-4">
              *Coach position is historic data and does not represent current
              status.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
