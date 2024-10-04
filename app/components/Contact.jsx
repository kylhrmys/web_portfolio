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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("");

    const { name, email, message } = formData;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSubmitStatus(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("Failed to send email.");
    }
  };

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
            className="flex form-container p-5 rounded-md w-[21rem] md:w-[30rem] lg:w-[35rem]"
          >
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
              <label
                className="mb-1 text-white quicksand-regular"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="mb-3 p-2 rounded"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label
                className="mb-1 text-white quicksand-regular"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@mail.com"
                className="mb-3 p-2 rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label
                className="mb-1 text-white quicksand-regular"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="I’ve been hearing fantastic things about your work and would love to chat about a potential collaboration. Are you interested in teaming up on something exciting?"
                className="mb-3 p-2 rounded h-40"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button className="mt-3 px-10 py-3 bg-white text-black quicksand-bold rounded-md">
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
