import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import FontAwesome icons directly
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // React Icons version of FontAwesome

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <footer
      className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-center py-6"
      data-aos="fade-up"
    >
      {/* Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/in/preethi-murugan-66a381227/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-gray-300 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/preethimurugan04"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-gray-300 transition duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Text */}
      <p>© 2025 Preethi Murugan</p>
      <p>Building Quality Software with Passion and Precision</p>
    </footer>
  );
};

export default Footer;
