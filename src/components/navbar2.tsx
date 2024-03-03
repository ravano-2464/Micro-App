import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/PKI.jpg';
import { useNavigate } from 'react-router-dom';

const Navbar2: React.FC = () => {
  const navigate = useNavigate();
  const goToHome = () => {
      navigate('/');
  };
  
  return (
    <div className="flex items-center justify-between h-16 px-8 bg-black"> 
      <div className="flex items-center space-x-8"> 
        <img className="w-11 h-11" src={Logo} alt="Logo" />
        <p className="text-base text-slate-50 font-interbold">
          DASHBOARD PEMILU
        </p>
      </div>
      <ul className="flex items-center justify-end gap-5 text-white">
        <li><Link to='/add-partai'> Partai </Link></li>
        <li> | </li>
        <li><Link to='/add-paslon'> Paslon </Link></li>   
        <div>
            <button className='text-black bg-white rounded-full w-7' onClick={goToHome}> R </button>
          </div>
       
         </ul>
    </div>
  );
}

export default Navbar2;