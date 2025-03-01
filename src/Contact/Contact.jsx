import React from "react";
import "./Contact.css";
import Image from "../assets/contactImg.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact d-flex" id="contact">
      <section className="container d-flex flex-column flex-lg-row">
        <div className="d-flex justify-content-center align-items-center col-lg-4 col-sm-12 ms-3">
          <img src={Image} className="img-fluid" alt="contact image" />
        </div>
        <div className="d-flex justify-content-center align-items-center col-lg-8 col-sm-12">
          <div className="text-light text-center text-lg-start">
            <h1 className="mb-5">Contact Us</h1>
            <h5 className="mt-4">PHONE</h5>
            <p>071-7 89 1418</p>
            <h5 className="mt-4">EMAIL</h5>
            <p>pilladvisor@gmail.com</p>
            <h5 className="mt-4">SOCIAL</h5>
            <div className="icons d-flex justify-content-center justify-content-lg-start">
              <FaFacebookF className="me-2" />
              <IoLogoTwitter size={20} className="ms-2 me-2" />
              <FaInstagram size={20} className="ms-2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
