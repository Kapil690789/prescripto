import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function TopDoctors() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  // State to track loading
  const [loading, setLoading] = useState(true);

  // Simulating loading time (You can remove this part if you're fetching data from an API)
  useEffect(() => {
    if (doctors && doctors.length > 0) {
      setLoading(false); // Set loading to false once doctors data is available
    }
  }, [doctors]);

  // Function to split the text into individual letters for the bounce effect
  const splitText = (text) => {
    return text.split('').map((letter, index) => (
      <span
        key={index}
        className="letter inline-block animate-bounce text-blue-500"
        style={{
          animationDelay: `${index * 0.1}s`,
          animationDuration: '0.6s', // Control how long the bounce effect lasts
        }}
      >
        {letter}
      </span>
    ));
  };

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="border border-gray-200 rounded-xl overflow-hidden animate-pulse">
      <div className="bg-gray-300 h-32 w-full"></div>
      <div className="p-4">
        <div className="bg-gray-300 h-4 w-1/4 mb-2 rounded"></div>
        <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>
        <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
      </div>
    </div>
  );

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 px-4'>
      <h1 className='text-3xl font-medium sm:text-2xl text-center'>Top Doctors to Book</h1>
      <p className='sm:w-2/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Show loading skeletons or bounce animation */}
      {loading && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )}

      {/* Display doctors once data is loaded */}
      {!loading && (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {doctors.slice(0, 10).map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
              key={index}
            >
              <img className='bg-blue-50' src={item.image} alt="" />
              <div className='p-4'>
                <div
                  className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'}`}
                >
                  <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'} rounded-full`}></p>
                  <p>{item.available ? 'Available' : 'Not Available'}</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show the "more" button once the data is loaded */}
      {!loading && (
        <button
          onClick={() => {
            navigate('/doctors');
            window.scrollTo(0, 0);
          }}
          className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 sm:px-8 sm:py-2'
        >
          more
        </button>
      )}
    </div>
  );
}

export default TopDoctors;
