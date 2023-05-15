import React, { useContext } from "react";
import "./Works.css";
import HTML from "../../img/HTML.png";
import Css from "../../img/Css.png";
import Photoshop from "../../img/Photoshop.png";
import Nodejs from "../../img/Nodejs.png";
import Javascript from "../../img/Javascript.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills
          </span>
          <span>Tools & technology</span>
          <spane>
            This is my some profesional Skills as i learn beginer to advance from self.
            <br />
            Web developer need both the tech skills to accomplish their tasks and the 
            <br />
             soft skills to work with clients and internal stakeholders.
            <br />
              whether you're looking at a front-end or back-end position.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={HTML} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Photoshop} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Nodejs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Javascript} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
