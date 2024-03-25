import Logo from "../Elements/Logo/Logo";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Register from "./Register";
import Login from "./Login";
import { InterfaceNavbar } from "../../interfaces/interfaceNavbar";

const Navbar = (props: InterfaceNavbar) => {
  const { textNav, listItem } = props;
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [userLogin, setUserLogin] = useState(false);

  const handleRegister = (): void => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const handleLogin = (): void => {
    setOpenLogin(true);
    setOpenRegister(false);
  };

  const loginUser = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setUserLogin(!userLogin);
    setOpenLogin(false);
  };

  return (
    <header className="bg-black">
      <nav className="flex justify-between items-center py-3 px-24">
        <div className="flex items-center gap-5">
          <Link to="/">
            <Logo width="w-[41px]" height="h-[41px]" />
          </Link>
          <p className="text-2xl font-bold text-white">{textNav}</p>
        </div>

        <div className="flex items-center gap-5">
          <ul className="text-white text-2xl flex items-center gap-5 font-normal">
            {listItem.map((item, index) => (
              <React.Fragment key={index}>
                <Link to={item.linkTo}>
                  <li> {item.list} </li>
                </Link>
                {index < listItem.length - 1 && <li> | </li>}
              </React.Fragment>
            ))}
          </ul>

          {userLogin === false ? (
            <div className="flex items-center">
              <button
                className="bg-white text-xl font-[700] px-7 py-1 rounded-md ml-5 hover:bg-black  hover:text-white border-2 border-white transition-all"
                onClick={() => setOpenLogin(true)}
              >
                LOGIN
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <button className="bg-white text-xl font-[700] h-11 w-11 flex justify-center items-center rounded-full ml-5">
                R
              </button>
            </div>
          )}

          <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
            <Login onclick={loginUser} onClickRegist={handleRegister} />
          </Modal>

          <Modal open={openRegister} onClose={() => setOpenRegister(false)}>
            <Register onClickLogin={handleLogin} />
          </Modal>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;