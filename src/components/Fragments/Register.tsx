import Input from "../Elements/Input/Input";
import Label from "../Elements/Input/Label";
import { InterfaceRegister } from "../../interfaces/interfaceRegister";

const Register = (props: InterfaceRegister) => {
  const { onClickLogin } = props;
  return (
    <div>
      <div className=" flex items-center justify-center flex-col">
        <div className="w-[350px] bg-white mt-[10px] px-[30px] py-[20px] rounded-[20px] ">
          <h1 className="text-[32px] font-[900] text-login text-center mb-[15px]">
            REGISTER
          </h1>

          <form action="">
            <div className="flex flex-col gap-[10px] mb-[20px]">
              <div>
                <Label text="Fullname" htmlfor="fullname" />
                <Input
                  onchange={() => {}}
                  id="fullname"
                  placeholder="Ravano Akbar Widodo"
                  type="text"
                  name="text"
                />
              </div>

              <div>
                <Label text="Alamat" htmlfor="alamat" />
                <Input
                  onchange={() => {}}
                  placeholder="Alamat"
                  type="text"
                  name="text"
                  id="alamat"
                />
              </div>

              <div>
                <Label text="Jenis Kelamin" htmlfor="jeniskelamin" />
                <Input
                  onchange={() => {}}
                  placeholder="Jenis Kelamin"
                  type="text"
                  name="text"
                  id="jeniskelamin"
                />
              </div>

              <div>
                <Label text="Username" htmlfor="usernameregist" />
                <Input
                  onchange={() => {}}
                  placeholder="Example@gmail.com"
                  type="text"
                  name="text"
                  id="usernameregist"
                />
              </div>

              <div>
                <Label text="Password" htmlfor="passwordregist" />
                <Input
                  onchange={() => {}}
                  placeholder="*************"
                  type="password"
                  name="password"
                  id="passwordregist"
                />
              </div>
            </div>
          </form>

          <button
            onClick={onClickLogin}
            className="transition-all rounded-[10px] bg-login px-[4px] py-[5px] w-full text-white font-bold text-[14px]  hover:bg-white  hover:text-login border-2 border-login"
          >
            SUBMIT
          </button>

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
