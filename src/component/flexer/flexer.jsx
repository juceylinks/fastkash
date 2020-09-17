import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./flexer.scss";

function Sect({ image, head, inner, styleClas }) {
  return (
    <React.Fragment>
      <div className={styleClas}>
        <div className="conten">
          <h2>{head}</h2>
          <p>{inner}</p>
          <Link to="/">
            {" "}
            Apply Now <FaArrowRight />{" "}
          </Link>
        </div>
        <div className="image">
          <img src={image} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sect;
