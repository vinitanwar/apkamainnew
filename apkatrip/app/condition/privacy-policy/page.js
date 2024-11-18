import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className=" bg-gray-50 py-10">
        <div className="">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <div className="flex justify-center">
                <span className="flex px-4 py-2 font-semibold  rounded-full bg-[#3b82f6] text-white items-center justify-center">
                  <img
                    className="mr-2.5"
                    src="/Images/earth.svg"
                    alt="Apka Trip"
                  />
                  AGREEMENT
                </span>
              </div>
              <h2 className="mt-4 mb-4 text-4xl font-bold">Privacy Policy</h2>
              <p
                className="text-xl font-medium text-neutral-1000  fadeInUp"
                style={{ visibility: "visible" }}
              >
                Last update: Mar 17, 2024
              </p>
            </div>
          </div>

          <div className="flex justify-center my-5">
            <img
              className="mr-2.5"
              src="/Images/banner-privacy.webp"
              alt="Apka Trip"
            />
          </div>
          <div className="mx-auto mt-10 text-justify max-w-6xl">
            <div className="box-detail-info">
              <p>
                At Apka Trip, we take your privacy seriously and are committed
                to protecting your personal information...
              </p>
              <p className="my-5">
                <strong>Information Collection:</strong> We may collect personal
                information such as your name, contact details, payment
                information, and browsing activity when you interact with our
                website or make a reservation.
              </p>
              {/* Additional policy content */}
              <h6>Thank you for visiting!</h6>
              <p>
                By using our website or services, you consent to the terms of
                this Privacy Policy...
              </p>
            </div>

            <div className="flex items-center space-x-6 mt-5">
              <p className="text-lg font-bold text-neutral-1000 ">Follow us:</p>
              <Link
                href="https://www.facebook.com/"
                className="hover:text-blue-400 text-blue-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="https://x.com/?lang=en"
                className="hover:text-gray-400 text-gray-500"
              >
                <span className="sr-only">X</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </Link>
              <Link
                href="/https://www.instagram.com/"
                className="hover:text-black-400 text-black-500"
              >
                <span className="sr-only">instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </Link>
              <Link
                href="/https://www.youtube.com/"
                className=" text-red-500  hover:text-red-400  "
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-box bg-gray-50">
        <div className="flex flex-wrap justify-center items-center ">
          <Image
            src="/Images/media.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            src="/Images/media2.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            src="/Images/media3.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            src="/Images/media4.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            src="/Images/media5.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            src="/Images/media6.webp"
            alt=""
            width={200}
            height={100}
          />
          <Image
            src="/Images/media7.webp"
            alt=""
            width={200}
            height={100}
          />
        </div>
      </section>
    </>
  );
};

export default page;
