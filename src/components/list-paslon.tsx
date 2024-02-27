import Navbar2 from "./navbar2";
import React from "react";

const ListPaslon: React.FC = () => {
  const data = [
    {
      no: 1,
      image: 'src/assets/images/hitler.jpg',
      name: 'ADOLF HITLER',
      visimisi: '',
      koalisi: '',
    },

  ];

  return (
    <>
      <Navbar2 />
      <div className="flex justify-center text text-5xl font-black mt-20">
        <h1>LIST PASLON</h1>
      </div>
      <div className="flex overflow-x-auto mx-auto mt-10">
        <table className="table-auto w-[1095px] h-[153px] mx-auto divide-y divide-gray-200 border-collapse border border-slate-900">
          <thead>
            <tr>
              <th className="bg-slate-200  -px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">No.Urut</th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">Image</th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">Name</th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600 w-[325px] h-[113px]">Visi Misi </th>
              <th className=" bg-slate-200 px-6 py-3 text-left text-l font-black text-black uppercase tracking-wider border border-slate-600">Koalisi </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.no}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-700"><img src={item.image} className="h-[94px] w-[78px] object-cover rounded-lg" /> </td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.visimisi}
                <div className="flex flex-col ">
                  <p>1.Mengadakan Perang Dunia Ketiga Tiap Hari  {item.visimisi}</p>
                  <p>2.Mengadakan Romusha di Indonesia {item.visimisi}</p>
                  <p>3.Mengadapan Perang Secara GRATIS tanpa batas {item.visimisi}</p>
                </div></td>
                <td className="px-6 py-4 whitespace-nowrap border border-slate-700">{item.koalisi}
                <div className="flex flex-col ">
                  <p>1.Partai NAZI{item.koalisi}</p>
                  <p>2.Partai PKI {item.koalisi}</p>
                  <p>3.Partai Taisei{item.koalisi}</p>
                </div></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )

}

export default ListPaslon;