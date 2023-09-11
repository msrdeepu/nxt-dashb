import React, { useRef } from "react";
import "./email.css";
import emailjs from "@emailjs/browser";
// import emailjs from "@emailjs-com";

const Leads = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7e3bszd",
        "template_8hempqo",
        form.current,
        "flQTXa2wEQpRPk4RG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <h1 className="top-header">Send Email</h1>
      <div className="form-container">
        <form className="form-item" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea rows={8} name="message" />
          <button className="submit-btn" type="submit" value="Send">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Leads;
