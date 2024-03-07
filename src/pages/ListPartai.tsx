import Navbar from "../components/Fragments/Navbar";
import Logo from "../assets/images/Nazi-Logo.png";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import DataListAdmin from "../data/dataListAdmin.json";

const ListPartai = () => {
  return (
    <div>
      <body className="bg-white">
        <Navbar
          textNav="PEMILU PRESIDEN DUMBWAYS.ID"
          listItem={DataListAdmin}
        />

        <main className="flex flex-col items-center">
          <div>
            <h1 className="text-[48px] font-[900] my-[50px] text-login text-center">
              LIST PARTAI
            </h1>

            <div className="flex justify-end mb-[20px]">
              <Link to="/addpartai">
                <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md">
                  <span className="flex items-center gap-1">
                    <FaPlus />
                    Partai
                  </span>
                </button>
              </Link>
            </div>

            <div className="w-full max-w-[1095px] overflow-x-auto">
              <table className="w-full table-fixed border-collapse border text-center">
                <thead className="border border-line bg-thead h-[40px]">
                  <tr>
                    <th className=" w-[72px] border-r border-line">No. Urut</th>
                    <th className="w-[183px] border-r border-line">Logo</th>
                    <th className="w-[190px] border-r border-line">
                      Ketua Umum
                    </th>
                    <th className="w-[325px] border-r border-line">
                      Visi & Misi
                    </th>
                    <th className="w-[320px] border-r border-line">Alamat</th>
                  </tr>
                </thead>
                <tbody className="border borde-line">
                  <tr>
                    <td className="border border-line pb-[90px]">1</td>
                    <td className="border border-line">
                      <img
                        src={Logo}
                        className="my-[10px] ml-[52px] w-[78px] h-[94px] rounded-[10px]"
                        alt="Logo"
                      />
                    </td>
                    <td className="border border-line pb-[90px]">
                      <p className="text-black font-[400] text-[16px]">
                        Adolf Hitler
                      </p>
                    </td>
                    <td className="border border-line pb-5">
                      <ul className="list-disc text-left ml-7 text-[16px] font-[400]">
                        <li>Mengadakan Perang Dunia Ketiga Secara Terus Menerus.</li>
                        <li>Mengadakan Kerja Paksa Dan Tanam Paksa.</li>
                        <li>Memberikan Komisi Yang Sangat Kecil Untuk Rakyat Rendah.</li>
                      </ul>
                    </td>
                    <td className="border border-line text-left pl-3 pb-[90px]">
                      <p className="text-black font-[400] text-[16px] justify-left">
                        Germany
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default ListPartai;
