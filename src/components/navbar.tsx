  import React, { useState } from 'react';
import Logo from '../assets/images/Logo.png';

function Navbar () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="flex items-center justify-between h-16 px-8 bg-black"> 
      <div className="flex items-center space-x-8"> 
        <img className="w-11 h-11" src={Logo} alt="Logo" />
        <p className="text-base text-slate-50 font-interbold">
          PEMILU PRESIDEN DUMBWAYS.ID
        </p>
      </div>
      <ul className="flex items-center justify-end gap-5 text-white">
        <li><a href='/add-partai'> Partai </a></li>
        <li> | </li>
        <li><a href='/add-paslon'> Paslon </a></li>
        <li> | </li>
        <li><a href='/vote'> Voting </a></li>

        {isLoggedIn ? (
          <div>
            <button className='text-black bg-white rounded-full w-7' onClick={handleClick}><a href='/admin'> R </a></button>
          </div>
        ) : (
            <button onClick={handleClick} className="btn bg-white hover:bg-slate-200 text-black font-bold px-8 py-1 rounded-md"> LOGIN </button>
        )}   
         </ul>
    </div>
  );
}

export default Navbar;
