import React from "react";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon from react-icons

const Navbar = () => {
  return (
    <nav className="bg-background text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">QA Portfolio</h1>
      <ul className="flex space-x-6">
      <li className="hover:text-accent transition">Home</li>
        <li className="hover:text-accent transition">Projects</li>
        <li className="hover:text-accent transition">Contact</li>
        <li>
          <a
            href="https://www.linkedin.com/in/preethi-murugan-66a381227/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-200"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
