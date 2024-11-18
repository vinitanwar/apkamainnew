"use client";
import { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaEye, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import Link from "next/link";
export default function AuthForm() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <>
      <div className="block md:flex bg-[#ecf5fe] gap-10  mt-5 md:mt-10 m-2 md:m-10">
        <div className="w-full md:w-1/2 p-5 md:p-20">
          <ul className="flex ">
            <li className="mr-1">
              <button
                className={`bg-transparent py-2 px-4 font-semibold ${
                  activeTab === "login" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveTab("login")}
              >
                Admin Login
              </button>
            </li>
           
          </ul>
          <div className="tab-content">
            {activeTab === "login" && (
              <div className="tab-pane fade-in show">
                <p className="mt-6 mb-6">
                  Use your credentials to login into your account.
                </p>
                <form >
                  <div className="form-group  mb-4">
                    <div className="input-group relative">
                        <FaEnvelope  className="absolute right-3 top-4"/>
                      <input
                        required
                        className="form-control w-full p-3  bg-white border-none rounded-md"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="form-group password-field mb-4">
                    <div className="input-group relative">
                    <FaEye className="absolute right-3 top-4"/>
                      <input
                        required
                        className="form-control w-full p-3 bg-custom border-none rounded-md"
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      <div className="input-group-append cursor-pointer">
                        <span className="input-group-text">
                          {/* SVG Icon for Show/Hide Password */}
                          {/* Your SVG code here */}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <div className="">
                      <button className="btn btn-primary w-full py-2 px-4 bg-blue-500  text-white rounded-md">
                       Login
                      </button>
                    </div>
                    <div className=" flex items-center justify-end">
                      <Link href="06_reset.html" className="text-blue-500">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex gap-5 items-center  m-4">
                    <span>Or login with</span>
                      <button className="btn btn-icon btn-flat">
                       <FaFacebookF className="bg-white p-1 rounded-lg text-3xl text-[#1877f2]"/>
                      </button>
                      <button className="btn btn-icon btn-flat">
                       <FaTwitter className="bg-white p-1 rounded-lg text-3xl text-[#03a9f4]"/>
                      </button>
                      <button className="btn btn-icon btn-flat">
                       <FaGoogle className="bg-white p-1 rounded-lg text-3xl text-black"/>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
     
          </div>
        </div>
        <Image
          className="mx-auto  w-full md:w-1/2"
          src="/Images/view-airplane-wing.webp"
          alt="Furniture"
          width={100}
          height={100}
        />
      </div>
    </>
  );
}
