import Navbar2 from "./navbar2";
import React from "react";

const ListPartai: React.FC = () => {
  const data = [
    {
      no: 1,
      logo: 'src/assets/images/Nazi-Logo.png',
      ketua: 'Adolf Hitler',
      visimisi: '',
      alamat: 'Germany',
    },

  ];

  return (
    <>
      <Navbar2 />
      <div className="flex justify-center mt-20 text-5xl font-black text">
        <h1>LIST PARTAI</h1>
      </div>
      <div className="flex mx-auto mt-10 overflow-x-auto">
        <table className="table-auto w-[1095px] h-[153px] mx-auto divide-y divide-gray-200 border-collapse border border-slate-900">
          <thead>
            <tr>
              <th className="py-3 font-black tracking-wider text-left text-black uppercase border bg-slate-200 -px-6 text-l border-slate-600">No.Urut</th>
              <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border  bg-slate-200 text-l border-slate-600">Logo</th>
              <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border  bg-slate-200 text-l border-slate-600">Ketua Umum</th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600 w-[325px] h-[113px]">Visi Misi </th>
              <th className="px-6 py-3 font-black tracking-wider text-left text-black uppercase border  bg-slate-200 text-l border-slate-600">Alamat </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.no}</td>
                <td className="px-6 py-4 border whitespace-nowrap border-slate-700"><img src={item.logo} className="h-[94px] w-[94px] object-cover rounded-full" /> </td>
                <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.ketua}</td>
                <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.visimisi}
                <div className="flex flex-col ">
                  <p>1. Mengadakan Perang Dunia Ketiga Secara Terus Menerus{item.visimisi}</p>
                  <p>2. Mengadakan Kerja Paksa Dan Tanam Paksa{item.visimisi}</p>
                  <p>3. Memberikan Komisi Yang Sangat Kecil Untuk Rakyat Rendah{item.visimisi}</p>
                </div></td>
                <td className="px-6 py-4 border whitespace-nowrap border-slate-700">{item.alamat}
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