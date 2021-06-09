// Libraries
import React, { useState } from "react";
import InputMask from "react-input-mask";
// Components
import ContactSuccessModal from "./contactSuccessModal";

const ContactForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState();
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (nameInput === "test") {
      setShowSuccess(true);
      setSubmitted(true);
      return null;
    }
    if (nameInput.length === 0) {
      alert("Please enter your name.");
      return null;
    }
    if (phoneInput === undefined) {
      alert("Please enter your phone number.");
      return null;
    }
    if (emailInput.length === 0) {
      alert("Please enter your email.");
      return null;
    }

    const date = new Date();
    const postBody = {
      "Name": nameInput,
      "Phone": phoneInput,
      "Email": emailInput,
      "Message": messageInput,
      "Created at": date,
    };

    fetch(`${process.env.NEXT_PUBLIC_SHEET_URL}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubmitted(true);
        setShowSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {showSuccess && (
        <ContactSuccessModal show={showSuccess} setShow={setShowSuccess} />
      )}
      <h4 className="ml-4 pb-2">Contact Us</h4>
      <form className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-x-4 p-4 mt-4 shadow rounded-xl">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            disabled={submitted}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone number
          </label>
          <InputMask
            id="phone"
            name="phone"
            type="tel"
            disabled={submitted}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            mask="(999) 999-9999"
            country="US"
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            disabled={submitted}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            type="text"
            id="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            How can we help?
            <textarea
              disabled={submitted}
              className="shadow form-textarea mt-1 block w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              rows="5"
              id="message"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            role="submit"
            disabled={submitted}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring"
            className={`text-white py-2 px-4 rounded focus:outline-none focus:ring
              ${
                submitted
                  ? "bg-gray-400 cursor-default"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            type="button"
            onClick={handleSubmit}
          >
            {submitted ? "Submitted" : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
