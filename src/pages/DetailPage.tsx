import Navbar from "../components/Fragments/Navbar";
import Headline from "../assets/images/sample-kpu.png";
import Footer from "../components/Fragments/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DataListUser from "../data/dataListUser.json";
import DataDetailPage from "../data/dataDetailPage.json";
import { InterfaceDetailPage } from "../interfaces/interfaceDetailPage";

const DetailPage = () => {
  return (
    <div>
      <body className="bg-body">
        <Navbar textNav="PEMILU PRESIDEN DUMBWAYS.ID" listItem={DataListUser} />

        <main className="flex items-center justify-center flex-col">
          <div className="w-[1140px] px-[100px] bg-white flex flex-col items-center justify-center pt-[15px] relative">
            <div className="absolute left-[100px] top-[15px] flex items-center justify-center gap-[10px]">
              <Link to="/">
                <FaArrowLeft size="20px" />
              </Link>

              <p className="text-[20px] font-[400]">Beranda</p>
            </div>

            <p className="text-[20px] font-[400]">BERITA HARI INI</p>

            <div className="mt-[50px] text-center">
              <h1 className="text-[40px] font-[700] text-login">
                KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK
              </h1>
              <p className="text-[26px] font-[500]">Super Admin</p>
              <p className="text-[26px] font-[500]">Senin, 03 Januari 2023</p>
            </div>

            <div className="w-full mt-[50px] mb-[100px]">
              <img
                className="w-full h-[530px] mb-[50px]"
                src={Headline}
                alt="Headline"
              />

              {DataDetailPage.map((item: InterfaceDetailPage) => (
                <p className="text-[24px] font-[500] mb-[30px] text-justify">
                  {item.data}
                </p>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </body>
    </div>
  );
};

export default DetailPage;
