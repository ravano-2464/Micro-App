import Button from "../components/Elements/Button/Button";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";
import React, { useState } from "react";
import Hitler from '../assets/images/hitler.jpg';
import Hirohito from '../assets/images/hirohito.jpg';
import Soeharto from '../assets/images/soeharto.jpg';
import Modal from "../components/Fragments/Modal";
import Chart from "../components/Fragments/Chart";
import Carousel from "../components/Fragments/Carousel";
import DataVotePaslon from "../data/dataVotePaslon.json";
import DataListUser from "../data/dataListUser.json";

const Vote = () => {
  const [openVote, setOpenVote] = useState(false);
  const [pilih, setPilih] = React.useState<boolean>(false);

  const voting = () => {
    setPilih(!pilih);
    setOpenVote(false);
  };

  return (
    <div>
      <body className="bg-white">
        <Navbar textNav="PEMILU PRESIDEN DUMBWAYS.ID" listItem={DataListUser} />

        <main className="flex items-center justify-center flex-col">
          <h1 className="text-[48px] font-[700] mt-[50px] text-login">
            INFO PEMILU TERUPDATE
          </h1>
          <div className="flex justify-center items-center gap-[50px] w-full bg-white pt-[15px] mt-[50px] mb-[50px]">
            <div className="flex flex-col items-center justify-center gap-[30px] w-[375px]">
              <p className="text-[40px] text-black font-[900]">Hasil :</p>

              <Chart />
            </div>

            <div className="flex flex-col gap-[30px]">
              <div className="bg-chart1 w-[657px] h-[146px] rounded-[15px] flex items-center gap-[30px] px-[30px]">
                <div className="bg-colorpaslon3 w-[80px] h-[112px] rounded-[10px] p-[10px] text-center border-white border-[2px]">
                  <p className="text-[16px] font-[700] text-white">No.</p>
                  <p className="text-[16px] font-[700] text-white">Paslon</p>
                  <p className="text-[32px] font-[700] text-white">3</p>
                </div>

                <div>
                  <p className="text-colorpaslon3 text-[40px] font-[900] text-outline">
                    HIROHITO
                  </p>
                  <p className="text-[36px] font-[700] text-colorpaslon3 text-outline">
                    78%
                  </p>
                </div>
              </div>

              <div className="bg-chart2 w-[657px] h-[146px] rounded-[15px] flex items-center gap-[30px] px-[30px]">
                <div className="bg-login w-[80px] h-[112px] rounded-[10px] p-[10px] text-center border-white border-[2px]">
                  <p className="text-[16px] font-[700] text-white">No.</p>
                  <p className="text-[16px] font-[700] text-white">Paslon</p>
                  <p className="text-[32px] font-[700] text-white">1</p>
                </div>

                <div>
                  <p className="text-login text-[40px] font-[900] text-outline">
                    ADOLF HITLER
                  </p>
                  <p className="text-[36px] font-[700] text-login text-outline">
                    45%
                  </p>
                </div>
              </div>

              <div className="bg-chart3 w-[657px] h-[146px] rounded-[15px] flex items-center gap-[30px] px-[30px]">
                <div className="bg-colorpaslon1 w-[80px] h-[112px] rounded-[10px] p-[10px] text-center border-white border-[2px]">
                  <p className="text-[16px] font-[700] text-white">No.</p>
                  <p className="text-[16px] font-[700] text-white">Paslon</p>
                  <p className="text-[32px] font-[700] text-white">2</p>
                </div>

                <div>
                  <p className="text-colorpaslon1 text-[40px] font-[900] text-outline">
                    SOEHARTO
                  </p>
                  <p className="text-[36px] font-[700] text-colorpaslon1 text-outline">
                    25%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[170px] mb-[50px]">
            {pilih === false ? (
              <button
                className="rounded-[10px] bg-login px-[20px] py-[5px] text-white font-bold text-[32px] hover:bg-white  hover:text-login border-2 border-login transition-all"
                onClick={() => setOpenVote(true)}
              >
                MASUKKAN SUARAMU
              </button>
            ) : (
              <p className="uppercase text-text-merah text-[32px] font-[700] ">
                Anda sudah memilih !!!
              </p>
            )}
          </div>
          <Modal open={openVote} onClose={() => setOpenVote(false)}>
            <div className=" flex items-center justify-center flex-col">
              <div className="w-[1000px] bg-white mt-[10px] px-[20px] pb-[10px] rounded-[20px] ">
                <h1 className="text-[32px] font-[700] text-login text-center">
                  MASUKAN PILIHANMU
                </h1>

                <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
                  {DataVotePaslon.map((item, index) => (
                    <div key={index} className="col-span-1 relative">
                      <div className="absolute top-0 right-0 flex items-center justify-center w-[70px] h-[70px] mx-auto mb-10 bg-dashboard1 border-8 border-login rounded-full text-center text-login text-[30px] font-bold">
                        {item.noUrut}
                      </div>
                      <div className="bg-thead hover:bg-dashboard1 duration-300 rounded-xl p-6">
                        <div className="mb-2">
                          <img
                            src={item.fotoPaslon}
                            className="w-full h-[500px] rounded-xl"
                            alt="Foto Paslon"
                          />
                        </div>
                        <div className="">
                          <p className="font-[900] text-[20px] text-login">
                            {item.namaPaslon}
                          </p>
                          <p className="text-[14px] font-[500]">
                            {item.visiMisi}
                          </p>
                          <p className="text-[14px] font-[700]">
                            Partai Pengusung:
                          </p>
                          <ul className="text-[14px] font-[400] list-disc ps-[40px]">
                            <li>{item.koalisi[0]}</li>
                            <li>{item.koalisi[1]}</li>
                            <li>{item.koalisi[2]}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* <div className="col-span-1 relative">
                    <div className="absolute top-0 right-0 flex items-center justify-center w-[70px] h-[70px] mx-auto mb-10 bg-dashboard1 border-8 border-login rounded-full text-center text-login text-[30px] font-bold">
                      1
                    </div>
                    <div className="bg-dashboard1 rounded-xl p-6">
                      <div className="mb-2">
                        <img
                          src={Ravano}
                          className="w-full h-[200px] rounded-xl"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="font-[900] text-[20px] text-login">
                          Ravano
                        </p>
                        <p className="text-[14px] font-[500]">
                          Memindahkan manusia ke isekai
                        </p>
                        <p className="text-[14px] font-[700]">
                          Partai Pengusung:
                        </p>
                        <ul className="text-[14px] font-[400] list-disc ps-[40px]">
                          <li>Partai Persatuan Wiboo.</li>
                          <li>Partai Redbull.</li>
                          <li>Partai Black Magic.</li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="flex w-full justify-center items-center gap-[30px] mb-[10px] mt-[20px]">
                <Button
                  lgnBtn="w-[400px] bg-white border-2 border-login hover:bg-login hover:text-white  text-login text-[20px] font-[700] px-8 py-1 rounded-[10px] transition-all"
                  text="RESET"
                />

                <button
                  onClick={voting}
                  className="w-[400px] bg-login hover:bg-white  hover:text-login border-2 border-login text-white text-[20px] font-[700] px-8 py-1 rounded-[10px] transition-all"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </Modal>
        </main>

        <div className="bg-body w-full flex items-center justify-center ">
          <div className="mt-[50px] mb-[80px] h-[850px] w-[1140px] bg-body">
            <p className="text-login text-[48px] font-[900] text-center ">
              INFO PASLON
            </p>

            <Carousel />
          </div>
        </div>

        <div>
          <div className="w-full h-[384px] bg-white flex justify-center items-center px-[120px]">
            <p className="text-[40px] font-bold text-center text-date">
              PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK
              MELEGALKAN SLOT
            </p>
          </div>
        </div>

        <Footer />
      </body>
    </div>
  );
};

export default Vote;