import React, { Fragment } from "react";

import backgroundImg from "../../assets/images/backgroundImg.png";
import logo from "../../assets/images/logo.png";
import homepageLine from "../../assets/images/homepageLine.png";
import stamp from "../../assets//images/stamp.png";

import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <img
        src={backgroundImg}
        id="background_img"
        alt="background_img"
        style={{ width: "1920px", height: "1080px" }}
      />
      <img
        src={logo}
        id="logo"
        alt="logo"
        style={{ width: "236px", height: "38px" }}
      />
      <img
        src={homepageLine}
        id="homepageLine"
        alt="homepageLine"
        style={{ width: "1780px", height: "0px" }}
      />
      <img
        src={stamp}
        id="stamp"
        alt="stamp"
        style={{ width: "299px", height: "299px" }}
      />
      <Link
        to="/profile"
        id="add_resume_btn"
        style={{ textDecoration: "none" }}>
        <span id="add_resume_btn_text">რეზიუმეს დამატება</span>
      </Link>
    </Fragment>
  );
};

export default HomePage;
