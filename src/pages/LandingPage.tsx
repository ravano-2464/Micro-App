import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";
import "../index.css";
import DumbwaysLogo from "../assets/images/brandred.png";
import KotakSuara from "../assets/images/kotak-suara.png";
import SampleKpu from "../assets/images/sample-kpu.png";
import { Link } from "react-router-dom";
import DataListUser from "../data/dataListUser.json";

const LandingPage = () => {
  return (
    <div>
      <body className="bg-body">
        <Navbar textNav="PEMILU PRESIDEN DUMBWAYS.ID" listItem={DataListUser} />

        <main className="flex items-center justify-center flex-col z-10">
          <div className="w-[1140px] flex items-center justify-center">
            <div className="gradient w-full h-[516px] rounded-2xl my-12 relative">
              <img
                className="w-[342px] h-[237px] opacity-50"
                src={DumbwaysLogo}
                alt="Dumbways Logo"
              />

              <div className="mt-20 ml-7">
                <h1 className="text-[64px] text-white">SELAMAT DATANG</h1>
                <p className="text-[24px] text-white text-wrap w-[500px] ">
                  PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH
                  ARTI NAMA
                </p>
              </div>
              <img
                className="w-[286px] h-[473px] absolute right-40 top-0"
                src={KotakSuara}
                alt="Kotak Suara"
              />
            </div>
          </div>

          <div className="w-[1140px] mb-12">
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-2 relative ">
                <Link to="/detail">
                  <img className="w-[753px] h-[390px]" src={SampleKpu} alt="" />

                  <div className="bg-gradient-to-t to-transparent from-black w-[753px] h-[390px] absolute left-0 bottom-0 "></div>
                  <div className="my-[10px] mx-[10px] absolute left-0 bottom-0">
                    <button className="text-[20px] font-bold text-white bg-date py-1 px-3 rounded-[10px] ">
                      Senin, 03-Jan-2023
                    </button>
                    <p className="text-[32px] font-bold text-white leading-8 mt-[10px]">
                      KPU TETAPKAN 3 MENTOR TERBAIK
                    </p>
                    <p className="text-[24px] mt-[5px] text-white">
                      Super Admin
                    </p>
                  </div>
                </Link>
              </div>

              <div className="bg-white">
                <Link to="/detail">
                  <img src={SampleKpu} alt="Sample" />
                </Link>
                <div className="my-[10px] mx-[10px] ">
                  <button className="text-[20px] font-bold text-white bg-date py-1 px-3 rounded-[10px] ">
                    Senin, 03-Jan-2023
                  </button>
                  <p className="text-[32px] font-bold leading-8 mt-[10px]">
                    KPU TETAPKAN 3 MENTOR TERBAIK
                  </p>
                  <p className="text-[24px] mt-[5px]">Super Admin</p>
                </div>
              </div>

              <div className="bg-white">
                <Link to="/detail">
                  <img src={SampleKpu} alt="Sample" />
                </Link>

                <div className="my-[10px] mx-[10px] ">
                  <button className="text-[20px] font-bold text-white bg-date py-1 px-3 rounded-[10px] ">
                    Senin, 03-Jan-2023
                  </button>
                  <p className="text-[32px] font-bold leading-8 mt-[10px]">
                    KPU TETAPKAN 3 MENTOR TERBAIK
                  </p>
                  <p className="text-[24px] mt-[5px]">Super Admin</p>
                </div>
              </div>

              <div className="bg-white">
                <Link to="/detail">
                  <img src={SampleKpu} alt="Sample" />
                </Link>

                <div className="my-[10px] mx-[10px] ">
                  <button className="text-[20px] font-bold text-white bg-date py-1 px-3 rounded-[10px] ">
                    Senin, 03-Jan-2023
                  </button>
                  <p className="text-[32px] font-bold leading-8 mt-[10px]">
                    KPU TETAPKAN 3 MENTOR TERBAIK
                  </p>
                  <p className="text-[24px] mt-[5px]">Super Admin</p>
                </div>
              </div>

              <div className="bg-white">
                <Link to="/detail">
                  <img src={SampleKpu} alt="Sample" />
                </Link>

                <div className="my-[10px] mx-[10px] ">
                  <button className="text-[20px] font-bold text-white bg-date py-1 px-3 rounded-[10px] ">
                    Senin, 03-Jan-2023
                  </button>
                  <p className="text-[32px] font-bold leading-8 mt-[10px]">
                    KPU TETAPKAN 3 MENTOR TERBAIK
                  </p>
                  <p className="text-[24px] mt-[5px]">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div>
          <div className="w-full h-[384px] bg-white flex justify-center items-center px-[120px]">
            <p className="text-[40px] font-bold text-center">
              PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS
              PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT
            </p>
          </div>
        </div>

        <Footer />
      </body>
    </div>
  );
};

export default LandingPage;
