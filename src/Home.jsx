import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img2.svg";
import Common from "./Common";

const Home = () => {
  return (
    <React.Fragment>
      <Common
        name="Grow Your Business with "
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </React.Fragment>
  );
};

export default Home;
