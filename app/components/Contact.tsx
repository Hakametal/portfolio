"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xjkbqnyy");
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    setTimeout(() => {
      setShowPopup(true);
    }, 500);
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex items-center"
    >
      <form
        onSubmit={handleFormSubmit}
        action={"https://formspree.io/f/xjkbqnyy"}
        method="POST"
        className="w-72 lg:w-1/4 mx-auto text-[#9EA3B0] flex flex-col"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33ca7f] text-gray-600"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33ca7f] text-gray-600"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-lg">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33ca7f] text-gray-600"
            rows={10}
            required
          ></textarea>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full px-4 text-lg py-2 text-white bg-[#0a192f] border-2 border-white rounded-lg hover:bg-[#33ca7f] hover:border-[#33ca7f] hover:text-[#0a192f] duration-200"
        >
          Submit
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-65">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2 text-[#0a192f] flex">
              Sent!
            </h2>
            <p className="text-[#9EA3B0]">
              Thanks for reaching out, I'll get back to you asap ;)
            </p>
            <button
              className="w-full mt-4 px-4 py-2 bg-[#33ca7f] text-[#0a192f] rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
