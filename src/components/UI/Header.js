import "./Header.scss";
import line from "../../assets/images/line.png"
import { Link } from "react-router-dom";
import { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
      <Link id="vector_back" to="/" />
      <h1 id="title">{props.title}</h1>
      <span id="page_number">{props.page}/3</span>;
      <img id="line" alt="line" src={line}/>
    </Fragment>
  );
};

export default Header;
