import Input from "../Elements/Input/Input";
import Label from "../Elements/Input/Label";
import { InterfaceLogin } from "../../interfaces/interfaceLogin";

const Login = (props: InterfaceLogin) => {
  const { onclick, onClickRegist, getInputValue } = props;

  return (
    <div>
      <div className=" flex items-center justify-center flex-col">
        <div className="w-[350px] bg-white mt-[20px] px-[30px] py-[20px] rounded-[20px] ">
          <h1 className="text-[32px] font-[900] text-login text-center mb-[15px]">
            LOGIN
          </h1>

          <form>
            <div className="flex flex-col gap-[10px] mb-[20px]">
              <div>
                <Label text="Username" htmlfor="username" />
                <Input
                  onchange={getInputValue}
                  placeholder="example@gmail.com"
                  type="text"
                  name="username"
                  id="username"
                />
              </div>

              <div>
                <Label text="Password" htmlfor="password" />
                <Input
                  onchange={getInputValue}
                  placeholder="*********"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </div>

            <button
              onClick={onclick}
              className="rounded-[10px] transition-all bg-login px-[4px] py-[5px] w-full text-white font-bold text-[14px]  hover:bg-white  hover:text-login border-2 border-login"
            >
              SUBMIT
            </button>

            <p className="text-[20px] font-[400] text-acount text-center mt-[10px] italic">
              Belum Punya Akun? {""}
              <span
                onClick={onClickRegist}
                className="text-register cursor-pointer"
              >
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
