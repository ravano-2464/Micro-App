import { ChangeEvent, useEffect, useState } from "react";
import PKI from "../assets/images/PKI.jpg";
import Label from "../components/Elements/Input/Label";
import Navbar from "../components/Fragments/Navbar";
import DataListAdmin from "../data/dataListAdmin.json";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPartai = () => {
  const [value, setValue] = useState({
    parties_name: "",
    parties_chairman: "",
    vision_mission: "",
    parties_address: "",
    parties_image: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const updateParties = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/api/v1/parties/${id}`, value);

      navigate("/listpartai");
    } catch (error) {
      console.log(error);
    }
  };

  const getInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const getPartiesById = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/parties/${id}`
      );
      setValue(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPartiesById();
  }, []);

  return (
    <div>
      <Navbar textNav="PEMILU PRESIDEN DUMBWAYS.ID" listItem={DataListAdmin} />

      <main className="flex items-center justify-center flex-col">
        <h1 className="text-[48px] font-[700] mt-[50px] text-login">
          EDIT PARTAI
        </h1>
        <div className="flex gap-[50px] w-[1140px] px-[100px] bg-white pt-[15px] mt-[50px] mb-[20px] ">
          <div>
            <img
              className="w-[368px] h-[523px]"
              src={PKI}
              alt="Foto Partai Paslon"
            />
          </div>

          <div className="w-[500px]">
            <form onSubmit={updateParties}>
              <div className="flex flex-col gap-[20px] mb-[50px] ">
                <div>
                  <Label text="Nama" htmlfor="nama" />

                  <input
                    type="text"
                    name="parties_name"
                    id="nama"
                    value={value.parties_name}
                    onChange={getInput}
                    className="border-solid border-[2px] border-black rounded-[10px] text-[14px] w-full px-[5px] py-[5px] placeholder: opacity-50"
                  />
                </div>

                <div>
                  <Label text="Ketua Umum" htmlfor="ketum" />

                  <input
                    type="text"
                    name="parties_chairman"
                    id="ketum"
                    value={value.parties_chairman}
                    onChange={getInput}
                    className="border-solid border-[2px] border-black rounded-[10px] text-[14px] w-full px-[5px] py-[5px] placeholder: opacity-50"
                  />
                </div>

                <div>
                  <Label text="Image" htmlfor="image" />
                  <input
                    type="text"
                    name="parties_image"
                    id="image"
                    value={value.parties_image}
                    onChange={getInput}
                    className="border-solid border-[2px] border-black rounded-[10px] text-[14px] w-full px-[5px] py-[5px] placeholder: opacity-50"
                  />
                </div>

                <div>
                  <Label text="Visi Misi" htmlfor="visimisi" />
                  <input
                    type="text"
                    name="vision_mission"
                    id="visimisi"
                    value={value.vision_mission}
                    onChange={getInput}
                    className="border-solid border-[2px] h-[120px] border-black rounded-[10px] text-[14px] w-full px-[5px] pb-[75px] py-[5px] placeholder: opacity-50"
                  />
                </div>

                <div>
                  <Label text="Alamat" htmlfor="alamat" />

                  <input
                    type="text"
                    name="parties_address"
                    id="address"
                    value={value.parties_address}
                    onChange={getInput}
                    className="border-solid border-[2px] h-[120px] border-black rounded-[10px] text-[14px] w-full px-[5px] pb-[75px] py-[5px] placeholder: opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-[10px] bg-login px-[5px] py-[2px] w-full text-white font-bold text-[32px]"
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditPartai;