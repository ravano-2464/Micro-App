import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "../../index.css";
import Hitler from '../../assets/images/hitler.jpg';
import Hirohito from '../../assets/images/hirohito.jpg';
import Soeharto from '../../assets/images/soeharto.jpg';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import DataCarouselPaslon from "../../data/dataCarouselPaslon.json";
import { HiRocketLaunch } from "react-icons/hi2";

const sliderSettings = {
  spaceBetween: 50,
  slidesPerView: 1,
};

const Carousel = () => {
  return (
    <Swiper {...sliderSettings}>
      <SliderButton />
      {DataCarouselPaslon.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center h-[600px]">
            <div className="bg-white w-[1000px] h-[900px] flex justify-center items-center gap-[30px] p-[50px] rounded-[10px] shadow-xl shadow-neutral-400">
              <div>
                <img
                  className="w-[800px] h-[450px]"
                  src={item.fotoPaslon}
                  alt="Profil"
                />
              </div>

              <div>
                <p className="text-[24px] font-[700]">
                  Nomor Urut: {item.noUrut}
                </p>
                <p className="text-[40px] font-[700]">{item.namaPaslon}</p>
                <p className="text-[24px] font-[400]">Visi & Misi:</p>
                <ul className="text-[24px] font-[400] list-disc ps-[40px]">
                  <li>{item.visiMisi[0]}</li>
                  <li>{item.visiMisi[1]}</li>
                  <li>{item.visiMisi[2]}</li>
                </ul>
                <p className="text-[24px] font-[400]">Koalisi:</p>
                <ul className="text-[24px] font-[400] list-disc ps-[40px]">
                  <li>{item.koalisi[0]}</li>
                  <li>{item.koalisi[1]}</li>
                  <li>{item.koalisi[2]}</li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-white text-xl font-[700] h-16 w-16 rounded-full flex items-center justify-center absolute left-0 top-[40%] z-50"
      >
        <FaAngleLeft size="50px" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-white text-xl font-[700] h-16 w-16 rounded-full flex items-center justify-center absolute right-0 top-[40%] z-50"
      >
        <FaAngleRight size="50px" />
      </button>
    </div>
  );
};