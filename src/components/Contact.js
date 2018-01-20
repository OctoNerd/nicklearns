import React, { Component } from 'react';
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
        <div className="section-contact" id="contact">
          <h2 className="heading">Contact</h2>
          <div className="contact-form-wrap">
            <form action="https://formspree.io/nick.a.eddy@gmail.com" method="POST">
                <div className="contact-form-senderInfo">
                    <label>
                        <span>Your Name</span>
                        <input name="name" type="text"/>
                    </label>
                    <label>
                        <span>Your E-Mail</span>
                        <input name="_replyto" type="email"/>
                    </label>
                </div>
                <label>
                    <span>Message</span>
                    <textarea name="message"></textarea>
                </label>
                <input className="btnSend" value="Send" type="submit"/>
            </form>
          </div>
        </div>
    );
  }
}

export default Contact;
