import React from "react";
import Navbar from './navbar.tsx';
import Footer from './footer.tsx';
import KPU from '../assets/images/KPU.png'
import "../index.css";


const Detail: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="relative body">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 bg-white "> 
                     <div className="flex items-center mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                         </svg>
                        <p  ><a href="/"> Beranda </a> </p>
                            <h1 className="flex m-0 mx-auto ml-64 ">BERITA HARI INI</h1>
                        </div>
                        <h1 className="mt-5 text-2xl font-bold text-center text">KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK</h1>
                        <h3 className="text-center">Super Admin</h3>
                        <h3 className="text-center">Senin, 03 Jan 2023</h3>
                        <img className="block max-w-full mx-auto mb-8 mt-7" src={KPU} alt="KPU" />
                        <div className="mb-16 font-medium font-inter">
                            <p >Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti. Sed interdum, lacus ac ultrices facilisis, ligula enim pellentesque elit, vel varius nisi odio at purus. Sed suscipit purus quis tortor posuere, in varius est euismod. Mauris aliquam urna non elit faucibus, eu fermentum turpis mattis. Quisque vel nisl vitae sapien congue dapibus. Vivamus auctor, velit ut condimentum bibendum, purus lacus scelerisque ligula, nec gravida arcu velit id libero. In hac habitasse platea dictumst.
                            </p>
                            <p >Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet mi ut turpis malesuada aliquam a eu orci. Maecenas ut purus eu sapien vestibulum vulputate. Fusce tincidunt fringilla arcu, non efficitur sapien scelerisque et. Maecenas facilisis eros id enim tincidunt, ac vestibulum quam fringilla. Nullam vel malesuada mi, vitae convallis libero. In hac habitasse platea dictumst. Duis cursus nunc vel metus rhoncus, id cursus justo imperdiet. Integer vitae ex ac libero fermentum volutpat ut vitae sapien. Aliquam id luctus nisl. Curabitur et augue ut justo tincidunt varius vel sit amet nunc. Integer tincidunt risus sit amet odio euismod, a finibus ligula blandit. Integer euismod, purus ut malesuada varius, lectus orci feugiat massa, ut egestas enim massa vel urna.
                            </p>
                            <p >
                                Vivamus id dictum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Curabitur aliquet ligula eu nisl bibendum, vel tincidunt justo feugiat. Nam dapibus, ligula id dapibus fermentum, odio libero luctus nunc, et scelerisque sapien libero vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu massa. Nullam fermentum, felis ac bibendum malesuada, lectus felis fermentum dolor, a fermentum sapien mauris vel dui. Fusce vel turpis eu purus fermentum tincidunt a vel elit. Phasellus efficitur sapien vel efficitur rhoncus. Integer vel risus ut neque elementum gravida. Morbi rhoncus, ligula nec posuere tristique, ligula lacus dapibus urna, a lacinia sem metus id libero. Suspendisse luctus ligula eu mauris auctor, non semper elit feugiat.
                            </p>
                            <p >
                                Vivamus id dictum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Curabitur aliquet ligula eu nisl bibendum, vel tincidunt justo feugiat. Nam dapibus, ligula id dapibus fermentum, odio libero luctus nunc, et scelerisque sapien libero vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu massa. Nullam fermentum, felis ac bibendum malesuada, lectus felis fermentum dolor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Detail
