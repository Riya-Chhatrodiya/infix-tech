"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add API call or email integration
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-[#FDF8F2] py-28 px-6 min-h-screen flex justify-center items-start">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-brand-brown mb-6">Contact Us</h2>
        <p className="text-lg text-brand-dark/80 mb-8">
          Fill out the form below and our team will get back to you shortly.
        </p>

        {submitted && (
          <motion.div
            className="bg-green-100 text-green-800 px-4 py-3 rounded mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Your message has been sent successfully!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-brand-dark font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-[#C6AC8F]/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C6AC8F] transition"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-brand-dark font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-[#C6AC8F]/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C6AC8F] transition"
              placeholder="your@email.com"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-brand-dark font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border border-[#C6AC8F]/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C6AC8F] transition"
              placeholder="Subject"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-brand-dark font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="border border-[#C6AC8F]/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C6AC8F] transition"
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#C6AC8F] text-[#0A0908] font-semibold rounded-full hover:bg-[#EAE0D5] hover:text-[#0A0908] transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
