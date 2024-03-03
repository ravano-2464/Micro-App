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

const hirohito = 78;
const hitler = 45;
const soeharto = 25;

export const data = {
  labels: ['Hirohito', 'Hitler', 'Soeharto'],
  datasets: [
    {
      data: [hirohito, hitler, soeharto],
      label: '% of Total Votes',
      backgroundColor: [
        'rgb(234,112,112)',
        'rgb(245,210,76)',
        'rgb(96,190,248)',
      ],
      borderColor: [
        'rgb(234,112,112)',
        'rgb(245,210,76)',
        'rgb(96,190,248)',
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
        'Menghancurkan Musuh-Musuh Politik Dan Ideologis Jerman, Baik Di Dalam Negeri Maupun Di Luar Negeri, Untuk Memastikan Dominasi Jerman Di Eropa Dan Mencapai Tujuan-Tujuan Ekspansionisnya.',
      ],
      koalisi: ['Partai Pekerja Jerman.', 'Partai Sosialis Nasional Jerman.', 'Partai Liga Pejuang Nasional Sosialis.'],
      image: Hitler,
    },
    {
      id: 2,
      name: 'SOEHARTO',
      visiMisi: [
        'Menciptakan Stabilitas Politik Yang Kokoh Dengan Menjaga Keamanan Dan Ketertiban Dalam Negeri Serta Memperkuat Posisi Indonesia di Kancah Internasional.',
        'Menggerakkan Ekonomi Indonesia Menuju Pertumbuhan Yang Berkelanjutan Melalui Kebijakan Pembangunan Ekonomi, Investasi, Dan Pembangunan Infrastruktur.',
        'Menanggulangi Kemiskinan Dengan Program-Program Pembangunan Sosial Dan Ekonomi Yang Bertujuan Untuk Meningkatkan Kesejahteraan Masyarakat Secara Umum.',
      ],
      koalisi: ['Partai GOLKAR.', 'Partai Persatuan Pembangunan (PPP).', 'Partai Demokrasi Indonesia Perjuangan (PDI-P).'],
      image: Soeharto,
    },
    {
    id: 3,
    name: 'HIROHITO',
    visiMisi: [
      'Mengadakan Perang Dunia Ketiga.',
      'Mengadakan Tanam Paksa Dan Kerja Paksa(Romusha) Secara Bersamaan Dan Dilakukan Setiap Hari.',
      'Mengadakan Kamikaze(Bom Bunuh Diri) Untuk Kalangan Tentara Jepang.',
    ],
    koalisi: ['Partai Taisei.', 'Partai Liberal Jepang.', 'Partai Sosial Demokrat.'],
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
                    <div className='mt-28 w-96'>
                        <h1 className='flex flex-row mb-16 text-4xl font-black ml-36'>Hasil:</h1>
                        <Pie data={data} />
                    </div>
                    <div className="flex flex-row gap-4 mx-auto mt-7 md:flex-col md:justify-between">
                        <div className="flex w-[657px] p-4 bg-red-400 shadow-red-400 shadow-lg rounded-2xl h-[]146px">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white">No. Paslon 3</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-red-800">
                                <h1>HIROHITO</h1>
                                <h1>78%</h1>

                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mx-auto mt-7 md:flex-col md:justify-between"></div>
                        <div className="flex w-[657px] p-4 bg-amber-300 shadow-amber-300 shadow-lg mt-7 rounded-2xl h-[]146px">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white">No. Paslon 1</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-yellow-800">
                                <h1>ADOLF HITLER</h1>
                                <h1>45%</h1>

                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mx-auto mt-7 md:flex-col md:justify-between"></div>
                        <div className="flex flex-row w-[657px] p-4  bg-sky-400 shadow-sky-400  shadow-lg mt-7 rounded-2xl h-[]146px">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white">No. Paslon 2</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-green-800 ">
                                <h1>SOEHARTO</h1>
                                <h1>25%</h1>

                            </div>
                        </div>
                        </div>
                        </div>
                        <div className='flex justify-center'>
                        <div className="bgc2 flex justify-center w-[466px] p-4 text-[32px] h-[67px] rounded-lg mt-10 font-bold hover:bg-lime-700">
                            <button onClick={goToSModal}>MASUKAN SUARAMU</button>
                        </div>
                        </div>
                        <div className="h-[700px] w-full bg-gray-300 flex-row">
  <h2 className="mt-10 mb-2 text-5xl font-black text-center text">INFO PASLON</h2>
  <Slider {...settings} className='flex flex-row bg-white w-[900px] mx-auto mt-10 border rounded-lg'>
    {candidates.map((candidate) => (
      <div key={candidate.id} className='flex flex-col items-center'>
        <div className='flex flex-row items-center'>
          <div className="mt-10 mb-10 ml-10 ">
            <img src={candidate.image} className='h-[300px]' />
          </div>
          <div className='ml-20'>
            <p className="mb-2 font-bold -lg">Nomor Urut: {candidate.id}</p>
            <p className="mb-4 text-3xl font-bold">{candidate.name}</p>
            <div> 
              <h3 className="mb-2 font-bold text-">Visi & Misi:</h3>
              <ul className="mb-4 text-lg list-disc list-inside">
                {candidate.visiMisi.map((visiMisi, index) => (
                  <li key={index}>{visiMisi}</li>
                ))}
              </ul>
            </div>
            <div> 
              <h3 className="mb-2 text-lg font-bold">Koalisi:</h3>
              <ul className="text-lg list-disc list-inside">
                {candidate.koalisi.map((koalisi, index) => (
                  <li key={index}>{koalisi}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

                    <div className="flex justify-center text-4xl font-bold text-center text-red-600 py-28">

                        <h1>
                            PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
                            <br />YANG PENTING TIDAK MELEGALKAN SLOT
                        </h1>


                    </div>
                </div>

            </div>
            <Footer />
        </>
    )

}
export default Vote;