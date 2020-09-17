import React from "react";
import NavBar from "../../component/NavBar/navbar";
import Hero from "../../component/Hero/hero";
import { Link } from "react-router-dom";
import Buttons from "../../component/buttons/button";
import "./about.scss";
import { Carousel } from "react-bootstrap";
import Footer from "../../component/footer/footer";

function About() {
  return (
    <React.Fragment>
      <NavBar />

      <Hero styleClass="section1 about-1">
        <div className="hero-text">
          <h1>Your Wealth Patner</h1>
          <p>
            FastKash is a cooperative and financial services company. We help
            individuals and small businesses access financial services,
            investments and financial literacy. We envision to provide a
            platform that supports and ensures access to finance for small
            businesses, savings through thrift to individuals and groups,
            thereby empowering Nigeria and Africa low to middle income earners
            gain financial freedom. We are fully dedicated to improving lives.
            For us it's all about making our community a better place.
          </p>
          <Buttons styleClass="button1">
            <Link to="/">Sign Up</Link>
          </Buttons>
        </div>
      </Hero>

      <div className="about-2">
        <div className="first-side">
          <div className="left">
            <img src="/images/111.png"></img>
            <h3>Our mission </h3>
            <p>
              We create key partnerships to ensure financial liberation,
              literacy, and provide freedom for Nigerians to fulfill dreams.
            </p>
          </div>
          <div className="middle">
            <img src="/images/222.png"></img>
            <h3>Our vision </h3>
            <p>
              To help our customers build wealth and gain financial freedom
              leveraging cutting edge technology
            </p>
          </div>
          <div className="right">
            <img src="/images/333.png"></img>
            <h3>Our value </h3>
            <p> Loyalty, Energy Acuity, Prudence: LEAP</p>
          </div>
        </div>
      </div>

      <div className="about-3">
        <h2>Who We are</h2>
        <div className="first-side">
          <div className="left">
            <img src="/images/2.png"></img>
            <h3>Payday Loans </h3>
            <p>
              Access quick and affordable personal and business loans as low as
              1.8% monthly.
            </p>
          </div>
          <div className="middle">
            <img src="/images/2.png"></img>
            <h3>Thrift Savings </h3>
            <p>EazyLife Savings: Unlocked Targeted Savings. 4%/Annum</p>
          </div>
          <div className="right">
            <img src="/images/2.png"></img>
            <h3>Investment Banking </h3>
            <p> Insured, Safe Investment packages. Earn as high as 50% ROI.</p>
          </div>
        </div>
      </div>
      <div className="about-3">
        <div className="first-side">
          <div className="left">
            <img src="/images/2.png"></img>
            <h3>Agency Banking</h3>
            <p>
              Access quick and affordable personal and business loans as low as
              1.8% monthly.
            </p>
          </div>
          <div className="middle">
            <img src="/images/2.png"></img>
            <h3>SME Loans </h3>
            <p>EazyLife Savings: Unlocked Targeted Savings. 4%/Annum</p>
          </div>
          <div className="right">
            <img src="/images/2.png"></img>
            <h3>Petty, Personal Loans</h3>
            <p> Insured, Safe Investment packages. Earn as high as 50% ROI.</p>
          </div>
        </div>
      </div>
      <div className="header2">
        <h2>What Users Are Saying </h2>
      </div>
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/1111.png"
              alt="First slide"
            />
            <h3>- Adoba yaro</h3>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/1111.png"
              alt="Third slide"
            />
            <h3>- Allen akpofure </h3>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="/images/1111.png"
              alt="Third slide"
            />
            <h3> - Mark alii</h3>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default About;
