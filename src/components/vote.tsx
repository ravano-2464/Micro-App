import React from 'react';
import Navbar from './navbar.tsx';
import Footer from './footer.tsx';
import hirohito from '../assets/images/hirohito.jpg';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const Vote: React.FC = () => {
    const navigate = useNavigate();
    
    const goToSModal = () => {
        navigate('/modal');
    };

    const data = [
        { name: 'SOEHARTO', value: 25, color: '#4682B4' },
        { name: 'ADOLF HITLER', value: 45, color: '#FFD700' }, 
        { name: 'HIROHITO', value: 78, color: '#FF5733' } 
    ];

    return (
        <>
            <Navbar />
            <div className="relative body">
                <div className="p-8 bg-white max-w-[900px] mx-auto ">
                    <div className="py-2 text-5xl font-black text-center text-lime">
                        <h1>INFO PEMILU TER-UPDATE</h1>
                        <br />
                        <label>Hasil :</label>
                    </div>
                    <div className="flex justify-center items-center mb-20">
                        <ResponsiveContainer width="80%" height={400}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    label={({ name }) => `${name} (${data.find(item => item.name === name)?.value}%)`} 
                                >
                                    {
                                        data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))
                                    }
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-col items-center gap-4 mt-7 md:flex-col md:justify-between">
                        <div className="flex flex-row w-[657px] p-4 bg-red-400 shadow-red-400 shadow-lg rounded-2xl h-[146px]">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white ">No. Paslon 3</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-red-800 ">
                                <h1>HIROHITO</h1>
                                <h1>78%</h1>
                            </div>
                        </div>
                        <div className="flex flex-row w-[657px] p-4 bg-amber-300 shadow-amber-300 shadow-lg mt-7 rounded-2xl h-[146px]">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white ">No. Paslon 1</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-red-800 ">
                                <h1>ADOLF HITLER</h1>
                                <h1>45%</h1>
                            </div>
                        </div>
                        <div className="flex flex-row w-[657px] p-4  bg-sky-400 shadow-sky-400  shadow-lg mt-7 rounded-2xl h-[146px]">
                            <div className="flex items-center w-[80px] text-center bg-red-900 border-4 rounded-md h-[112px] border-box">
                                <p className="text-xl font-bold text-white ">No. Paslon 2</p>
                            </div>
                            <div className="ml-[30px] text-4xl font-black text-left text-red-800 ">
                                <h1>SOEHARTO</h1>
                                <h1>25%</h1>
                            </div>
                        </div>
                        <div className="bgc2 flex justify-center w-[466px] p-4 rounded-lg mt-10 font-bold hover:bg-lime-700">
                            <button onClick={goToSModal} className="text-[32px] text-center">MASUKAN SUARAMU</button>
                        </div>
                        <br />
                    </div>
                    <div className="flex justify-center items-center h-[650px] bg-slate-300">
                        <div>
                            <h2 className="mt-10 mb-2 text-5xl font-black text-center text">INFO PASLON</h2>
                            <div className="flex flex-row justify-center mx-auto mt-10 p-4 bg-white rounded-lg shadow-md w-[650px] h-[494]">
                                <div className="mt-6 img">
                                    <img src={hirohito} alt="hirohito" />
                                </div>
                                <div className="flex flex-col ml-10">
                                    <p className="mb-2 font-bold -lg">Nomor Urut : 1</p>
                                    <p className="mb-4 text-3xl font-bold">HIROHITO</p>
                                    <h3 className="mb-2 font-bold">Visi & Misi :</h3>
                                    <ul className="mb-4 text-lg list-disc list-inside">
                                        <li>Memindahkan Indonesia ke Isekai.</li>
                                        <li>Nonton anime 3x sehari.</li>
                                        <li>Melakukan peresapan pada budaya jepang.</li>
                                    </ul>
                                    <h3 className="mb-2 text-lg font-bold">Koalisi :</h3>
                                    <ul className="text-lg list-disc list-inside">
                                        <li>Partai Persatuan Wiboo.</li>
                                        <li>Partai Redbull.</li>
                                        <li>Partai Black Magic.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
    );
}

export default Vote;