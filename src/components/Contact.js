import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div
      id="contact"
      className="p-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="mt-4 text-lg">
        Feel free to reach out to me! You can email me directly at:
      </p>
      <p className="text-lg font-semibold mt-2">
        <a
          href="mailto:preethimurugan0497@gmail.com"
          className="underline text-soft-blue hover:text-sage-green transition"
        >
          preethimurugan0497@gmail.com
        </a>
      </p>

      <p className="mt-4 text-lg">Or connect with me on LinkedIn:</p>
      <p className="text-lg font-semibold">
        <a
          href="https://www.linkedin.com/in/preethi-murugan-66a381227/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-soft-blue hover:text-sage-green transition"
        >
          linkedin.com/in/preethi
        </a>
      </p>

      {/* Fancy Contact Button */}
      <div className="mt-6">
        <a
          href="mailto:preethimurugan0497@gmail.com"
          className="px-5 py-2 bg-soft-blue text-white font-medium rounded-md shadow-md hover:bg-sage-green transition inline-block"
        >
          📩 Drop a Message
        </a>
      </div>
    </div>
  );
};

export default Contact;
