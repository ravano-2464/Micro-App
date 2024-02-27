import Navbar2 from "./navbar2";
import React from "react";




const ListPartai: React.FC = () => {
  const data = [
    {
      no: 1,
      logo: 'src/assets/images/logo.jpg',
      ketua: 'Bang Shin Hyuk',
      visimisi: '',
      alamat: 'Seoul South Korea',
    },

  ];

  return (
    <>
      <Navbar2 />
      <div className="flex justify-center text text-5xl font-black mt-20">
        <h1>LIST PARTAI</h1>
      </div>
      <div className="flex overflow-x-auto mx-auto mt-10">
        <table className="table-auto w-[1095px] h-[153px] mx-auto divide-y divide-gray-200 border-collapse border border-slate-900">
          <thead>
            <tr>
              <th className="bg-slate-200  -px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">No.Urut</th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">Logo</th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">Ketua Umum</th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600 w-[325px] h-[113px]">Visi Misi </th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">Alamat </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.no}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-700"><img src={item.logo} className="h-[94px] w-[78px] object-cover rounded-full" /> </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.ketua}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.visimisi}
                <div className="flex flex-col ">
                  <p>1.Mengadakan konser K-Pop tiap bulan dengan harga terjangkau  {item.visimisi}</p>
                  <p>2.Mengadakan Comeback di Indonesia {item.visimisi}</p>
                  <p>3.Fanmeet GRATIS tanpa batas {item.visimisi}</p>
                </div></td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.alamat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )

}

export default ListPartai;