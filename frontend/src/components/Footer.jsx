import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
      {/* Left Section */}
      <div>
        <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
        <p className="w-full md:w-2/3 text-gray-600 leading-6">
          Prestcripto is a user-friendly web application designed to simplify
          doctor appointment booking. Users can browse through a wide range of
          healthcare providers, check availability, and book appointments
          seamlessly. The platform allows users to filter doctors based on
          specialization, location, and reviews. It also includes features for
          managing medical history, reminders for appointments, and online
          consultations. With a secure and intuitive interface, Prestcripto
          bridges the gap between patients and healthcare professionals, making
          healthcare more accessible. The app ensures efficient scheduling and
          enhances the overall experience of managing medical needs.
        </p>
      </div>

      {/* Center Section */}
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
          >
            <button>Home</button>
          </li>
          <li
            onClick={() => {
              navigate("/about");
               scrollTo(0,0)
            }}
          >
            <button>About</button>
          </li>
          <li
            onClick={() => {
              navigate("/contact");
               scrollTo(0,0)
            }}
          >
            <button>Contact us</button>
          </li>
          <li onClick={()=> {
            navigate('/doctors')
            ; scrollTo(0,0)
          }}><button>Privacy policy</button></li>
        </ul>
      </div>

      {/* Right Section */}
      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li>+9132443555</li>
          <li>kapil@gmail.com</li>
        </ul>
      </div>

      {/* Copyright Text */}
      <div className="col-span-full mt-10">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2024 KapilSharma - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
