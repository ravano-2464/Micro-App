import "../index.css";
import { Link } from 'react-router-dom';
import Dumbways from "../assets/images/dumbways.png";
import Background from "../assets/images/rtl.png";
import Kotak from "../assets/images/kotak.png";
import KPU from "../assets/images/KPU.png";

const Content: React.FC = () => {
  return (
    <section className="gradient mt-10 rounded-2xl pb-10">
      <div className="body content pt-28">
        <div className="relative">
          <img src={Background} alt="Background" />
          <div className="absolute top-0 left-0">
            <img className="h-64 w-96 opacity-50" src={Dumbways} alt="Dumbways" />
          </div>
          <div className="absolute top-0 right-24">
            <img className="w-80 h-96" src={Kotak} alt="Kotak Suara" />
          </div>
          <div className="absolute left-6 bottom-10">
            <h1 className="text-6xl font-bold text-white">SELAMAT DATANG</h1>
            <p className="text-2xl font-bold text-white">
              PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR <br /> DIPILIH MELALUI
              SEBUAH ARTI NAMA
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 px-32 py-24 ">
          <div className="relative col-span-2 bg-gradient-to-b from-gray-500 to-black">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute px-5 py-2 text-xl font-semibold text-white bottom-24 left-4 red-KPU rounded-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold text-white">
                
<Link to="/detail">KPU TETAPKAN 3 MENTOR TERBAIK</Link>
                </h1>
                <p className="text-2xl font-light text-white">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute px-2 py-2 text-xl font-semibold text-white bottom-32 left-4 red-KPU rounded-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute px-2 py-2 text-xl font-semibold text-white bottom-32 left-4 red-KPU rounded-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute px-2 py-2 text-xl font-semibold text-white bottom-32 left-4 red-KPU rounded-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white h-96">
            <img src={KPU} alt="KPU" />
            <div className="">
              <div className="absolute px-2 py-2 text-xl font-semibold text-white bottom-32 left-4 red-KPU rounded-xl">
                SENIN, 03 JAN 2023
              </div>
              <div className="absolute bottom-4 left-4">
                <h1 className="text-3xl font-bold">
                  KPU TETAPKAN 3 MENTOR TERBAIK
                </h1>
                <p className="text-2xl">Super Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-4xl font-bold text-center py-28">
        <h1>
          PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK <br /> YANG JELAS
          PASTIKAN MEREKA TIDAK MEMILIKI VISI <br /> MISI UNTUK MELEGALKAN SLOT
        </h1>
      </div>
    </>
  );
};

export default Content;