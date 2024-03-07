import { Link } from "react-router-dom";
import { InterfaceButton } from "../../../interfaces/interfaceButton";

const Button = (props: InterfaceButton) => {
  const { lgnBtn, text } = props;

  return (
    <>
      <Link to="/login">
        <button className={`${lgnBtn}`}>{text}</button>
      </Link>
    </>
  );
};

export default Button;
