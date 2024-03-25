import Label from "../Elements/Input/Label";
import { InterfaceRegister } from "../../interfaces/interfaceRegister";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import Input from "../Elements/Input/Input";

const Register = (props: InterfaceRegister) => {
  const [value, setValue] = useState({
    fullname: "",
    address: "",
    gender: "",
    username: "",
    password: "",
  });

  const saveUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/user", value);
    } catch (error) {
      console.log(error);
    }
  };

  const getInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const { onClickLogin } = props;

  return (
    <div>
      <div className=" flex items-center justify-center flex-col">
        <div className="w-[350px] bg-white mt-[10px] px-[30px] py-[20px] rounded-[20px] ">
          <h1 className="text-[32px] font-[900] text-login text-center mb-[15px]">
            REGISTER
          </h1>

          <form onSubmit={saveUser}>
            <div className="flex flex-col gap-[10px] mb-[20px]">
              <div>
                <Label text="Fullname" htmlfor="fullname" />
                <Input
                  onchange={getInput}
                  id="fullname"
                  placeholder="Your Fullname"
                  type="text"
                  name="fullname"
                />
              </div>

              <div>
                <Label text="Alamat" htmlfor="alamat" />
                <Input
                  onchange={getInput}
                  placeholder="Alamat"
                  type="text"
                  name="address"
                  id="address"
                />
              </div>

              <div>
                <Label text="Jenis Kelamin" htmlfor="jeniskelamin" />
                <Input
                  onchange={getInput}
                  placeholder="Jenis Kelamin"
                  type="text"
                  name="gender"
                  id="gender"
                />
              </div>

              <div>
                <Label text="Username" htmlfor="usernameregist" />
                <Input
                  onchange={getInput}
                  placeholder="Example@email.com"
                  type="text"
                  name="username"
                  id="usernameregist"
                />
              </div>

              <div>
                <Label text="Password" htmlfor="passwordregist" />
                <Input
                  onchange={getInput}
                  placeholder="*************"
                  type="password"
                  name="password"
                  id="passwordregist"
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={onClickLogin}
              className="transition-all rounded-[10px] bg-login px-[4px] py-[5px] w-full text-white font-bold text-[14px]  hover:bg-white  hover:text-login border-2 border-login"
            >
              SUBMIT
            </button>
          </form>

          <p className="text-[20px] font-[400] text-acount text-center mt-[10px] italic">
            Sudah Punya Akun? {""}
            <span
              onClick={onClickLogin}
              className="text-register cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;