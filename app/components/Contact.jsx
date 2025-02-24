"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  // const send = () => {
  //   sendEmail();
  // };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    alert(result.message);
  };

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsInView(isVisible);
      if (isVisible) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      }
    }
  };

  useEffect(() => {
    controls.start({ opacity: 0, y: 50 });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div
      id="contact"
      className="overflow-hidden bg-primary md:h-screen flex flex-col justify-center items-center p-12"
    >
      <div className="container md:container lg:container flex flex-col justify-center items-center px-5">
        <div className="flex md:flex-col lg:flex-row flex-wrap justify-center items-center lg:gap-96 md:gap-12 gap-5">
          <div className="flex flex-col lg:justify-start lg:items-start">
            <h1 className="text-4xl lg:text-6xl poppins-bold mb-3 text-white text-start">
              COLLABORATE
            </h1>
            <p className="text-white quicksand-regular text-center lg:text-start md:flex items-center">
              kaylteves@createves.dev
            </p>
            <div className="text-white quicksand-regular text-center lg:text-start md:flex items-center">
              +63 915 812 4837 | +63 968 350 3518
            </div>
            <div className="flex justify-center lg:justify-start">
              <button className="mt-3 px-10 py-3 bg-white text-black quicksand-bold rounded-md">
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            className="form-container p-5 rounded-md w-[30rem]"
          >
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
              <label className="mb-1 text-white" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mb-3 p-2 rounded"
                required
              />

              <label className="mb-1 text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mb-3 p-2 rounded"
                required
              />

              <label className="mb-1 text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mb-3 p-2 rounded h-40"
                required
              ></textarea>

              <button
                type="submit"
                className="mt-3 px-10 py-3 bg-white text-black rounded-md"
              >
                SUBMIT
              </button>
              {submitStatus && (
                <p className="text-white mt-3">{submitStatus}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
