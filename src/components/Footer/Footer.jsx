import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaTwitter, FaTelegram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer-top">
        <div className="footer-left">
          <h3>Quick Contact</h3>
          <p>
            At Alphaa Financial Solutions, we believe in empowering your
            property dreams
            <br />
            with our premium financial services.
          </p>
          <div>
            <p>
              <FaMapMarkerAlt className="icon" />
              <span>Sydney, Australia</span>
            </p>
            <p>
              <FaPhoneAlt className="icon" />
              <span>0468328227</span>
            </p>
            <p>
              <FaEnvelope className="icon" />
              <span>info@alphafinancial.com</span>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <h3>Opening Hours</h3>
          <p>
            <span>Mon to Fri:</span>
            <span className="dots">
              {" "}
              .....................................{" "}
            </span>
            <span className="time">9:00am - 5:00pm</span>
          </p>
          <p>
            <span>Sat to Sun:</span>
            <span className="dots">
              {" "}
              .....................................{" "}
            </span>
            <span className="time">Appointments Only</span>
          </p>
          <button>SCHEDULE A VISIT</button>
        </div>
      </div>

      <div>
        <div className="footer-bottom">
          <div className="footer-l">
            <div className="social-icons">
              <span className="icon-span">
                <FaTwitter color="black" />
              </span>
              <span className="icon-span">
                <FaTelegram color="black" />
              </span>
              <span className="icon-span">
                <FaWhatsapp color="black" />
              </span>
            </div>
          </div>

          <div className="footer-r">
            <p>
              2024 © All Rights Reserved | Developed with ❤️ by{" "}
              <span>Psyber Inc</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
