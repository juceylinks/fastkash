import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Form, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer1">
        <h2>Get In Touch With Us</h2>
        <p>Please contact Us using the plaforms below</p>
      </div>
      <div className="footer2">
        <div className="form-container">
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <p>
                To make inquiries about our products and services, please leave
                us a message below:
              </p>

              <Form.Control as="textarea" rows="3" placeholder="Your Message" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <button>Submit</button>
          </Form>
        </div>
        <div className="MapContainer"></div>
      </div>
      <div className="footer3">
        <div className="links">
          <div className="quick-links">
            <Link to="/">Payday Loan </Link>
            <Link to="/">Thrift Savings </Link>
            <Link to="/">Investment Saving </Link>
            <Link to="/">Agency Banking</Link>
          </div>

          <div className="numbers">
            <p>0816348808</p>
            <p>08063023004</p>
            <p>08100732186</p>
          </div>
        </div>
        <div className="closing">
          <div className="line11">
            <p>© 2020 FastKash International Limited. All rights reserved</p>
          </div>
          <div className="line22">
            No 1, Trust house building,Akinyemi,Ringroad,Ibadan, Nigeria
          </div>

          <div className="line33">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
