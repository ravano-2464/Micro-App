import Navbar from "../components/Fragments/Navbar";
import Logo from "../assets/images/Nazi-Logo.png";
import { Link } from "react-router-dom";
import { FaPlus, FaRegPenToSquare } from "react-icons/fa6";
import DataListAdmin from "../data/dataListAdmin.json";
import axios from "axios";
import { useEffect, useState } from "react";

import DeletePartai from "./DeletePartai";

const ListPartai = () => {
  const [parties, setParties] = useState([]);

  const fetchParties = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/parties");
      // console.log(data);
      setParties(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchParties();
  }, []);

  return (
    <div className="bg-white">
      <Navbar textNav="PEMILU PRESIDEN DUMBWAYS.ID" listItem={DataListAdmin} />

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

          <div className="w-full max-w-[1095px] overflow-x-auto mb-[50px]">
            <table className="w-full table-fixed border-collapse border text-center">
              <thead className="border border-line bg-thead h-[40px]">
                <tr>
                  <th className=" w-[72px] border-r border-line">No. Urut</th>
                  <th className="w-[160px] border-r border-line">Logo</th>
                  <th className="w-[150px] border-r border-line">Ketua Umum</th>
                  <th className="w-[200px] border-r border-line">
                    Visi & Misi
                  </th>
                  <th className="w-[200px] border-r border-line">Alamat</th>
                  <th className="w-[200px] border-r border-line">Action</th>
                </tr>
              </thead>
              <tbody className="border borde-line">
                {parties.map((item: any, index) => (
                  <tr key={index}>
                    <td className="border border-line">{item.id}</td>
                    <td className="border border-line">
                      <img
                        src={Logo}
                        className="my-[10px] ml-[45px] w-[78px] h-[94px] rounded-[10px]"
                        alt="Logo"
                      />
                    </td>
                    <td className="border border-line">
                      <p className="text-black font-[400] text-[16px]">
                        {item.parties_chairman}
                      </p>
                    </td>
                    <td className="border border-line">
                      <ul className="text-[16px] font-[400]">
                        <p>{item.vision_mission}</p>
                      </ul>
                    </td>
                    <td className="border border-line  pl-3">
                      <p className="text-black font-[400] text-[16px]">
                        {item.parties_address}
                      </p>
                    </td>
                    <td className="border border-line">
                      <div className="flex justify-center items-center gap-[10px]">
                        <Link
                          to={`/editpartai/${item.id}`}
                          className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
                        >
                          <span className="flex items-center gap-1">
                            <FaRegPenToSquare />
                            Edit
                          </span>
                        </Link>

                        <DeletePartai {...item} setParties={fetchParties} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListPartai;