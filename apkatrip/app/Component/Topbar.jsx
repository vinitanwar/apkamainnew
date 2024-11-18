"use client";

import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaEnvelope,
  FaEyeDropper,
  FaTimes,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./AllComponent/Navbar";
import Cookies from 'js-cookie';


const Topbar = () => {

  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  const [selectedLang, setSelectedLang] = useState('en');

  useEffect(() => {
    // Set the initial state from cookies (if available)
    const localeFromCookie = Cookies.get('locale');
    if (localeFromCookie) setSelectedLang(localeFromCookie);
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLang(newLang);
    Cookies.set('locale', newLang); // Save the selected language in cookies
    // router.reload(); // Reload to apply the new locale
    router.refresh();
  };



  const openNav3 = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const [showPopup, setShowPopup] = useState(null);
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const dummyNotifications = [
    "You have a new message.",
    "Your booking is confirmed.",
    "Your flight has been delayed.",
  ];

  const togglePopup = (id) => {
    if (showPopup === id) {
      setShowPopup(null);
    } else {
      setShowPopup(id);
      setHasNewNotification(false);
    }
  };
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div className="bg-white border-b py-2   relative md:sticky top-0 navbar-main lg:py-0 border-blue-100 px-4  md:px-8 lg:px-16 xl:px-20">
      <div className="container mx-auto flex  flex-row justify-between items-center">
        <div className="flex gap-2 items-center space-x-2">
          <div
            className="flex   lg:hidden flex-col  justify-center cursor-pointer"
            onClick={openNav3}
          >
            <div className="w-6 h-[3px] bg-gray-800 mb-1"></div>
            <div className="w-5 h-[2px] bg-gray-800 mb-1"></div>
            <div className="w-4 h-[2px] bg-gray-800"></div>
          </div>
          <Link href="/">
            <img src="/Images/newlogo.png" alt="" className="h-10 md:h-[40px]" />
          </Link>
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block justify-between items-center p-3  ">
          <div className="flex items-center space-x-2">
            <div
              className="relative hidden md:block "
              onMouseEnter={() => handleMouseEnter("support")}
            >
              <button className="flex items-center ">
                <div className="supportusrico meuicowidth bg-gray-600 p-2 rounded-full"></div>
                <FaChevronDown />
              </button>
              {openDropdown === "support" && (
                <div
                  className="absolute w-72 z-[999] top-full right-0 mt-2 bg-white text-black rounded-lg shadow-two"
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center  border-b p-3">
                    <span className="menuropos callsupport-roico w-10 h-10 rounded-lg"></span>
                    <Link href="tel:9877579319" className="">
                      <span className="font-semibold text-xs">
                        Call Support
                      </span>
                      <span className="block text-sm font-semibold text-blue-600">
                        Tel : 9877579319
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center p-3">
                    <span className="callsupport-roico mailsupport-roico w-10 h-10 bg-[#f9f8fa] rounded-lg"></span>
                    <Link href="mailto:care@apkatrip.com" className="">
                      <span className="font-semibold text-xs">
                        Mail Support
                      </span>
                      <span className="block text-sm font-semibold text-blue-600">
                        Care@apkatrip.com
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative flex gap-3"
              onMouseEnter={() => handleMouseEnter("langSelect")}
            >
              <button className="flex items-center space-x-1">
                <img src="/Images/flag_IN.svg" width="18" alt="" />
                <span>India</span>
                <FaChevronDown />
              </button>
              {openDropdown === "langSelect" && (
                <div
                  className="absolute w-72 z-[999] p-2 top-full right-0 mt-2 bg-white text-black rounded-lg shadow-two"
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-semibold text-xs">Choose Country</p>
                      <div className="flex flex-col mt-2 space-y-2">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            console.log("SetCountryCode('IN','India')")
                          }
                        >
                          <img src="/Images/flag_INR.svg" width="18" alt="" />
                          <span className="ml-2 font-semibold text-sm">
                            India
                          </span>
                        </div>
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            console.log("SetCountryCode('AE','UAE')")
                          }
                        >
                          <img src="/Images/flag_AED.svg" width="18" alt="" />
                          <span className="ml-2 font-semibold text-sm">
                            UAE
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <p className="font-semibold text-xs">Choose Currency</p>
                      <div className="mt-2">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center cursor-pointer">
                            <span className="ml-2 font-semibold text-sm">
                              INR
                            </span>
                          </div>
                          <div className="flex items-center cursor-pointer">
                            <span className="ml-2 font-semibold text-sm">
                              AED
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 border-t border-gray-200">
      <p className="font-semibold text-xs mt-2">Choose Language</p>
      <div className="mt-2 h-16 overflow-hidden overflow-y-auto grid grid-cols-3 gap-1 justify-between">
        {['en', 'hi', 'bn', 'ar', 'pa', 'gu',"ru", "sp","fr",'ta'].map((langCode) => (
          <label
            key={langCode}
            className="border flex items-center px-2 py-1 cursor-pointer"
          >
            <input
              type="radio"
              name="optLang"
              value={langCode}
              checked={selectedLang === langCode}
              onChange={handleLanguageChange}
              className="mr-2"
            />
            <span className="font-semibold text-xs">
              {langCode === 'en'
                ? 'English'
                : langCode === 'hi'
                ? 'Hindi'
                : langCode === 'bn'
                ? 'Bengali'
                : langCode === 'ar'
                ? 'Arabic'
                : langCode === 'pa'
                ? 'Punjabi'
                : langCode === 'gu'
                ? 'Gujarati'
                 : langCode === 'sp'
                ? 'Spanish'
                 : langCode === 'fr'
                ? 'French'
                 : langCode === 'ru'
                ? 'Russian'
                : 'Tamil'
                
                
                }
            </span>
          </label>
        ))}
      </div>
    </div>

                </div>
              )}
            </div>
            <div>
              <div
                className="md:hidden relative top-[4px] flex ml-5"
                onClick={() => togglePopup(2)} // Toggle popup with ID 2
              >
                {hasNewNotification && (
                  <p className="w-2 h-2 bg-[#E91E63] rounded-full absolute top-0 right-0"></p>
                )}
                <span className="notibellico w-4 h-6 bg-cover bg-no-repeat"></span>
              </div>

              {showPopup === 2 && (
                <div className="fixed top-0 -right-2 w-80 z-[9999] h-full bg-[#effbff] transform translate-x-0 transition-transform duration-500">
                  <button
                    onClick={() => togglePopup(2)} // Close popup
                    className="absolute top-[20px] right-[25px] text-black"
                  >
                    <FaTimes />
                  </button>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">
                      Notifications
                    </h2>
                    {dummyNotifications.length > 0 ? (
                      <ul>
                        {dummyNotifications.map((notification, index) => (
                          <li
                            key={index}
                            className="p-2 mb-2 bg-gradient-to-b from-white via-[#fafdff] to-[#fafdff]"
                          >
                            {notification}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No new notifications.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className=" md:flex items-center justify-center space-x-4 mt-1  hidden ">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("signUp")}
            >
              <div className="bg-blue-500 text-white px-3 py-1 font-semibold rounded-full text-xs">
                Login or Signup
              </div>

              {openDropdown === "signUp" && (
                <div
                  className="absolute w-72 z-[999] top-full right-0 mt-2 bg-white text-black rounded-lg shadow-two"
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <div
                      className="flex items-center  border-b p-3"
                      onClick={() => togglePopup(1)}
                    >
                      <span
                        className="w-10 h-10 bg-[#f9f8fa] bg-center rounded-lg bg-no-repeat mr-2 custlog-roico"
                        style={{ backgroundSize: "100%" }}
                      ></span>
                      <div>
                        <span className="font-semibold text-xs">
                          Customer Login
                        </span>
                        <span className="block text-sm font-semibold">
                          Login & check bookings
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/admin-login"
                    className="flex items-center  border-b p-3"
                  >
                    <span
                      className="w-10 h-10 bg-[#f9f8fa] bg-center rounded-lg bg-no-repeat mr-2 corplog-roico"
                      style={{ backgroundSize: "100%" }}
                    ></span>
                    <div>
                      <span className="font-semibold text-xs">Admin Login</span>
                      <span className="block text-sm font-semibold">
                        Login your admin account
                      </span>
                    </div>
                  </Link>

                  <Link href="/profile" className="flex items-center p-3">
                    <span
                      className="w-10 h-10 bg-[#f9f8fa] bg-center rounded-lg bg-no-repeat mr-2 mybooking-roico"
                      style={{ backgroundSize: "100%" }}
                    ></span>
                    <div>
                      <span className="font-semibold text-xs">My Booking</span>
                      <span className="block text-sm font-semibold">
                        Manage your bookings here
                      </span>
                    </div>
                  </Link>
                </div>
              )}
              {showPopup === 1 ? (
                <div className="fixed inset-0 flex z-[9999] items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full">
                    <div className="flex items-center mb-4 justify-between">
                      <h2 className="text-lg font-bold">
                        {activeTab === "signup" ? "Sign Up" : "Login"}
                      </h2>
                      <button className="text-sm" onClick={togglePopup}>
                        <FaTimes />
                      </button>
                    </div>
                    <div className="mb-4">
                      <div className="flex border-b">
                        <button
                          className={`w-1/2 py-2 text-sm font-semibold ${
                            activeTab === "signup"
                              ? "border-b-2 border-blue-500"
                              : ""
                          }`}
                          onClick={() => setActiveTab("signup")}
                        >
                          Sign Up
                        </button>
                        <button
                          className={`w-1/2 py-2 text-sm font-semibold ${
                            activeTab === "login"
                              ? "border-b-2 border-blue-500"
                              : ""
                          }`}
                          onClick={() => setActiveTab("login")}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                    <form>
                      {activeTab === "signup" ? (
                        <>
                          <div className="mb-4 ">
                            <label className="block text-sm relative font-semibold mb-2">
                              Email
                              <FaEnvelope className="absolute right-3 top-10" />
                            </label>
                            <input
                              type="email"
                              className="w-full p-2 border rounded-md"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-semibold relative mb-2">
                              Password
                              <FaEyeDropper className="absolute right-3 top-10" />
                            </label>
                            <input
                              type="password"
                              className="w-full p-2 border rounded-md"
                              placeholder="Enter your password"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md"
                          >
                            Sign Up
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="mb-4">
                            <label className="block text-sm font-semibold relative mb-2">
                              Email
                              <FaEnvelope className="absolute right-3 top-10" />
                            </label>
                            <input
                              type="email"
                              className="w-full p-2 border rounded-md"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-semibold relative mb-2">
                              Password
                              <FaEyeDropper className="absolute right-3 top-10" />
                            </label>
                            <input
                              type="password"
                              className="w-full p-2 border rounded-md"
                              placeholder="Enter your password"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md"
                          >
                            Login
                          </button>
                        </>
                      )}
                    </form>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Topbar;
