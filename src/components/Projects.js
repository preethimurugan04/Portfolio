import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTrophy,
  FaShoppingCart,
  FaUsers,
  FaFootballBall,
  FaLightbulb,
  FaPlayCircle,
  FaCode,
  FaCogs,
  FaBlog
} from "react-icons/fa"; // Added new icons

const projects = [
  {
    title: "Quiz Game in JAVA",
    description: "Quiz game similar to the successful TV quiz show 'Who Wants to be a Millionaire'.",
    icon: <FaTrophy size={40} />,
  },
  {
    title: "Semantic Web - Ecommerce",
    description: "Leveraged Semantic Web Technologies for a smarter E-commerce platform with machine-understandable data.",
    icon: <FaShoppingCart size={40} />,
  },
  {
    title: "Manchester United Hospitality & VIP Boxes System",
    description: "Designed and implemented a database system for managing VIP bookings.",
    icon: <FaUsers size={40} />,
  },
  {
    title: "AI & VAR in Sports Performance Analysis",
    description: "Developed a qualitative and quantitative study on AI's impact in sports refereeing.",
    icon: <FaFootballBall size={40} />,
  },
  {
    title: "Design Of Energy Efficient Street Light Fault Monitoring System",
    description: "Created a GSM-based system to intelligently monitor and report streetlight faults.",
    icon: <FaLightbulb size={40} />,
  },
  {
    title: "Manual Test Case Execution Guide with Voiceover",
    description: "Recorded a full guide on how to execute test cases manually for beginners, with a step-by-step voiceover.",
    icon: <FaPlayCircle size={40} />,
  },
  {
    title: "Blogging Platform Automation",
    description: "Built a full-stack blogging platform using MongoDB with test automation to validate key features.",
    icon: <FaBlog size={40} />,
  },
  {
    title: "CI/CD Portfolio Website using React & Jenkins",
    description: "Created a QA portfolio website using React and integrated it with Jenkins for continuous deployment.",
    icon: <FaCogs size={40} />,
  },
  {
    title: "E-Commerce Automation with Selenium WebDriver (JavaScript)",
    description: "Automated shopping flow, cart validation, and login scenarios using JavaScript and Selenium.",
    icon: <FaCode size={40} />,
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div id="projects" className="p-10 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">{project.icon}</div>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
