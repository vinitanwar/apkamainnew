import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-50">
    {/* Hero Section */}
    <section className="bg-[#2c9afaac] text-white text-center py-16 px-4 ">
      <div className="max-w-3xl mx-auto ">
        <h1 className="text-4xl font-bold mb-4">Welcome to the ApkaTrip Membership Club</h1>
        <p className="text-xl mb-6 font-semibold" >
          Where Extraordinary Travel Meets Unmatched Exclusivity
        </p>
        <p className="text-lg mb-8 font-semibold">
          At ApkaTrip, we believe that travel is more than just a journey—it’s an experience that should be tailored to your desires, marked by luxury, adventure, and personalized service.
        </p>
      
      </div>
    </section>

    {/* Why Join the ApkaTrip Membership Club */}
    <section className="py-16 px-4 text-center">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8">Why Join the ApkaTrip Membership Club?</h2>
      
        <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-centermx-auto ">
	
		<div className="grid gap-5 md:gap-8 sm:p-3 md:grid-cols-3 ">
			<div>
				<h3 className="font-semibold">Unlock a World of VIP Access and Exclusive Benefits</h3>
				<p className="mt-1 dark:text-gray-600">Gain exclusive access to high-end accommodations, bespoke travel services, and privileged events that others can only dream of.</p>
			</div>
			<div>
				<h3 className="font-semibold">Priority Access to the Best Deals and Offers</h3>
				<p className="mt-1 dark:text-gray-600"> Be the first to get exclusive offers, seasonal deals, and promotions available only to our members.</p>
			</div>
			<div>
				<h3 className="font-semibold">Personalized Travel Experiences Tailored Just for You</h3>
				<p className="mt-1 dark:text-gray-600">Experience travel like never before, with customized itineraries, private tours, and experiences based on your personal style and preferences.</p>
			</div>
			
		</div>
	</div>
</section>
      </div>
    </section>

    {/* How It Works */}
    <section className="bg-gradient-to-r from-blue-50 to-gray-200 py-16" id="how-it-works">
  <div className="max-w-screen-xl mx-auto text-center">
    <h3 className="text-4xl font-semibold text-blue-600 mb-8">How the ApkaTrip Membership Club Works</h3>
    <p className="text-lg text-gray-600 mb-12">
      Joining the ApkaTrip Membership Club is your gateway to a world of premium benefits and unforgettable travel experiences.
    </p>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Step 1 */}
      <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="text-blue-600 text-4xl mb-4">
          <i className="fas fa-user-plus"></i>
        </div>
        <h4 className="text-xl font-semibold mb-3">Step 1: Sign Up and Become a Member</h4>
        <p className="text-gray-700">
          Joining the club is easy! Sign up on our website and gain immediate access to exclusive benefits.
        </p>
      </div>
      {/* Step 2 */}
      <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="text-blue-600 text-4xl mb-4">
          <i className="fas fa-star"></i>
        </div>
        <h4 className="text-xl font-semibold mb-3">Step 2: Enjoy Personalized Travel Benefits</h4>
        <p className="text-gray-700">
          Once you're a member, enjoy personalized travel benefits, including special deals and priority bookings.
        </p>
      </div>
      {/* Step 3 */}
      <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="text-blue-600 text-4xl mb-4">
          <i className="fas fa-crown"></i>
        </div>
        <h4 className="text-xl font-semibold mb-3">Step 3: Unlock VIP Access</h4>
        <p className="text-gray-700">
          As you travel more, your benefits grow. Get priority customer support, room upgrades, and VIP lounge access.
        </p>
      </div>
      {/* Step 4 */}
      <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="text-blue-600 text-4xl mb-4">
          <i className="fas fa-gift"></i>
        </div>
        <h4 className="text-xl font-semibold mb-3">Step 4: Tailor-Made Experiences Await</h4>
        <p className="text-gray-700">
          Enjoy curated experiences created just for you, from custom itineraries to romantic escapes and private dining.
        </p>
      </div>
    </div>
  </div>
</section>


    {/* Membership Levels */}
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-gray-200" id="membership-levels">
  <div className="max-w-screen-xl mx-auto text-center">
    <h3 className="text-4xl font-semibold text-blue-600 mb-8">Membership Levels</h3>
    <p className="text-lg text-gray-700 mb-12">
      Choose a membership level that matches your travel style. The more you explore, the more rewards you’ll enjoy!
    </p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Explorer Tier */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
        <div className="flex justify-center mb-6 text-blue-600 text-5xl">
          <i className="fas fa-compass"></i>
        </div>
        <h4 className="text-2xl font-semibold mb-3">Explorer Tier</h4>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Earn points on every booking.</li>
          <li>Exclusive access to seasonal offers and promotions.</li>
          <li>Free concierge service for standard bookings.</li>
        </ul>
      </div>
      {/* Adventurer Tier */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
        <div className="flex justify-center mb-6 text-green-600 text-5xl">
          <i className="fas fa-mountain"></i>
        </div>
        <h4 className="text-2xl font-semibold mb-3">Adventurer Tier</h4>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Everything in the Explorer tier, plus:</li>
          <li>Complimentary upgrades on select hotels and flights.</li>
          <li>Early access to VIP events and private tours.</li>
        </ul>
      </div>
      {/* Globetrotter Tier */}
      <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
        <div className="flex justify-center mb-6 text-purple-600 text-5xl">
          <i className="fas fa-globe-americas"></i>
        </div>
        <h4 className="text-2xl font-semibold mb-3">Globetrotter Tier</h4>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Everything in the Adventurer tier, plus:</li>
          <li>Double rewards points on every trip.</li>
          <li>Free access to VIP airport lounges.</li>
          <li>Personalized travel itineraries.</li>
          <li>Exclusive access to private luxury events.</li>
        </ul>
      </div>
    </div>
  </div>
</section>



    {/* Call to Action */}
    <section className="bg-[#3899ed] text-white py-16 text-center" id="join">
      <h3 className="text-3xl font-bold mb-4">Start Your Journey Today</h3>
      <p className="mb-6 font-semibold">
        Join the ApkaTrip Membership Club and unlock the world of premium travel experiences and exclusive benefits.
      </p>
     
    </section>
  </div>
  )
}

export default page
