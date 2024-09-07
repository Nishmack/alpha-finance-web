import React from "react";
import "./Contactus.css";
import contact from "../../assets/contact.jpg";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaTwitter, FaTelegram, FaWhatsapp } from "react-icons/fa";

function Contactus() {
  return (
    <div className="contact-image-container">
      <div className="contact-form">
        <div>
          <h2>Contact Us</h2>
          <span>
            Please feel free to ask if you have any further questions.
          </span>
        </div>
        <div>
          <p>
            <FaMapMarkerAlt className="icon" />
            Sydney, Australia
          </p>
          <p>
            <FaPhoneAlt className="icon" />
            0468328227
          </p>
          <p>
            <FaClock className="icon" />
            Mon - Fri: 9:00am - 5:00pm
          </p>
          <p>
            <FaClock className="icon" />
            Weekend Appointments Only.
          </p>
        </div>

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

      <div className="image-container">
        <img src={contact} alt="Placeholder image" />
      </div>
    </div>
  );
}

export default Contactus;
