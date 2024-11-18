"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  const [faqindex,setfaqindex]=useState()

  const testimonialsData = [
    {
      quote:
        "ApkaTrip transformed the way we manage business travel. From booking to compliance, every aspect of corporate travel is simplified, which allows us to focus more on our core business.&quot;",
      name: "Emily D., Head of Finance, TechForward Solutions",
      title: "Senior Instructor, KnowledgeHut",
      avatar: "/avtar.svg",
      rating: 5,
      img1: "/Images/author.webp",
      img2: "/Images/google222.png",
    },
    {
      quote:
      'We travel often for global meetings, and ApkaTrip has made it incredibly simple to keep costs down without sacrificing quality. The 24/7 support is a game-changer for us.&quot; —',
      name: "Jonathan L., Operations Director, GlobalTech Enterprises",
      title: "Software Engineer, ABC Corp",
      avatar: "/avtar2.svg",
      rating: 5,
      img1: "/Images/author2.webp",
      img2: "/Images/google222.png",
    },
   
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  const travelData = [
    {
      imgSrc: "/Images/man.webp",
      altText: "Corporate",
      title: "Travel Managers",
      description: "Responsible for strategizing business travel plans",
      listItems: [
        "To ensure that the entire journey is enjoyable, bring your team members to Apka Trip.",
        "In-house tracking solutions to get regular employee details.",
        "24/7 reliable support for resolving all the queries.",
      ],
    },
    {
      imgSrc: "/Images/ticket22.webp",
      altText: "Corporate",
      title: "Travel Arranger",
      description: "Those who oversee the company's travel expenditure",
      listItems: [
        "User-friendly admin portal managing all employee travel expenses",
        "Maintains and audits accurate records of travel arrangements",
        "Create and analyse travel expense reports to optimise future tours.",
      ],
    },
    {
      imgSrc: "/Images/working-man.webp",
      altText: "Corporate",
      title: "Employees",
      description: "Those who travel to sky-rocket the business.",
      listItems: [
        "Special discounts on travel-related expenses",
        "A centralised booking system enabling easier coordination.",
        "Access to top-notch flights and luxurious hotels at negotiated prices.",
      ],
    },
  ];
  const FAQ=[{que:"Data-Driven Insights",ans:"Unlock the power of analytics to optimize your travel program. Our platform offers real-time data and analytics on travel trends, spending patterns, and employee preferences. With actionable insights, you can make informed decisions that lower costs and enhance travel efficiency."},
    {que:"Cost Optimization",ans:"With ApkaTrip, your company benefits from cost-saving opportunities without compromising on quality. Our platform helps minimize unnecessary expenses through smart travel choices, negotiated rates, and proactive itinerary management."},
    {que:"Seamless Technology Integration",ans:"Our intuitive, all-in-one travel management platform integrates with your existing systems for smooth operations. From booking and expense management to reporting and analytics, everything is managed from one convenient dashboard."},
    {que:"Dedicated Support",ans:"Our dedicated team of travel experts is available 24/7 to assist with any changes,cancellations, or emergencies. We understand that time is money in business, so our goal is to ensure every trip is hassle-free and every traveler is well-supported."},
    {que:"Sustainability Commitment",ans:"ApkaTrip is committed to helping businesses travel responsibly. We offer a range of sustainable travel options, including eco-friendly accommodation choices, carbon offsetting programs, and tools to measure and reduce your travel footprint."}
    ]
  
  return (
    <>
      <div className="w-full bg-[url('/Images/bg-images..webp')] bg-no-repeat bg-cover px-5 md:px-32 py-16 bg-center">
        <div className="py-5">
          <h1 className="text-[#08b385] text-2xl font-semibold relative leading-2 md:leading-[70px] ">
          Welcome to ApkaTrip
            <span className="absolute block w-[55px] h-[5px] bg-[#08b385] rounded-full top-[-15px] left-0 mx-auto"></span>
          </h1>
          <p className=" text-2xl md:text-3xl my-[10px]">
          Revolutionizing Corporate
          Travel
          </p>
        </div>
        <div className="rounded-lg w-full ">
          <img
            src="/Images/apkatripbanner.webp"
            className="mx-auto rounded-lg"
          />
        </div>
      </div>

      <div className="mt-10 mx-5 md:mx-28">
        <p className="text-3xl font-normal font-weight-300">
          {" "}
          A Central Place for Every 
          <span className="font-bold text-[#08b385]"> Team Member</span>
        </p>
        <p className="my-4 text-xl font-semibold">
        "Each exclusive feature is carefully tailored to fulfill the unique needs of every employee."
        </p>
        <div className="flex justify-between  flex-wrap gap-4 mb-8">
          {travelData.map((item, index) => (
            <div
              key={index}
              className="p-4 w-full md:w-[32%] border border-[#08b385] border-b-4 rounded-t-3xl"
            >
              <img src={item.imgSrc} alt={item.altText} className="w-16 h-16" />

              <h5 className="text-lg font-bold mt-2 mb-1">{item.title}</h5>
              <span className="text-base font-light block mb-3">
                {item.description}
              </span>
              <ul className="list-disc pl-5 mb-4">
                {item.listItems.map((listItem, liIndex) => (
                  <li key={liIndex}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <section class="bg-[#3C9AEF] text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold">ApkaTrip’s Core Services</h1>
            <p class="mt-4 text-lg max-w-2xl mx-auto">Empowering businesses with tailored travel solutions that ensure smooth, efficient, and cost-effective travel for all your employees and corporate events.</p>
        </div>
    </section>

    
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-semibold text-blue-700">Flight Booking – Streamlined, Simplified</h2>
            <p class="mt-4 text-lg max-w-2xl mx-auto">We partner with top airlines worldwide, offering special rates and priority booking for business travelers. Whether it’s an executive flying across the country or a team heading to an overseas conference, ApkaTrip ensures that your flight arrangements are seamless, cost-efficient, and tailored to your schedule.</p>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Exclusive Corporate Rates</h3>
                    <p class="mt-2 text-gray-700">Access special rates that are designed to save your business money on every booking.</p>
                </div>
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Last-Minute Booking Assistance</h3>
                    <p class="mt-2 text-gray-700">Need a flight in a hurry? We assist with last-minute flight bookings to keep your business moving smoothly.</p>
                </div>
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">24/7 Travel Support</h3>
                    <p class="mt-2 text-gray-700">Our team is available around the clock to assist with any travel needs, ensuring you never face a delay.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section class="py-16 bg-gray-100">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-semibold text-blue-700">Hotel & Accommodation – Staying in Style</h2>
            <p class="mt-4 text-lg max-w-2xl mx-auto">From 5-star hotels to conveniently located business-class accommodations, ApkaTrip ensures comfort, safety, and convenience while optimizing for budget efficiency. Our strong global partnerships allow us to offer preferred rates and exclusive deals for corporate clients.</p>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Custom Accommodation Packages</h3>
                    <p class="mt-2 text-gray-700">We provide flexible accommodation options tailored to your business needs and budgets.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Flexible Hotel Policies for Business Stays</h3>
                    <p class="mt-2 text-gray-700">Our hotel policies are designed to offer flexibility, ensuring seamless stays for your employees.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Real-Time Accommodation Management</h3>
                    <p class="mt-2 text-gray-700">Easily manage and track accommodation bookings in real-time, ensuring no surprises during business travel.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-semibold text-blue-700">Ground Transportation – Effortless Mobility</h2>
            <p class="mt-4 text-lg max-w-2xl mx-auto">We provide a variety of ground transportation options to fit your business’s needs. From airport pickups and chauffeured services to car rentals and group transportation, ApkaTrip makes sure your employees get from point A to point B smoothly and on time.</p>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Airport Transfers</h3>
                    <p class="mt-2 text-gray-700">Seamless transfers between airports and accommodations to ensure your employees arrive on time.</p>
                </div>
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Corporate Car Rentals</h3>
                    <p class="mt-2 text-gray-700">Access a wide range of vehicles for business trips, from economy to premium cars.</p>
                </div>
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Chauffeur & Limousine Services</h3>
                    <p class="mt-2 text-gray-700">Provide your team with a touch of luxury and comfort with chauffeured and limousine services.</p>
                </div>
            </div>
        </div>
    </section>

   
    <section class="py-16 bg-gray-100">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-semibold text-blue-700">Meeting & Event Management – Seamlessly Organized</h2>
            <p class="mt-4 text-lg max-w-2xl mx-auto">Planning a corporate event or meeting? ApkaTrip handles all the logistics—whether it's organizing a team-building retreat or managing the intricacies of an international conference. From securing meeting venues to managing catering and transportation, we’ll ensure everything runs smoothly.</p>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Custom Corporate Event Solutions</h3>
                    <p class="mt-2 text-gray-700">Tailored event solutions to match your corporate culture and goals.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Global Venue Sourcing</h3>
                    <p class="mt-2 text-gray-700">Access venues worldwide for any type of corporate event or meeting.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Expert Event Coordination & Management</h3>
                    <p class="mt-2 text-gray-700">Our event planners coordinate every detail to make your event flawless.</p>
                </div>
            </div>
        </div>
    </section>

  
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-semibold text-blue-700">Corporate Travel Policy Compliance – Control & Transparency</h2>
            <p class="mt-4 text-lg max-w-2xl mx-auto">Ensuring that your employees adhere to company travel policies is crucial. Our advanced platform helps companies create, implement, and enforce travel policies that streamline approval workflows, ensure budget control, and enforce compliance with corporate guidelines.</p>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">AI-Driven Policy Enforcement</h3>
                    <p class="mt-2 text-gray-700">Our platform uses AI to ensure compliance with travel policies and rules.</p>
                </div>
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Real-Time Compliance Tracking</h3>
                    <p class="mt-2 text-gray-700">Track travel policy compliance in real-time, ensuring everything stays on budget.</p>
                </div>
                <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 class="font-semibold text-xl text-blue-700">Automated Approval Workflows</h3>
                    <p class="mt-2 text-gray-700">Automated workflows streamline approval processes, saving time and reducing errors.</p>
                </div>
            </div>
        </div>
    </section>

    

      <section className="test-main">
        <div className="max-w-7xl mx-auto px-4 py-12 my-5 ">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3">
          Client Success Stories
          </h2>
          <p className="text-sm md:text-base text-center mb-10">
            Outstanding experience! Great service, exceptional quality. Very
            satisfied customer.
          </p>
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="px-2 my-5">
                <div className="w-full h-80 flex flex-col justify-between border-2 border-[#dee5ec] bg-white shadow-lg rounded-lg p-6 relative group hover:border-[#08b385] hover:shadow-2xl transition-all duration-300 ease-in-out">
                  <div className="absolute top-[-20px] left-[30px] bg-white shadow-md border-2 rounded-full px-2 py-2 border-[#dee5ec] group-hover:border-[#08b385]">
                    <FaQuoteLeft className="text-sm text-gray-700 group-hover:text-[#08b385]" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-4">
                      {truncateText(testimonial.quote, 20)}
                    </h3>
                    <div className="flex text-[#08b385] text-xl mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="mx-1" />
                      ))}
                    </div>
                  </div>
                  <div className="w-full border-[1px] border-dashed my-5 border-[#bfccda]"></div>
                  <div className="w-full flex items-center">
                    <img
                      className="w-12 md:w-14 rounded-full"
                      src={testimonial.img1}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <h4 className="text-base md:text-lg font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <img
                        className="w-8 md:w-10"
                        src={testimonial.img2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <div className="px-20 my-4">
    <p className="text-4xl font-semibold my-4">Why Corporate Travel with ApkaTrip?</p>

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
    <div class=" mx-auto p-6 px-20 bg-white rounded-lg shadow-lg">

  <div class="text-center mb-8">
    <h2 class="text-3xl font-semibold text-gray-800">ApkaTrip Technology: The Future of Corporate Travel</h2>
    <p class="mt-2 text-lg text-gray-600">Streamline your corporate travel management and optimize your expenses with ApkaTrip's smart, real-time solutions.</p>
  </div>


  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  
    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Real-Time Travel Dashboard</h3>
      <p class="text-gray-600">A centralized hub that offers an overview of all your travel needs in one place. Easily manage employee travel, track expenses, and make adjustments on the go.</p>
    </div>

   
    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Automated Approval System</h3>
      <p class="text-gray-600">Streamline your company’s travel policy enforcement with our automated approval system, reducing the manual workload and ensuring compliance with your travel guidelines.</p>
    </div>

    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Expense Management and Reporting Tools</h3>
      <p class="text-gray-600">With ApkaTrip, tracking travel expenses is easy. Get real-time insights into travel spending, optimize budgets, and generate detailed reports with a few clicks.</p>
    </div>

   
    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Mobile App Access</h3>
      <p class="text-gray-600">Take your corporate travel management to the next level with ApkaTrip’s mobile app. Book, manage, and adjust travel plans on the go, wherever you are.</p>
    </div>
  </div>

 


  <div class="text-center">
    <h3 class="text-2xl font-semibold text-gray-800 mb-4">Start Optimizing Your Corporate Travel Today</h3>
    <p class="text-lg text-gray-600 mb-6">Whether you’re looking to save costs, enhance the employee experience, or optimize your travel program, ApkaTrip is here to help. Reach out today to discover how we can create a corporate travel solution that fits your business.</p>

   
  </div>
</div>


    </>
  );
};

export default Page;
