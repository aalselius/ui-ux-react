import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaInstagramSquare,
  FaTwitter,
} from 'react-icons/fa';
function Footer() {
  return (
    <div className="footer-parent">
      <div className="footer-content d-flex align-items-center flex-column">
        <p>Designed and Developed By</p>

        <div className="d-flex social-icons justify-content-between ">
          <FaFacebook />
          <FaLinkedin />
          <FaMailBulk />
          <FaInstagramSquare />
          <FaTwitter />
        </div>

        <p>Alexandra Alselius</p>
      </div>
    </div>
  );
}

export default Footer;
