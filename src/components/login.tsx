import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './assets/images/Skull.ico';

interface handleAuth {
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void
    login: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function Login(props: handleAuth) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        props.login(e);
    };

    return (
        <>
            <div>
                <h1 className="mt-10 mb-4 text-5xl font-black text-center text">LOGIN</h1>
            </div>
            <div className="flex flex-row justify-center mt-20 ">
                <form onSubmit={handleSubmit} className="mb-20 space-y-4 ">
                    <div>
                        <label htmlFor="username" className="block font-medium">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder='type your username'
                            onChange={props.handle}
                            className="w-[478px] h-[70px] border-black border rounded-md text-center"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='type your password'
                            onChange={props.handle}
                            className="w-[478px] h-[70px] border-black border rounded-md text-center"
                        />
                    </div>
                    <button type="submit" className="bgc2 w-[478px] h-[68px] py-2 font-bold text-3xl text-white  rounded-md hover:bg-lime-500" >Submit</button>
                    <p className='italic'> Belum memiliki akun? <Link className='font-medium underline text-cyan-600' to='/register'>Register</Link></p>
                </form>
            </div>
        </>
    );
};