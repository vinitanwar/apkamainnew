import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
   <section className="bg-cover bg-center text-[gray] text-center py-10  px-40 bg-[#5cc5fa] " >
      <div className=" mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to ApkaTrip’s Exclusive Loyalty Program</h2>
        <p className="text-lg mb-6 ">Travel More, Earn More, and Enjoy Exceptional Rewards</p>
<p className='text-gray-900'>At ApkaTrip, we believe that loyalty deserves to be rewarded. Whether you’re a frequent
traveler or just starting to explore the world, our Loyalty Program is designed to enhance
your travel experiences and offer you exclusive benefits every step of the way.
When you book with us, you’re not just securing a trip—you’re unlocking a world of
privileges, exclusive rewards, and personalized services that make every journey even
more memorable.
Join the ApkaTrip Loyalty Program today and start earning points, perks, and privileges
that make your travel dreams a reality.</p>      </div>
    </section>

    {/* Loyalty Program Overview */}
    <section id="loyalty-program" className="py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-600 mb-8">Why Join the ApkaTrip Loyalty Program?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Earn Points with Every Booking</h4>
            <p>Every trip you take with ApkaTrip brings you closer to incredible rewards. From flights to
accommodations, and holiday packages to exclusive experiences, you’ll earn points on
each booking. The more you travel, the more you earn.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Exclusive Member Benefits</h4>
            <p>As a member of our loyalty program, you’ll unlock a range of premium benefits that elevate
your travel experience. Enjoy priority customer support, special discounts, exclusive
access to private tours and experiences, and even complimentary upgrades at select
hotels.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Tailored Offers & Personalized Recommendations</h4>
            <p>Your loyalty matters to us, which is why we go the extra mile to make your experience with
ApkaTrip as personal and rewarding as possible. As a loyalty member, you’ll receive
customized travel offers and recommendations based on your preferences, making each
trip unique and personalized to your taste.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Redeem Points for Exciting Rewards</h4>
            <p>With our Loyalty Program, your points are as valuable as the trips themselves. Redeem
them for future travel, exclusive upgrades, access to VIP lounges, special experiences like
private yacht rentals, or even gift cards for your favorite brands. The possibilities are
endless..</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">VIP Customer Support</h4>
            <p>As a loyalty member, you get access to dedicated travel concierge services, ensuring
that your travel plans are seamless, stress-free, and perfectly tailored to your needs. Our
team is available around the clock to assist with special requests, last-minute changes,
and exclusive arrangements.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Exclusive Promotions &amp; Deals</h4>
            <p>Be the first to know about our special promotions, limited-time offers, and seasonal
discounts available only to our loyal members. Whether it&#39;s discounted rates on holiday

packages or special deals on flights, our members enjoy early access to deals that are
unavailable to the general public.
and exclusive arrangements.</p>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="bg-gray-50 py-16" id="how-it-works">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-600 mb-8">How It Works: Simple, Transparent, and Rewarding</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">1. Sign Up and Start Earning</h4>
            <p>Joining the ApkaTrip Loyalty Program is quick and free. Simply sign up on our website and
start earning points on every trip. Whether you’re booking flights, accommodations, or full
travel packages, your points will accumulate seamlessly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">2. Book Your Next Trip</h4>
            <p>With your membership, enjoy a range of exclusive offers and discounts available only to
            loyalty members. Book your next adventure with us and watch your points grow.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">3. Earn and Track Points</h4>
            <p>Points accumulate with each booking and can be tracked easily through your ApkaTrip
            account. Keep an eye on your balance to see how close you are to your next reward!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">4. Redeem and Enjoy</h4>
            <p>Redeem your points for exclusive upgrades, VIP access, or even special experiences.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Membership Levels */}
    <section id="membership-levels" className="py-16 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-600 mb-8">Levels of Membership</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Explorer Level</h4>
            <ul className="list-disc pl-5">
              <li>1 point per dollar spent</li>
              <li>Welcome gift</li>
              <li>Basic member benefits</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Adventurer Level</h4>
            <ul className="list-disc pl-5">
              <li>1.5 points per dollar spent</li>
              <li>Priority customer support</li>
              <li>Free lounge access</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-3">Globetrotter Level</h4>
            <ul className="list-disc pl-5">
              <li>2 points per dollar spent</li>
              <li>Priority booking for exclusive tours</li>
              <li>Double points on select experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-[#5cc5fa] text-white py-16 text-center" id="signup">
      <h3 className="text-3xl font-bold mb-4">Join the ApkaTrip Loyalty Program Today</h3>
      <p className="mb-6">Start earning points and enjoy amazing rewards with ApkaTrip.</p>
      <a href="signup.html" className="inline-block bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-200">Sign Up Now</a>
    </section>

 
  </div>
  )
}

export default page
