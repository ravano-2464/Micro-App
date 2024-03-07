import PKI from "../assets/images/PKI.jpg";
import Label from "../components/Elements/Input/Label";
import Input from "../components/Elements/Input/Input";
import Button from "../components/Elements/Button/Button";
import Navbar from "../components/Fragments/Navbar";
import DataListAdmin from "../data/dataListAdmin.json";

const AddPartai = () => {
  return (
    <div>
      <Navbar textNav="PEMILU PRESIDEN DUMBWAYS.ID" listItem={DataListAdmin} />

      <main className="flex items-center justify-center flex-col">
        <h1 className="text-[48px] font-[700] mt-[50px] text-login">
          ADD PARTAI
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
            <form action="">
              <div className="flex flex-col gap-[20px] mb-[50px] ">
                <div>
                  <Label text="Nama" htmlfor="nama" />
                  <Input
                    placeholder="Nama Partai"
                    type="text"
                    name="text"
                    id="nama"
                    onchange={() => {}}
                  />
                </div>

                <div>
                  <Label text="Ketua Umum" htmlfor="ketum" />
                  <Input
                    placeholder="Nama Ketua Umum Partai"
                    type="text"
                    name="text"
                    id="ketum"
                    onchange={() => {}}
                  />
                </div>

                <div>
                  <Label text="Visi Misi" htmlfor="visimisi" />
                  <textarea
                    className="border-solid border-[2px] h-[120px] border-black rounded-[10px] text-[20px] w-full px-[10px] py-[10px] placeholder: opacity-50"
                    name=""
                    id=""
                    placeholder="Visi Dan Misi Partai"
                  ></textarea>
                </div>

                <div>
                  <Label text="Alamat" htmlfor="alamat" />
                  <textarea
                    className="border-solid border-[2px] h-[120px] border-black rounded-[10px] text-[20px] w-full px-[10px] py-[10px] placeholder: opacity-50"
                    name=""
                    id=""
                    placeholder="Alamat Partai"
                  ></textarea>
                </div>

                <Button
                  lgnBtn="rounded-[10px] bg-login px-[5px] py-[2px] w-full text-white font-bold text-[32px]"
                  text="SUBMIT"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddPartai;
