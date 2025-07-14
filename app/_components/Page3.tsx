"use client";

import PressSection from "./Press";
import Listen from "./Listen";
import { useState, FormEvent } from "react";

const ContactPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // mailto will open the email client; form submission handled by browser
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact">
      <div
        style={{
          backgroundImage:
            'url("/images/gallery/contact.jpg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div className="bg-transparent bg-opacity-70 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              CONTACT ME
            </h2>
            <p className="text-white text-sm md:text-base mb-8 max-w-2xl mx-auto">
              No spam, I promise! Just an opportunity to join the inner circle, and be the first to know about new music, shows and exclusive offers.
            </p>
            <form
              action="mailto:shudhitaa1@gmail.com"
              method="POST"
              encType="text/plain"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 justify-center items-center max-w-md mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-white px-4 py-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                name="body"
                placeholder="Your message"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
                className="w-full bg-white px-4 py-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-white-500 text-white-400 hover:bg-purple-500 hover:text-white transition-colors duration-300 rounded-md font-semibold"
              >
                SEND EMAIL
              </button>
            </form>
          </div>
        </div>
        <Listen />
        <PressSection />
      </div>
    </div>
  );
};

export default ContactPage;