// import Layout from "./Layout";
"use client"
import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

const Page = () => {
  const [faqindex,setfaqindex]=useState()
  
  const features = [
    {
      icon: "/Images/drag.webp",
      title: "Effortless Methods",
      description:
        "The platform makes bookings and maintains payment history easy and convenient.",
    },
    {
      icon: "/Images/flight-information.webp",
      title: "Simple Adjustments",
      description: "Modifications are simple to make after booking.",
    },
    {
      icon: "/Images/insurance.webp",
      title: "Modest Policies",
      description:
        "Easy and flexible cancellation procedures are available for your trip reservations",
    },
  ];

  const facilitiesData = [
    {
      title: "Sign Up as a Partner",
      description:
        "Register with us easily through our Partner Portal. Get access to your own business dashboard and start exploring exclusive partner features.",
    },
    {
      title: "Customize Your Travel Offerings ",
      description:
      "From corporate travel to individual leisure bookings, customize your services based on the needs of your clients, offering personalized travel itineraries, packages, and special deals.",
    },
    {
      title: "Expand Your Reach with ApkaTrip’s Global Inventory",
      description:
        "Gain access to hundreds of airlines, hotel chains, and activity providers worldwide. With real-time availability and competitive prices, your clients will be able to book with confidence.",
    },
    {
      title: "Earn with Every Booking",
      description:
        "Every booking made through your platform earns you commission. Our performance-driven model ensures that you get paid quickly and efficiently.",
    },
  ];

  
  const getTodayYear = new Date().getFullYear(); // Get the current year
  const startYear = 2019; // The year you started the business
  const yearsInBusiness = getTodayYear - startYear;
  const FAQ=[{que:"Cutting-edge Technology:",ans:"Our platform integrates the latest technologies to streamline bookings, optimize travel management, and enhance customer experiences. From AI-driven recommendations to real-time booking systems, we provide our partners with robust tools to stay ahead of the competition."},
    {que:"Diverse Travel Solutions:",ans:"ApkaTrip offers a wide range of services, including flights, hotels, holiday packages, transportation and travel insurance. By partnering with us, you gain access to an extensive catalog of global travel options at competitive rates."},
    {que:"Unmatched Global Reach:",ans:"With access to a vast network of airlines, hotels, and local service providers across the globe, our platform ensures your customers enjoy unparalleled choice and convenience. Our partnerships cover every continent, ensuring you meet your clients&#39; travel needs no matter the destination."},
    {que:"Dedicated Business Support:",ans:"We believe that strong relationships drive success. ApkaTrip provides dedicated business support teams who are always ready to assist with your queries, help you optimize your offerings, and provide expert insights into market trends."},
    {que:"Commission-Based Partnership Model:",ans:"We value our business associates and offer attractive commission structures, ensuring that every successful referral or booking brings mutual success. Whether you’re a travel agency, a corporate partner, or a freelance agent, our transparent commission model is designed for long-term growth."}
    ]
  

  return (
    <>
      <div className="w-full bg-[url('/Images/bg-images..webp')] bg-no-repeat bg-cover px-5 md:px-20 py-5 md:py-16 bg-center">
        <div className=" text-center py-5">
          <h1 className="text-3xl md:text-4xl  lg:text-[50px] font-semibold relative leading-2 md:leading-[70px] ">
          
        
            <span className="text-blue-500 ">
            Welcome to ApkaTrip
              <span className="absolute block w-[55px] h-[5px] bg-[#1882FF] rounded-full top-[-15px] left-[8%] mx-auto"></span>
            </span>
          </h1>
          <p className="  text-base md:text-[21px] my-[10px] mb-0 md:mb-[20px]">
          Your Trusted Travel Partner
          Unlock Global Travel Solutions with ApkaTrip

          </p>
        </div>
        <div className="rounded-lg w-full ">
          <img
            src="/Images/apkatripbanner.webp"
            className="mx-auto rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-10 items-center border border-[#1882FF] rounded-[15px] bg-white mx-4 md:mx-28 px-4 md:px-10 py-4 ">
        <div className="font-bold text-blue-600 text-[70px] md:text-[130px]">{yearsInBusiness}</div>
        <div className="md:ml-8 text-center md:text-left">
          <h3 className="text-xl md:text-4xl font-bold">ApkaTrip</h3>
          <p className="mt-4 text-gray-700">
          At ApkaTrip, we specialize in providing exceptional travel services that empower
businesses to thrive. Whether you are an established travel agency, a corporate entity, or
an emerging partner in the travel industry, we offer unique collaboration opportunities to
help you serve your clients with excellence. As a leading provider of travel-related
services, ApkaTrip is committed to creating seamless, customized, and memorable travel
experiences.
          </p>
        </div>
      </div>

      <div className="block md:flex  justify-between px-5 md:px-28 py-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col w-full md:w-[36%] items-start p-4">
            <div className="sm:mr-2">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className=""
              />
            </div>
            <h3 className="text-xl py-3 font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      
    <div className="px-20 my-4">
    <p className="text-4xl font-semibold my-4">Why Partner with ApkaTrip?</p>

    {FAQ.map((item,index)=>{
            return(
<div
            className="accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-2 lg:p-4 active"
   
          >
            <button onClick={()=>{ faqindex==index?setfaqindex():setfaqindex(index)}}
              className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
              aria-controls="basic-collapse-one-with-icon"
            >
              <h5 className="text-xl">{item.que}</h5>
              <svg
                className={`w-6 h-6 text-gray-900 transition duration-500  ${faqindex==index?"hidden":"block" } accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600 origin-center`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 18V6"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 text-gray-900 transition duration-500 ${faqindex !=index?"hidden":"block" }  accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-one-with-icon"
              className="accordion-content w-full overflow-hidden pr-4"
              aria-labelledby="basic-heading-one"
              // style="max-height: 250px;"
            >
              <p className={`text-base text-gray-900 font-normal leading-6 ${faqindex==index?"":"hidden"}`}>
              {item.ans}
              </p>
            </div>
          </div>
            )
          })}

    </div>

      <div className="block md:flex ">
        <div className="bnrfly w-full">
          <img
            src="/Images/soft-img.webp"
            alt="Facilities"
         
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-[#011d38] p-8 md:p-20 w-full ">
          <h4 className="text-xl md:text-4xl text-white font-bold">
          How It
            <span className="text-blue-600">  Works</span>
          </h4>
          <div className=" mt-5"> 
            {facilitiesData.map((facility, index) => (
              <div key={index} className="flex gap-4 mt-5">
                <div className="">
                  <FaRegCheckCircle className="text-white text-2xl mt-1" />
                </div>
                <div className="text-white">
                  <div className="text-sm  md:text-xl font-semibold">{facility.title}</div>
                  <p className="text-white">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section class="bg-[#3993EE] text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold">Our Commitment to Excellence</h1>
            <p class="mt-4 text-lg max-w-2xl mx-auto font-semibold">At ApkaTrip, our mission is simple: to empower travel businesses and associates by offering innovative tools, superior customer service, and global travel solutions. Partnering with us means joining a network of dedicated professionals committed to making every journey seamless, safe, and memorable.</p>
        </div>
    </section>


    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-semibold text-[#3993EE]">Partner Testimonials</h2>
            <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
                    <blockquote class="italic text-lg text-gray-700">"ApkaTrip has transformed how we manage travel for our clients. Their platform is user-friendly, and the team is always there to support us. The level of customization we can offer is unparalleled!"</blockquote>
                    <p class="mt-4 font-semibold text-gray-900">– Nina S., Travel Agency Owner</p>
                </div>
                <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
                    <blockquote class="italic text-lg text-gray-700">"We’ve seen a noticeable uptick in client satisfaction and revenue since partnering with ApkaTrip. Their wide range of services makes it easy for us to offer tailored travel solutions at competitive rates."</blockquote>
                    <p class="mt-4 font-semibold text-gray-900">– David L., Corporate Travel Manager</p>
                </div>
            </div>
        </div>
    </section>


    <section class="bg-[#3993EE] text-white py-16">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-semibold">Become a Business Associate Today!</h2>
            <p class="mt-4 text-lg max-w-2xl mx-auto">Ready to elevate your travel business? Join ApkaTrip today and unlock a world of possibilities for your business. Whether you're a small travel agency or a large enterprise, our platform is designed to scale with your growth.</p>
            <div class="mt-8">
                <a href="#get-started" class="bg-yellow-500 text-[#3993EE] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300">Join Now</a>
                <a href="#contact-us" class="ml-4 bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3993EE] transition duration-300">Contact Us</a>
            </div>
        </div>
    </section>

  
    <section class="py-16 bg-gray-100" id="get-started">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-semibold text-[#3993EE]">About ApkaTrip</h2>
            <p class="mt-4 text-lg max-w-3xl mx-auto">ApkaTrip is a global leader in the travel industry, offering a comprehensive range of services from flight bookings and hotel accommodations to curated holiday packages and more. With an unwavering commitment to quality, we’re here to ensure that travel experiences are accessible, affordable, and stress-free for people around the world.</p>
            <div class="mt-12">
                <h3 class="text-xl font-semibold text-gray-800">Headquarters:</h3>
                <p class="mt-2 text-lg text-gray-700">SCO Sector 34A, Chandigarh, India</p>
                <p class="mt-2 text-lg text-gray-700">Phone: 919877579319</p>
                <p class="mt-2 text-lg text-gray-700">Email: <a href="mailto:Info@apkatrip.com" class="text-blue-500 hover:text-[#3993EE]">Info@apkatrip.com</a></p>
            </div>
        </div>
    </section>

  
    <section class="py-16 bg-[#3993EE] text-white" id="contact-us">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-semibold">Connect with Us</h2>
            <p class="mt-4 text-lg">Stay updated with our latest offerings, business tips, and industry news by following us on social media.</p>
            <div class="mt-8 flex justify-center gap-6">
                <a href="#" class="text-white hover:text-blue-300 text-3xl"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="text-white hover:text-blue-300 text-3xl"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-white hover:text-blue-300 text-3xl"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="text-white hover:text-blue-300 text-3xl"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </section>
      <div className="px-5 md:px-28 py-16">
        <h4 className="text-xl md:text-3xl font-bold mb-4">
          What Makes Us The <span className="text-blue-500">Best Choice?</span>
        </h4>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/offer.webp"
                alt="Best commission structure"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">
              Best commission structure
            </div>
            <p>on all transactions and bookings</p>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/training.webp"
                alt="Live training"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">Live training</div>
            <p>and assistance on products</p>
          </div>
          <div className="flex flex-col text-center items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/megaphone.webp"
                alt="Regular Marketing"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">Regular Marketing</div>
            <p>and credit support to scale up your business</p>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/help-desk.webp"
                alt="24*7 Dedicated Support Center"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">
              24*7 Dedicated Support Center
            </div>
            <p>for resolving your query</p>
          </div>
          <div className="flex flex-col text-center items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/suitcase.webp"
                alt="Wide Range of Offerings"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">
              Wide Range of Offerings
            </div>
            <p>Including Flights, Cabs, Trains, Hotels, Cruises</p>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="sm:mb-2">
              <Image
                src="/Images/group.webp"
                alt="Lead Generation"
                width={60}
                height={60}
              />
            </div>
            <div className="text-lg py-1 font-semibold">Lead Generation</div>
            <p>for your market segment</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[url('/Images/landing-page-bg-1..webp')] w-full bg-no-repeat bg-cover px-5 md:px-20 py-5 md:py-16 bg-center">
        <div className="text-center">
          <h2 className="text-2xl text-white font-semibold leading-snug">
          Begin now to elevate your business to new heights by becoming an 

            <span className="text-blue-600"> Apka Trip partner.</span>
          </h2>
          <a
            href="/login" 
            className="mt-4 inline-block bg-blue-500 rounded-full text-white font-bold py-2 px-4  hover:bg-blue-600 transition duration-300"
          >
            Sign In / Sign Up
          </a>
        </div>
      </div>
    
    </>
  );
};

export default Page;
