import React, { useState, useEffect } from "react";
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

  const addPost = async () => {
    // Validating Form Data
    if (!name && email) {
      toast.error("Please enter required field ");
    } else {
      if (name.length < 3) {
        toast.error("Please enter valid name");
      } else {
        const number = Number(phone); // typecasting
        const phoneStr = phone.toString();

        if (
          isNaN(number) ||
          phone.length < 10 ||
          phone.length > 10 ||
          (phoneStr.charAt(0) != "6" &&
            phoneStr.charAt(0) != "7" &&
            phoneStr.charAt(0) != "8" &&
            phoneStr.charAt(0) != "9") == true
        ) {
          toast.error("Please enter a valid phone number");
        } else {
          if (!email.includes("@") || !email.includes(".")) {
            toast.error("Please enter a valid email");
          } else {
            const data = {
              name,
              phone,
              message,
              email,
            };

            const response = await fetch(
              "http://localhost:5000/api/post-data",
              {
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
              }
            );

            console.log(response);
            toast.success("Form Submitted");

            // data server pe jane ke baad
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
          }
        }
      }
    }

    // api call karnege jo apna data backend pe push karega
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
              required
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
              required
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
              required
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
          <div>
            <button type="submit" onClick={addPost}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
