import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";

export default function ContactForm() {
  const [nameInput, setNameInput] = useState();
  const [phoneInput, setPhoneInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [messageInput, setMessageInput] = useState();

  return (
    <>
      <h4 id="contact" className="ml-4 pb-2">
        Contact Us
      </h4>
      <form className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-x-4 p-4 mt-4 shadow rounded-xl">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="name"
            type="text"
            placeholder="Your name here"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="phone"
          >
            Phone number
          </label>
          <PhoneInput
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            placeholder="(123) 456 7890"
            country="US"
            value={phoneInput}
            onChange={setPhoneInput}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            id="email"
            type="text"
            placeholder="example@email.com"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
            <textarea
              className="shadow form-textarea mt-1 block w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              rows="5"
              placeholder="What should we know about you?"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
