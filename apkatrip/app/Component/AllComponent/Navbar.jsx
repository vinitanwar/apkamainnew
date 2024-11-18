"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import {useTranslations} from 'next-intl';

const Navbar = () => {
  const t = useTranslations('Navbar');

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window?.innerWidth < 768 : ""
  );

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== "undefined" ? window.innerWidth < 768 : "");
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showMore, setShowMore] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };
  const icons = [
    {
      name: t("flight"),
      className: "meuicowidth flightmenuico",
      class: "flight-icon",
      link: "/flight",
    },
    {
      name: t("hotels"),
      className: "meuicowidth hotelmenuico",
      class: "hotel-icon",
      link: "/hotels",
    },
    {
      name: t("flightHotel"),
      className: "meuicowidth fphmenuico",
      class: "fph-icon",
      link: "/flight+hotels",
    },
    {
      name: t("trains"),
      className: "meuicowidth trainmenuico",
      class: "trains-icon",
      link: "/train",
    },
    {
      name: t("bus"),
      className: "meuicowidth busmenuico",
      class: "buses-icon",
      link: "/buses",
    },
    {
      name: t("holidays"),
      className: "meuicowidth holidaymenuico",
      class: "holiday-icon",
      link: "/holidayspackage",
    },
    {
      name: t("cabs"),
      className: "meuicowidth cabmenuico",
      class: "cab-icon",
      link: "/cabs",
    },
    {
      name: t("activities"),
      className: "meuicowidth actvitymenuico",
      class: "activity-icon",
      link: "/activities",
    },
  ];
  

  return (
    <>
      {" "}
      <div className=" mt-0 lg:mt-2 mb-5 block md:hidden">
        <Slider {...settings}>
          <div>
            <img
              src="/Images/azadi-sale-29jul-mob-strip2.webp"
              alt=""
              className="w-full"
            />
          </div>
          <div>
            <img src="/Images/banner2.webp" alt="" className="w-full" />
          </div>
          <div>
            <img
              src="/Images/apka trip banner 4.webp"
              alt=""
              className="w-full"
            />
          </div>
          <div>
            <img
              src="/Images/apka trip banner 3.webp"
              alt=""
              className="w-full"
            />
          </div>
        </Slider>
      </div>



      <nav className="bg-white  py-1 px-0 md:px-5    flex justify-between gap-2 transition-all duration-100 mb-3 md:mb-0">
        {isMobile ? (
          <>
            <div
              className={`container relative grid grid-cols-3 custom-nav mx-2  px-2  transition-all duration-100  items-center `}
            >
              {icons.slice(0, showMore ? undefined : 6).map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  onClick={() => setActiveLink(item.link)}
                  className={`block items-center  w-[100px] m-1 lg:w-auto  space-x-2 py-2 px-0 text-center lg:px-4 rounded-md transition-colors duration-300   ${
                    activeLink === item.link
                      ? "bg-[#ECF5FE] text-white"
                      : "hover:bg-[#ECF5FE] hover:text-white"
                  }`}
                >
                  {isMobile ? (
                    <div
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className={`w-6 h-6 ${item.class}`}
                      style={index === 0 ? { transform: "rotate(312deg)" } : {}}
                    />
                  ) : (
                    <div
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className={`w-6 h-6 ${item.className}`}
                      style={index === 0 ? { transform: "rotate(312deg)" } : {}}
                    />
                  )}
                  <span className="text-black font-semibold text-sm">
                    {item.name}
                  </span>
                </Link>
              ))}
              {icons.length > 3 && (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="rdboxes"
                >
                  <div className="arwbounce">
                    {" "}
                    {showMore ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div
              className={`container relative  custom-nav  flex  transition-all duration-100 items-center `}
            >
              {icons.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  onClick={() => setActiveLink(item.link)}
                  className={`block md:flex justify-center flex-wrap min-lg:flex-col lg:flex-row md:flex-col   items-center gap-1 py-2 px-0 text-center lg:px-3 rounded-md hover:bg-[#ECF5FE] hover:text-white transition-colors duration-300 ${
                    activeLink === item.link
                      ? "bg-[#ECF5FE] text-white"
                      : "hover:bg-[#ECF5FE] hover:text-white"
                  }`}
                >
                  {isMobile ? (
                    <div
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className={`w-6 h-6 ${item.class}`}
                      style={index === 0 ? { transform: "rotate(312deg)" } : {}}
                    />
                  ) : (
                    <div
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className={`w-10 h-10 ${item.className}`}
                      style={index === 0 ? { transform: "rotate(312deg)" } : {}}
                    />
                  )}
                  <span className="text-black font-semibold text-sm">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
