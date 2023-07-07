import React, { useState } from "react";
import "./Form.css";

// below i imported react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  // Here we will define the states

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const addPost = () => {
    toast.success("Form Submitted");
    // api call karnege jo apna data backend pe push karega

    // data server pe jane ke baad
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div id="mainDiv">
        <div id="form">
          {/* full name*/}
          <div>
            <label htmlFor="fullName">Full Name :</label>
            <input
              type="text"
              name="fullName"
              id=""
              placeholder="Enter Your Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>

          {/* email */}
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          {/* phone */}
          <div>
            <label htmlFor="phone">Phone :</label>
            <input
              type="tel"
              name="phone"
              id=""
              placeholder="Enter Your Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          {/* message */}
          <div>
            <label htmlFor="message">Message :</label>
            <textarea
              name="message"
              id=""
              cols="20"
              rows="5"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>

          {/* button */}
          <button type="submit" onClick={addPost}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
