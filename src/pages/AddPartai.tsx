import { ChangeEvent, useState } from "react";
import Hacker from "../assets/images/hacker.jpg";
import Label from "../components/Elements/Input/Label";
import Navbar from "../components/Fragments/Navbar";
import DataListAdmin from "../data/dataListAdmin.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../components/Elements/Input/Input";

const AddPartai = () => {
  const [value, setValue] = useState({
    parties_name: "",
    parties_chairman: "",
    vision_mission: "",
    parties_address: "",
    parties_image: "",
  });
  const navigate = useNavigate();

  const saveParties = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/parties", value);

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

  return (
    <div>
      <Navbar textNav="PEMILU PRESIDEN DUMBWAYS.ID" listItem={DataListAdmin}/>

      <main className="flex items-center justify-center flex-col">
        <h1 className="text-[48px] font-[700] mt-[50px] text-login">
          ADD PARTAI
        </h1>
        <div className="flex gap-[50px] w-[1140px] px-[100px] bg-white pt-[15px] mt-[50px] mb-[20px]">
          <div>
            <img
              className="w-[500px] h-[640px]"
              src={Hacker}
              alt="Foto Partai Paslon"
            />
          </div>

          <div className="w-[500px]">
            <form onSubmit={saveParties}>
              <div className="flex flex-col gap-[20px] mb-[50px]">
                <div>
                  <Label text="Nama" htmlfor="nama" />
                  <Input
                    placeholder=""
                    onchange={getInput}
                    type="text"
                    name="parties_name"
                    id="parties_name"
                  />
                </div>

                <div>
                  <Label text="Ketua Umum" htmlfor="ketum"/>
                  <Input
                    placeholder=""
                    onchange={getInput}
                    type="text"
                    name="parties_chairman"
                    id="parties_chairman"
                  />
                </div>

                <div>
                  <Label text="Image" htmlfor="image"/>
                  <Input
                    placeholder=""
                    onchange={getInput}
                    type="text"
                    name="parties_image"
                    id="parties_image"
                  />
                </div>

                <div>
                  <Label text="Visi Misi" htmlfor="visimisi"/>
                  <input
                    type="text"
                    name="vision_mission"
                    id="visimisi"
                    onChange={getInput}
                    className="border-solid border-[2px] h-[120px] border-black rounded-[10px] text-[14px] w-full px-[5px] pb-[75px] py-[5px] placeholder: opacity-50"
                  />
                </div>

                <div>
                  <Label text="Alamat" htmlfor="alamat"/>
                  <input
                    type="text"
                    name="parties_address"
                    id="address"
                    onChange={getInput}
                    className="border-solid border-[2px] h-[120px] border-black rounded-[10px] text-[14px] w-full px-[5px] pb-[75px] py-[5px] placeholder: opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-[10px] bg-login px-[5px] py-[2px] w-full text-white font-bold text-[32px]"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddPartai;