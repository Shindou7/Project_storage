import React from 'react';
import "./Contactpage1.css";

const ContactPage1 = () => {
  return (
    <section className="contacts" id="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>For visit and touristic inquiries, please use the form below. We'll get back to you as soon as possible!</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Address :</h3>
              <p>4537 street 43,<br /> Casablanca, Morocco</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Phone :</h3>
              <p>+2120 00 00 00 00</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Email :</h3>
              <p>text@text.com</p>
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
