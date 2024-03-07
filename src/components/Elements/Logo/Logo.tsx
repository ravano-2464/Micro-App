import LogoImage from "../../../assets/images/logo.png";
import { InterfaceLogo } from "../../../interfaces/interfaceLogo";

const Logo = (props: InterfaceLogo) => {
  const { width, height } = props;
  return (
    <img className={`${width} ${height}`} src={LogoImage} alt="Logo Dumbways" />
  );
};

export default Logo;
