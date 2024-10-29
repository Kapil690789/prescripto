import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

function Navbar() {

    const {aToken,setAToken} = useContext(AdminContext)
    const {dToken,setDToken} = useContext(DoctorContext)

    const navigate = useNavigate()

    const logout =() =>{
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')

        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')

        
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs '>
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
// import React, { useContext } from 'react';
// import { assets } from '../assets/assets';
// import { AdminContext } from '../context/AdminContext';
// import { DoctorContext } from '../context/DoctorContext';  // Import DoctorContext
// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//     const { aToken, setAToken } = useContext(AdminContext);
//     const { dToken, setDToken } = useContext(DoctorContext);  // Use doctor token context

//     const navigate = useNavigate();

//     const logout = () => {
//         // Clear both admin and doctor tokens if they exist
//         if (aToken) {
//             setAToken('');
//             localStorage.removeItem('aToken');
//         }
//         if (dToken) {
//             setDToken('');
//             localStorage.removeItem('dToken');
//         }
//         navigate('/');  // Redirect to the home or login page
//     };

//     return (
//         <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
//             <div className='flex items-center gap-2 text-xs'>
//                 <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
//                 <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>
//                     {aToken ? 'Admin' : dToken ? 'Doctor' : 'Guest'}
//                 </p>
//             </div>
//             <button
//                 onClick={logout}
//                 className='bg-primary text-white text-sm px-10 py-2 rounded-full'
//             >
//                 Logout
//             </button>
//         </div>
//     );
// }

// export default Navbar;
