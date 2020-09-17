import React from "react";
import Hero from "../../component/Hero/hero";
import NavBar from "../../component/NavBar/navbar";
import "./homepage.scss";
import Buttons from "../../component/buttons/button";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";

import Side from "../../component/sides/sides";

function Homepage() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero styleClass="section1">
        <div className="hero-text">
          <h1>Your Wealth Patner</h1>
          <p>
            FastKash is a cooperative and financial services company. We help
            individuals and small businesses access financial services,
            investments and financial literacy.
          </p>
          <Buttons styleClass="button1">
            <Link to="/">Sign Up</Link>
          </Buttons>
        </div>
      </Hero>
      <div className="section2">
        <div className="topic">
          <h1>What We Do</h1>
        </div>
        <div className="container">
          <div className="card1">
            <img src="./images/2.png" alt="" />
            <h3>Payday Loans</h3>
            <p>
              Access quick and affordable personal and business loans as low as
              1.8% monthly.
            </p>
          </div>
          <div className="card2">
            <img src="/images/1.svg" alt="" />
            <h3>Thrift Savings</h3>
            <p>EazyLife Savings: Unlocked Targeted Savings. 4%/Annum</p>
          </div>
          <div className="card3">
            <img src="/images/3.svg" alt="" />
            <h3>Investment Savings</h3>
            <p>Insured, Safe Investment packages. Earn as high as 50% ROI. </p>
          </div>
          <div className="card4">
            <img src="/images/4.svg" alt="" />
            <h3>Agency Banking</h3>
            <p>
              We are eager to bring our mission to every person and business.
            </p>
          </div>
        </div>
      </div>

      <Side />

      <Footer />
    </React.Fragment>
  );
}

export default Homepage;
