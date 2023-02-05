import { Link } from "react-router-dom";
import "./Button.scss";

const Button = (props) => {
  return (
    <Link to="./" className={props.className}>
      <span className="next-btn-text">{props.text}</span>
    </Link>
  );
};

export default Button;
