import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import NavBar from "../components/NavBar";

function Contact() {
  const [state, handleSubmit] = useForm("mzbqzwdy");
  const handleClick = () => {
    setTimeout(() => {
      const frm = document.getElementsByName("contact-form")[0];
      alert("Thank you! I will get back to you as soon as I can.");
      frm.reset();
    }, 100);
  };
  return (
    <React.Fragment>
      <NavBar />
      <div className="text-center p-10  text-black bg-white font-playfair text-2xl lg:text-4xl h-screen">
        <h2 className="font-playfair mb-5">Contact Me</h2>
        <p className="mb-5">Feel free to leave me a message about anything!</p>
        <form onSubmit={handleSubmit} name="contact-form">
          <div className="flex flex-col items-center form-group mb-6">
            <label for="full-name" className="text-center">
              Name
            </label>
            <input
              id="full-name"
              name="name"
              type="text"
              className="w-full md:w-1/2 md:h-16 form-control px-3 py-1.5 font-normal bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:border-slate-700 text-black"
            />
          </div>
          <div className="flex flex-col items-center form-group mb-6">
            <label htmlFor="email" className="text-center">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full md:w-1/2 md:h-16 form-control px-3 py-1.5 font-normal bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:border-slate-700 text-black"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col items-center form-group mb-6">
            <label className="text-center">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full md:w-1/2 form-control px-3 py-1.5 bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none dark:border-slate-700"
              rows="10"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            onClick={handleClick}
            disabled={state.submitting}
            className="w-full md:w-1/2 px-6 py-2.5 text-black border dark:border-slate-700 text-xl leading-tight uppercase rounded -md hover:bg-white hover:text-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out"
            shadow
          >
            Send
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default Contact;
