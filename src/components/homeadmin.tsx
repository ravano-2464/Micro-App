import Navbar2 from './navbar2.tsx';
import hitler from '../assets/images/hitler.jpeg';
import hirohito from '../assets/images/hirohito.jpg';
import soeharto from '../assets/images/soeharto.jpg';

const Admin: React.FC = () => {

  const data = [
    { no: 1, nama: 'Park Seo Joon', alamat: 'Itaewon', jenisKelamin: 'Laki-laki', paslon: 'Shim Jae Yoon'  },
    { no: 2, nama: 'Lee Dong Wook', alamat: 'Seoul', jenisKelamin: 'Laki-laki', paslon: 'Shim Jae Yoon' },
    { no: 3, nama: 'Ning Ning', alamat: 'Harbin', jenisKelamin: 'Perempuan',  paslon: 'Lee Heesung' },
    { no: 4, nama: 'Kim Mingyu', alamat: 'Daegu', jenisKelamin: 'Laki-laki',  paslon: 'Yang Jungwon'  },
  ];

  return (
    <>
      <Navbar2 />
      <div className="relative">
        <div className="flex flex-col mt-10 text-5xl font-black text-center text ">
          <h1>DASHBOARD</h1>
        </div>
        <div className="flex flex-row items-center justify-center mt-10 space-x-96">
          <h1 className="w-20 h-20 text-6xl font-bold text-center bg-yellow-300 border border-8 border-yellow-500 rounded-full">1</h1>
          <h1 className="w-20 h-20 text-6xl font-bold text-center border border-8 rounded-full bg-cyan-300 border-cyan-700">2</h1>
          <h1 className="w-20 h-20 text-6xl font-bold text-center bg-red-400 border border-8 border-red-900 rounded-full">3</h1>
        </div>
        <div className="flex justify-between w-full mt-10 space-x-3">
          <div className="p-4 bg-yellow-300 shadow-md rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center border rounded-lg">
                <img src={hirohito} alt="hirohito" />
              </div>
            </div>
            <h2 className="ml-4 text-xl font-bold">HIROHITO</h2>
            <p className="mb-4 text-lg">Akumulasi :78% 
             <br />  Jumlah Vote : 400 Voters
            </p>
          </div>
          <div className="p-4 shadow-md bg-cyan-300 rounded-xl ">
            <div className="flex items-center justify-between ">
              <div className="flex items-center border rounded-lg">
                <img src={soeharto} alt="soeharto" />
              </div>
            </div>
            <h2 className="ml-4 text-xl font-bold">ADOLF HITLER</h2>
            <p className="mb-4 text-lg">Akumulasi :45%
              <br /> Jumlah Vote : 350 Voters</p>
          </div>
          <div className="p-4 bg-red-400 shadow-md rounded-xl ">
            <div className="flex items-center justify-between">
              <div className="flex items-center border rounded-lg">
                <img src={hitler} alt="hitler" />
              </div>
            </div>
            <h2 className="ml-4 text-xl font-bold">SOEHARTO</h2>
            <p className="mb-4 text-lg">Akumulasi :25%
              <br />Jumlah Vote : 250 Voters</p>
          </div>
        </div>
        <div className="w-full mt-20 bg-zinc-200 h-[450px]">
          <div className="flex justify-center text-5xl font-black text-black text center">
            <h1>LIST VOTER</h1>
          </div>
          <div className="flex mx-auto mt-10 overflow-x-auto">
            <table className="table-auto table-auto w-[875px] h-[200px] mx-auto divide-y divide-gray-200 border-collapse border border-slate-900">
              <thead>
                <tr>
                  <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border text-l border-slate-600">No</th>
                  <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border text-l border-slate-600">Nama</th>
                  <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border text-l border-slate-600">Alamat</th>
                  <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border text-l border-slate-600">Jenis Kelamin</th>
                  <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border text-l border-slate-600">Paslon</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.no}</td>
                    <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.nama}</td>
                    <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.alamat}</td>
                    <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.jenisKelamin}</td>
                    <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.paslon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex w-[487px] h-[29px] mx-auto mt-4 text-2xl font-bold text-black">
            <h1>TOTAL SUARA TERKUMPUL : 1000 Voters</h1>
          </div>
        </div>
      </div>
    </>
  )
}
export default Admin;