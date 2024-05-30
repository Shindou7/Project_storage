import React from 'react';
import "./Contactpage1.css";
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const ContactPage1 = () => {
  return (
    <section className="contacts" id="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>For questions and recommendations, please use the form below.
        We'll get back to you as soon as possible!</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <HomeIcon />
            <div className="text">
              <h3>Address</h3>
              <p>Casablanca, Morocco</p>
            </div>
          </div>

          <div className="box">
            <PhoneIcon />
            <div className="text">
              <h3>Phone</h3>
              <p>+212 0 ....</p>
            </div>
          </div>

          <div className="box">
            <AlternateEmailIcon />
            <div className="text">
              <h3>Email</h3>
              <p>test@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form action="#">
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" id="name" required="required" />
              <span>Full Name</span>
            </div>

            <div className="inputBox">
              <input type="email" id="email" required="required" />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <textarea id="message" required="required"></textarea>
              <span>Type your Message...</span>
            </div>

            <div className="inputBox">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage1;
