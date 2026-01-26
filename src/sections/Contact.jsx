import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://my-portfolio-backend-fn5f.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (err) {
      setStatus("Server error ❌");
    }
  };

  return (
    <section id="contact" className="container py-5">
      <motion.h2
        className="text-center fw-bold mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      <p className="text-center text-muted mb-4">
        Let’s discuss your project or opportunity
      </p>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form
            className="contact-card p-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                rows="4"
                className="form-control"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="btn btn-info w-100">
              Send Message
            </button>

            {status && (
              <p className="text-center mt-3 small">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
