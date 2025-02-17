import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // Ensure correct path to assets.js

function Header() {
  const navigate = useNavigate(); // Ensure correct import of useNavigate from react-router-dom
  const [showPopup, setShowPopup] = useState(false);

  const handleCreateAccountClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false); // Automatically close popup after 1 second
      navigate('/login'); // Redirect to the login page
      window.scrollTo(0, 0); // Scroll to top
    }, 1000); // Reduced to 1 second
  };

  // Navigate to Admin/Doctor page
  const handleAdminDoctorLogin = () => {
    window.open("https://prescripto-admin-veng.onrender.com/add-doctor", "_blank");
  };
  
  const handleDoctorandchat = () => {
    window.open("https://chat-app-zeta-tawny.vercel.app", "_blank");
  };
  

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vh] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          {/* Group Profiles Image */}
          <img className="w-28" src={assets.group_profiles} alt="Group Profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="https://drmudhiwalla.com/index.php" target='_blank'
          className="flex items-center gap-2 bg-white px-6 py-2 rounded-full text-gray-600 text-xs m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
         Client Website
          <img className="w-4 h-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>

        <a
          href="#speciality" 
          className="flex items-center gap-2 bg-white px-6 py-2 rounded-full text-gray-600 text-xs m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book Appointment 
          <img className="w-4 h-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </a>

        {/* Create Account Button */}
        <button 
          onClick={handleCreateAccountClick}
          className="flex items-center gap-2 bg-white px-6 py-2 rounded-full text-gray-600 text-xs m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Create Account <span className="text-[10px] text-gray-500">(Guest Login)</span>
          <img className="w-4 h-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </button>

        {/* Admin/Doctor Login Button */}
        <button
          onClick={handleAdminDoctorLogin}
          className="flex items-center gap-2 bg-white px-6 py-2 rounded-full text-gray-600 text-xs m-auto md:m-0 hover:scale-105 transition-all duration-300 mt-4"
        >
          Admin/Doctor Login (Guest Login)
          <img className="w-4 h-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </button>

        <button
          onClick={handleDoctorandchat}
          className="flex items-center gap-2 bg-white px-6 py-2 rounded-full text-gray-600 text-xs m-auto md:m-0 hover:scale-105 transition-all duration-300 mt-4"
        >
          Chat between Doctor and User (Guest Login)
          <img className="w-4 h-4" src={assets.arrow_icon} alt="Arrow Icon" />
        </button>
        
        

      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="Header"
        />
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-72 text-center relative">
            <p className="text-gray-600 font-semibold mb-4">Please wait, our data is loading...</p>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
