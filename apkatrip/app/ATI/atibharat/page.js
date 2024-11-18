"use client";
import React, { useEffect, useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

import { FaArrowLeftLong } from "react-icons/fa6";
import { useTranslations } from "next-intl";



export default function page() {
  const t=useTranslations("atibharat")


  const swiperData = [
    {
      heading: "Adventure Travel",
      para: t("swiperdata1"),
      image: "/Images/desert.webp",
    },
    {
      heading: "Cultural Immersions",
      para: t("swiperdata2"),
      image: "/Images/tajMahal.avif",
    },
    {
      heading: "Luxury Escapes",
      para: t("swiperdata3"),
      image: "/Images/PushKarLake.avif",
    },
    {
      heading: "Eco and Sustainable Travel",
      para: t("swiperdata4"),
      image: "/Images/tajMahal.avif",
    },
    {
      heading: "Family Adventures",
      para: t("swiperdata5"),
      image: "/Images/SwiperBharat1.avif",
    },
    {
      heading: "Solo Journeys",
      para: t("swiperdata6"),
      image: "/Images/PushKarLake.avif",
    },
   
  ];
  const swiperData2=[
    {
      heading: "Share Your Dream Destination",
      para: "Tell us about your dream destination or the kind of experience you&#39;re looking for. Whether it’s a quiet retreat, a cultural immersion, or an adventurous exploration, we listen closely to your needs.",
     
    },
    {
      heading: "Customized Itinerary Planning",
      para: "Our travel experts will create a personalized itinerary tailored to your preferences, ensuring that each day of your trip is filled with unique, memorable activities. Every detail is taken care of, from flights and accommodations to guided tours and activities.",
     
    },
    {
      heading: "Book with Confidence",
      para: "With ApkaTrip, you can rest easy knowing that every aspect of your trip is taken care of. We handle all the logistics, so you can focus on the joy of travel. Plus, we offer flexible booking policies to accommodate your changing plans.",
   
    },
    {
      heading: "Embark on the Journey of a Lifetime",
      para: "Your adventure is ready! Whether you’re exploring a new city or embarking on arugged outdoor adventure, we’re here to support you every step of the way. Our dedicated team is available throughout your trip to assist with any requests or adjustments.",
     
    }
   
  ];
 const [showheading,setshowheadimng]=useState(false);
const [faqindex,setfaqindex]=useState()

  const FAQ=[{que:"Tailor-Made Experiences for Every Explorer",ans:"At ApkaTrip, we know that no two travelers are alike. Whether you’re a solo wanderer, a couple seeking romance, a family on an adventure, or a group of friends looking for excitement, we create bespoke itineraries that cater to your unique passions and interests. From cultural immersions and adventurous escapades to serene retreats, your trip will be customized to match your travel dreams."},
  {que:"Vast Global Reach, Endless Possibilities",ans:"The world is your oyster. With ApkaTrip, you can explore iconic destinations such as the majestic temples of Kyoto, the vibrant streets of Marrakech, the untouched beauty of Patagonia, or the crystal-clear waters of the Maldives. Our global network of partners ensures that every destination, no matter how remote, is accessible to you."},
  {que:"Authentic, Off-the-Beaten-Path Adventures",ans:"While some travel agencies focus on the popular spots, ApkaTrip takes pride in helping you discover the hidden gems of the world. Imagine exploring a secret waterfall in Bali, wandering through the backstreets of Rome, or dining with locals in a remote Peruvian village. We believe in authentic travel experiences that go beyond the tourist trail—because the best stories are found off the beaten path."},
  {que:"Expert Travel Advisors to Guide You",ans:"Our team of experienced travel experts are passionate about travel—and it shows. Whether you need advice on the best hiking trails in the Swiss Alps or want recommendations for a hidden cultural gem in India, our knowledgeable advisors are here to guide you every step of the way. With our insider expertise, you’ll always be one step ahead on your journey."}
  ]




 useEffect(()=>{
 const intervel= setInterval(() => {
  setshowheadimng((prev) => !prev);
}, 2000);


return ()=>clearInterval(intervel)

 },[])

  return (


    <div className="exploreBharat">
      <div className="Banner-Image px-4 md:px-20 lg:px-40 relative bg-[url('/Images/exploreBharat.avif')] bg-cover bg-center   min-h-[80vh] md:min-h-[100vh] flex justify-center items-center">
        <div className="content relative z-10 text-center text-white">
          <h3 className="text-3xl md:text-4xl tracking-widest font-bold">
            WELCOME TO
          </h3>
          <h2 className="text-6xl md:text-7xl  text-white uppercase font-extrabold">
            ApkaTrip
          </h2>
          <p className="px-4 md:px-20 text-white xl:px-60 mt-4 text-sm md:text-base lg:text-lg">
          <span className="font-semibold">Discover, Wander, and Experience the Wonders of the World with ApkaTrip </span>
Are you ready to explore the world in ways you’ve never imagined? With ApkaTrip, we
believe travel is more than just reaching a destination—it’s about diving deep into cultures,
finding hidden gems, and creating memories that last a lifetime. Whether you dream of
traversing ancient cities, hiking through lush forests, or exploring remote islands, we’re
here to make it all happen.
Let us be your trusted travel partner as you embark on unforgettable journeys across the
globe.   <span className="font-semibold">The world is vast, and adventure awaits.</span>
          </p>
        </div>
      </div>


     
                                            




      <div className="cardss-Section   xl:px-20 mt-5 md:mt-0 pt-10  px-2">
        <div className="grid items-center  grid-cols-1 xl:grid-cols-2  gap-6  px-2 md:px-8 lg:px-16">
        <section className="">
      <div className="mx-auto">
        <div className="mb-16">
          <h2
            className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]"
          >
        Why ApkaTrip?
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {FAQ.map((item,index)=>{
            return(
<div
            className="accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-2 lg:p-4 active"
   
          >
            <button onClick={()=>{ faqindex==index?setfaqindex():setfaqindex(index)}}
              className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
              aria-controls="basic-collapse-one-with-icon"
            >
              <h5>{item.que}</h5>
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
      </div>
    </section>

 
          <div className="hidden xl:flex justify-center rounded-3xl px-4 lg:px-10 py-5">
            <img
              src="/Images/indiamap.avif"
              alt="Map of India"
              className="w-[80%] h-auto rounded-full"
            />
          </div>
        </div>
        <div className="india unveiled py-10 px-3 lg:px-10 xl:px-20">
          <h3 className="text-2xl text-center lg:text-start md:text-3xl ps-2 font-extrabold  lg:leading-relaxed font-serif">
          How It Works: Your Journey with {""}
            <span className="text-[#C09552]"> ApkaTrip</span>{" "}
          </h3>

          <div className="swiperSection">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper mt-5 xl:mt-10 px-4 sm:px-10 "
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1800: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
            >
              {swiperData2.map((elm, index) => (
                  <SwiperSlide key={index} className="flex justify-center h-full">
                  
                   

                      <div className="relative z-40 p-4 bg-white rounded-b-xl shadow-lg h-full">
                        <h5 className="font-bold text-black text-xl mb-2">
                          {elm.heading}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {elm.para}
                        </p>
                     
                    </div>
                  </SwiperSlide>
                ))}

         
              <div className="swiper-button-prev custom-nav-button hidden lg:flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg  transition duration-300">
                <FaArrowLeftLong className="text-[#C09552] " />
              </div>
              <div className="swiper-button-next custom-nav-button hidden lg:flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg  transition duration-300">
                <FaArrowLeftLong className="rotate-180 text-[#C09552] " />
              </div>
            </Swiper>
          </div>
        </div>
        <div className="space-y-4 lg:space-y-10 explore px-2 lg:px-20 xl:px-20 ">
          <div className="discover pt-5 lg:pt-10">
            <h3 className="text-2xl text-center lg:text-start md:text-3xl ps-2 font-extrabold  lg:leading-relaxed font-serif">
            How It Works: Your Journey with {""}
              <span className="text-[#C09552]"> ApkaTrip</span>{" "}
            </h3>
          </div>
          <div class="container mx-auto px-4 ">

<div class="bg-white shadow-lg rounded-lg p-8 mb-12">
    <h2 class="text-3xl font-semibold text-blue-600">1. Share Your Dream Destination</h2>
    <p class="mt-4 text-lg">Tell us about your dream destination or the kind of experience you're looking for. Whether it’s a quiet retreat, a cultural immersion, or an adventurous exploration, we listen closely to your needs.</p>
</div>

<div class="bg-white shadow-lg rounded-lg p-8 mb-12">
    <h2 class="text-3xl font-semibold text-blue-600">2. Customized Itinerary Planning</h2>
    <p class="mt-4 text-lg">Our travel experts will create a personalized itinerary tailored to your preferences, ensuring that each day of your trip is filled with unique, memorable activities. Every detail is taken care of, from flights and accommodations to guided tours and activities.</p>
</div>

<div class="bg-white shadow-lg rounded-lg p-8 mb-12">
    <h2 class="text-3xl font-semibold text-blue-600">3. Book with Confidence</h2>
    <p class="mt-4 text-lg">With ApkaTrip, you can rest easy knowing that every aspect of your trip is taken care of. We handle all the logistics, so you can focus on the joy of travel. Plus, we offer flexible booking policies to accommodate your changing plans.</p>
</div>

<div class="bg-white shadow-lg rounded-lg p-8">
    <h2 class="text-3xl font-semibold text-blue-600">4. Embark on the Journey of a Lifetime</h2>
    <p class="mt-4 text-lg">Your adventure is ready! Whether you’re exploring a new city or embarking on a rugged outdoor adventure, we’re here to support you every step of the way. Our dedicated team is available throughout your trip to assist with any requests or adjustments.</p>
</div>
</div>
          
        </div>







        <div className="india unveiled py-10 px-3 lg:px-10 xl:px-20">
          <h3 className="text-2xl text-center lg:text-start md:text-3xl ps-2 font-extrabold  lg:leading-relaxed font-serif">
          Explore Our Signature Travel {""}
            <span className="text-[#C09552]">Categories</span>{" "}
          </h3>

          <div className="swiperSection">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper mt-5 xl:mt-10 px-4 sm:px-10 "
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1800: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
            >
              {swiperData.map((elm, index) => (
                  <SwiperSlide key={index} className="flex justify-center h-full">
                  
                   

                      <div className="relative z-40 p-4 bg-white rounded-b-xl shadow-lg h-full">
                        <h5 className="font-bold text-black text-xl mb-2">
                          {elm.heading}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {elm.para}
                        </p>
                     
                    </div>
                  </SwiperSlide>
                ))}

         
              <div className="swiper-button-prev custom-nav-button hidden lg:flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg  transition duration-300">
                <FaArrowLeftLong className="text-[#C09552] " />
              </div>
              <div className="swiper-button-next custom-nav-button hidden lg:flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg  transition duration-300">
                <FaArrowLeftLong className="rotate-180 text-[#C09552] " />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
   

     </div>



  );
}


