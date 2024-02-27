import React, { useState } from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    // State untuk menyimpan data form
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // Handler untuk mengubah data form saat input berubah
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler untuk mengirim form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // Kirim data ke server atau lakukan operasi lainnya di sini
    };

    const navigate = useNavigate();
    const ListPartai = () => {
        navigate('/home');
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

    return (
        <>
            <div>
                <h1 className="text-5xl font-black mb-4 text mt-10 text-center">LOGIN</h1>
            </div>
            <div className="flex flex-row justify-center mt-20 ">
            <form onSubmit={handleSubmit} className="space-y-4 mb-20">
                <div>
                    <label htmlFor="username" className="block font-medium">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-[478px] h-[70px] border-black border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-[478px] h-[70px] border-black border rounded-md"
                    />
                </div>
                <button type="submit" className="bgc2 w-[478px] h-[68px] py-2 font-bold text-3xl text-white  rounded-md hover:bg-lime-500" onClick={ListPartai} >Submit</button>
                <p className='italic'> Belum memiliki akun? <a className='text-cyan-600 font-medium underline' href='/register'>Register</a></p>

            </form>
           
                
</div>

        </>
    );
};
export default Login;