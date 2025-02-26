import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => (
  <footer className='bg-dark text-light py-3'>
    <div className='container'>
      <div className='row mb-4'>
        <div className='col-lg-6 col-sm-12 d-flex flex-column flex-md-row'>
          <div className='d-flex flex-fill align-items-center py-3 mb-md-0 justify-content-center'>
            <h5 className="logo text-center">Pilladvisor</h5>
          </div>
          <div className='flex-fill py-3'>
            <h4>Quick Links</h4>
            <ul className='list-unstyled'>
              <li><a href="#home" className='text-light'>Home</a></li>
              <li><a href='#search' className='text-light'>Search Medicine</a></li>
              <li><a href="#services" className='text-light'>Our Services</a></li>
            </ul>
          </div>
          <div className='flex-fill py-3'>
            <h4>Social</h4>
            <div className='icons'>
              <FaFacebookF className='m-2' />
              <IoLogoTwitter size={20} />
              <FaInstagram size={20} className='m-2' />
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12 py-3'>
          <h4 className='blueText'>Subscribe to our newsletter</h4>
          <form className="d-flex mt-2 flex-column flex-lg-row">
            <input
              type="email"
              className="form-control me-2"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button type="submit" className="subbtn rounded px-2">Subscribe</button>
          </form>
        </div>
      </div>
      <div className='text-center'>
        <small> Copyright &copy; {new Date().getFullYear()} Pilladvisor <br></br>All rights reserved.</small>
      </div>
    </div>
  </footer>
);

export default Footer;
