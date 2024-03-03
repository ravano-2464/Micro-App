import Navbar from './navbar.tsx';
import Footer from './footer.tsx';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Hirohito from '../assets/images/hirohito.jpg';
import Hitler from '../assets/images/hitler.jpg';
import Soeharto from '../assets/images/soeharto.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Candidate } from '../interface/carousel';
import Slider from 'react-slick';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '% of Total Votes',
      data: [78, 45, 25], 
      backgroundColor: [
        'rgb(234,112,112)',
        'rgb(96,190,248)',
        'rgb(245,210,76)',
      ],
      borderColor: [
        'rgb(234,112,112)',
        'rgb(96,190,248)',
        'rgb(245,210,76)',
      ],
      borderWidth: 1,
    },
  ],
};

const candidates: Candidate[] = [
  {
    id: 1,
    name: 'ADOLF HITLER',
    visiMisi: [
      'Menciptakan Megara Jerman Yang Otoriter Dan Diktator Dengan Kekuasaan Penuh Di Tangan Partai Nazi Di Bawah Kepemimpinan Hitler.',
      'Membangun Ekonomi Jerman Yang Kuat Dan Mandiri Melalui Pembangunan Infrastruktur, Industrialisasi, Dan Kebijakan Ekonomi Proteksionis.',
      'Melakukan peresapan pada budaya Korea Selatan.',
    ],
    koalisi: ['Partai Pekerja Jerman', 'Partai Sosialis Nasional Jerman', 'Partai Liga Pejuang Nasional Sosialis'], // Adjusted the koalisi array to match the candidates order
    image: Hitler,
  },
  {
    id: 2,
    name: 'ADOLF HITLER',
    visiMisi: [
      'Menciptakan Megara Jerman Yang Otoriter Dan Diktator Dengan Kekuasaan Penuh Di Tangan Partai Nazi Di Bawah Kepemimpinan Hitler.',
      'Nonton MV 3x sehari.',
      'Melakukan peresapan pada budaya Korea Selatan.',
    ],
    koalisi: ['Partai Pekerja Jerman', 'Partai Sosialis Nasional Jerman', 'Partai Liga Pejuang Nasional Sosialis'], // Adjusted the koalisi array to match the candidates order
    image: Hitler,
  },
  {
    id: 3,
    name: 'HIROHITO',
    visiMisi: [
      'Mengadakan Perang Dunia Ketiga.',
      'Mengadakan Tanam Paksa Dan Kerja Paksa (Romusha) Secara Bersamaan Dan Dilakukan Setiap Hari.',
      'Mengadakan Kamikaze (Bom Bunuh Diri) Untuk Kalangan Tentara Jepang.',
    ],
    koalisi: ['Partai Taisei', 'Partai Liberal Jepang', 'Partai Sosial Demokrat'],
    image: Hirohito,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  width: '50px',
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Vote: React.FC = () => {
  const navigate = useNavigate();
  const goToSModal = () => {
    navigate('/modal');
  };
  return (
    <>
      <Navbar />
      <div className="relative body">
        <div className="w-full p-8 mx-auto bg-white ">
          <div className="py-2 text-5xl font-black text-center">
            <h1>INFO PEMILU TER-UPDATE</h1>
          </div>
          <div className="flex flex-row justify-center w-full gap-4 md:w-auto md:justify-start md:gap-0 mt-7 md:mt-0">
            <div className="mt-28 w-96">
              <h1 className="flex flex-row mb-16 text-4xl font-black ml-36">Hasil:</h1>
              <Pie data={data} />
            </div>
            <div className="flex flex-row gap-4 mx-auto mt-7 md:flex-col md:justify-between">
              <div className="flex w-[657px] p-4 bg-red-400 shadow-red-400 shadow-lg rounded-2xl h-[]146px">
                {/* Remaining code for candidate display */}
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className="bgc2 flex  justify-center w-[466px] p-4 text-[32px] h-[67px] rounded-lg mt-10 font-bold  hover:bg-lime-700">
              <button onClick={goToSModal}>MASUKAN SUARAMU</button>
            </div>
          </div>
          <div className="h-[500px] w-full bg-gray-300 flex-row">
            <h2 className="mt-10 mb-2 text-5xl font-black text-center text">INFO PASLON</h2>
            <Slider {...settings} className='flex flex-row bg-white w-[900px] mx-auto mt-10 border rounded-lg'>
              {candidates.map((candidate) => (
                <div key={candidate.id} className='flex flex-col items-center'>
                  {/* Remaining code for candidate display */}
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center text-4xl font-bold text-center text-red-600 py-28">
            <h1>PILIH BERDASARKAN GACHA TIDAK USAH SERIUS <br /> YANG PENTING TIDAK MELEGALKAN SLOT</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Vote;
