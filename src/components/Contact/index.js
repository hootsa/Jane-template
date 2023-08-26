import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    watch,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("submit data", data);
  const watchCheckbox = watch([
    "webDevelopment",
    "webDesign",
    "consulting",
    "other",
  ]);

  const isCheckboxValid = watchCheckbox.some((item) => {
    return item;
  });

  console.log(errors, "errorssssssss");
  const props = {
    type: "text",
    placeholder: "Jane Doe",
    className:
      "w-full block border rounded-xl p-2.5 mt-4 mb-4 hover:bg-slate-100 transition-all",
  };

  const inputProps = register("originalName", {
    required: "Full Name is required",
  });

  return (
    <div className="container max-w-6xl mx-auto px-6 flex flex-row flex-wrap lg:flex-nowrap gap-12 justify-between mb-40">
      <div className="w-full lg:basis-1/2 max-w-2xl px-8 pt-20 mb-14 h-2/3 bg-slate-100">
        <h2 className="font-semibold text-5xl">
          How can I help you? <br />
          Let’s get in touch👋
        </h2>
        <img
          src="https://jane-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact.b33f4d23.jpg&w=1920&q=75"
          className="mt-32 rounded-2xl mb-14"
        ></img>
      </div>

      <div className="w-full lg:basis-1/2 max-w-2xl px-8 pt-32 mb-14">
        <h3 className="text-3xl	font-semibold	">
          Fill our the form below to get started
        </h3>
        <p className="text-lg	leading-7	mt-4 mb-4">
          Turkish cortado mazagran skinny macchiato espresso trade medium
          aromatic.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name</label>
            <input {...inputProps} id="name" {...props}></input>
            <p className="text-sm text-red-400 font-extralight h-6">
              {errors?.originalName?.message}
            </p>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email Address is not Valid",
                },
              })}
              id="email"
              type="text"
              placeholder="Foober@email.com"
              className="w-full block border rounded-xl p-2.5 mt-4 mb-4 hover:bg-slate-100 transition-all"
            ></input>
            <p className="text-sm text-red-400 font-extralight h-6">
              {errors?.email?.message}
            </p>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <label htmlFor="phone">Phone</label>
              <p className="text-gray-400">Optional</p>
            </div>
            <input
              {...register("phoneNumber", {
                required: true,
                maxLength: 11,
                minLength: 8,
              })}
              id="phone"
              type="tel"
              placeholder="+1(800) 123-4435"
              className="w-full block border rounded-xl p-2.5 mt-4 mb-4 hover:bg-slate-100 transition-all"
            ></input>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <label htmlFor="message">How Can I help you?</label>
              <p className="text-gray-400">Max 500 Characters</p>
            </div>
            <textarea
              {...register("typeMessage", {
                required: "please type your message.",
                maxLength: {
                  value: 500,
                  message: "You reached the Max Characters.",
                },
              })}
              id="message"
              placeholder="Tell me a little bit about your project..."
              className="w-full block border rounded-xl p-2.5 mt-4 mb-4 h-32 hover:bg-slate-100 transition-all"
            ></textarea>
            <p className="text-sm text-red-400 font-extralight h-6">
              {errors?.typeMessage?.message}
            </p>
          </div>
          <fieldset className="font-medium text-sm mt-7">
            <legend>Expected services</legend>
          </fieldset>
          <div className="mt-7 flex flex-row gap-4">
            <input
              {...register("webDevelopment")}
              type="checkbox"
              id="web-development"
            ></input>
            <div>
              <label htmlFor="web-development">Web Development</label>
            </div>
          </div>
          <div className="mt-4 flex flex-row gap-4">
            <input
              {...register("webDesign")}
              type="checkbox"
              id="web-design"
            ></input>
            <div>
              <label htmlFor="web-design">Web Design</label>
            </div>
          </div>
          <div className="mt-4 flex flex-row gap-4">
            <input
              {...register("consulting")}
              type="checkbox"
              id="consulting"
            ></input>
            <div>
              <label htmlFor="consulting">Consulting</label>
            </div>
          </div>
          <div className="mt-4 flex flex-row gap-4">
            <input
              {...register("consulting")}
              type="checkbox"
              id="other"
            ></input>
            <div>
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <p className="text-sm text-red-400 font-extralight h-6 mt-4">
            {!isCheckboxValid && "At least select one service"}
          </p>
          <div className="mt-14 mb-14 border-t">
            <button
              type="submit"
              className="bg-slate-800 rounded-full font-semibold mt-10 w-full py-3 text-white hover:opacity-90 transition-all"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
