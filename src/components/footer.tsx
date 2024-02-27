import Logo from '../assets/images/Logo.png';
import React from 'react';


const Footer = () => {
  return (
 <footer>
      <div className="bg-black h-[241px] flex justify-start items-center gap-5 ps-[100px]">
        <img
          className="w-[110px] h-[110px]"
          src={Logo}
          alt="Logo"
        />
        <div>
          <p className="text-white text-[24px] font-bold">DUMBWAYS.ID</p>
          <p className="text-white text-wrap w-[300px] text-[16px]">
            Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
            Banten 15413
          </p>
        </div>
      </div>
      <div className="h-[3px] bg-white"></div>
      <div className="bg-black">
        <p className="text-white text-[20px] font-[500] text-center h-[50px] flex justify-center items-center">
          Komisi Pemilihan Umum DumbWays.ID | Ravano Akbar Widodo 2024
        </p>
      </div>
      </footer>
  )
};

export default Footer;