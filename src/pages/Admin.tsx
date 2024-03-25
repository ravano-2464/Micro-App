import Navbar from "../components/Fragments/Navbar";
import Hitler from '../assets/images/hitler.jpg';
import Hirohito from '../assets/images/hirohito.jpg';
import Soeharto from '../assets/images/soeharto.jpg';
import DataListAdmin from "../data/dataListAdmin.json";
import DataListVoter from "../data/dataListVoter.json";

const Admin = () => {
  return (
    <div>
      <body bg-white>
        <Navbar textNav="DASHBOARD PEMILU" listItem={DataListAdmin} />

        <main className="flex items-center justify-center flex-col my-[50px]">
          <h1 className="text-[48px] font-[700] text-login">DASHBOARD</h1>

          <div className="grid grid-cols-3 gap-[30px] mt-[50px]">
            <div className="col-span-1 ">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-10 bg-dashboard1 border-8 border-login rounded-full text-center text-login text-[40px] font-bold">
                1
              </div>
              <div className="bg-dashboard1 rounded-xl p-6 shadow-xl shadow-neutral-400">
                <div className="mb-2">
                  <img
                    src={Hitler}
                    className="w-full h-60 rounded-xl"
                    alt="Adolf Hitler"
                  />
                </div>
                <div className="">
                  <p className="font-[900] text-[40px] text-login text-outline">
                    ADOLF HITLER
                  </p>
                  <p className="text-login text-[20px] font-[500]">
                    Akumulasi: 45%
                  </p>
                  <p className="text-login text-[20px] font-[500]">
                    Jumlah Vote: 117 Voters
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 ">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-10 bg-dashboard2  border-8 border-nopas2 rounded-full text-center text-nopas2 text-[40px] font-bold">
                2
              </div>
              <div className="bg-dashboard2 rounded-xl p-6 shadow-xl shadow-neutral-400">
                <div className="mb-2">
                  <img
                    src={Soeharto}
                    className="w-full h-60 rounded-xl"
                    alt="Soeharto"
                  />
                </div>
                <div className="">
                  <p className="font-[900] text-[40px] text-nopas2 text-outline">
                    SOEHARTO
                  </p>
                  <p className="text-nopas2 text-[20px] font-[500]">
                    Akumulasi: 25%
                  </p>
                  <p className="text-nopas2 text-[20px] font-[500]">
                    Jumlah Vote: 300 Voters
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 ">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-10 bg-dashboard3 border-8 border-colorpaslon3 rounded-full text-center text-colorpaslon3  text-[40px] font-bold">
                3
              </div>
              <div className="bg-dashboard3 rounded-xl p-6 shadow-xl shadow-neutral-400">
                <div className="mb-2">
                  <img
                    src={Hirohito}
                    className="w-full h-60 rounded-xl"
                    alt="Hirohito"
                  />
                </div>
                <div className="">
                  <p className="font-[900] text-[40px] text-colorpaslon3 text-outline">
                    HIROHITO
                  </p>
                  <p className="text-colorpaslon3 text-[20px] font-[500]">
                    Akumulasi: 78%
                  </p>
                  <p className="text-colorpaslon3 text-[20px] font-[500]">
                    Jumlah Vote: 117 Voters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="bg-body h-[450px]">
          <div className="w-full flex flex-col items-center ">
            <h1 className="text-[48px] font-[700] my-[30px] text-login text-center">
              LIST VOTER
            </h1>
            <table className="text-left border border-collapse table-auto border-slate-400 border-spacing-x-5">
              <thead className="">
                <tr className="bg-white">
                  <th className="p-3 text-center border bg-thead border-line">
                    No
                  </th>
                  <th className="border ps-2 pe-40 bg-thead border-line">
                    Nama
                  </th>
                  <th className="border ps-2 pe-40 bg-thead border-line">
                    Alamat
                  </th>
                  <th className="border ps-2 pe-40 bg-thead border-line">
                    Jenis Kelamin
                  </th>
                  <th className="border ps-2 pe-40 bg-thead border-line">
                    Paslon
                  </th>
                </tr>
              </thead>
              <tbody>
                {DataListVoter.map((item, index) => (
                  <tr key={index} className="bg-white">
                    <td className="py-2 text-center border border-line">
                      {item.no}
                    </td>
                    <td className="border ps-2 border-line">{item.name}</td>
                    <td className="border ps-2 border-line">{item.addres}</td>
                    <td className="border ps-2 border-line">{item.gender}</td>
                    <td className="border ps-2 border-line">{item.paslon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className=" text-[24px] font-[700] ps-[185px] mt-[20px]">
            TOTAL SUARA TERKUMPUL : 1000 Voters
          </p>
        </div>
      </body>
    </div>
  );
};

export default Admin;