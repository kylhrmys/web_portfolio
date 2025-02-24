"use client";
import { useState } from "react";
import { Alert, Spin } from "antd";
import "antd/dist/reset.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setAlert(null); // Hide previous alerts

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setIsSubmitting(false);

      if (result.success) {
        setAlert({ type: "success", message: "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setAlert({ type: "error", message: `❌ Error: ${result.message}` });
      }
    } catch (error) {
      setIsSubmitting(false);
      setAlert({
        type: "error",
        message: "❌ Failed to send message. Please try again.",
      });
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
          </div>

          <div className="form-container p-5 rounded-md w-[30rem] bg-white">
            {alert && (
              <Alert
                message={alert.message}
                type={alert.type}
                showIcon
                closable
              />
            )}

            <form className="flex flex-col w-full mt-3" onSubmit={handleSubmit}>
              <label className="mb-1 text-white" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mb-3 p-2 rounded border"
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
                className="mb-3 p-2 rounded border"
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
                className="mb-3 p-2 rounded border h-40"
                required
              ></textarea>

              <button
                type="submit"
                className="mt-3 px-10 py-3 bg-primary text-white rounded-md flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Spin size="small" className="text-white" />
                ) : (
                  "SUBMIT"
                )}
              </button>

              {submitStatus && (
                <p className="text-white mt-3">{submitStatus}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
