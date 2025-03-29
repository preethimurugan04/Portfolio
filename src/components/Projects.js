import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTrophy, FaShoppingCart, FaUsers , FaFootballBall, FaLightbulb, FaPlayCircle } from "react-icons/fa"; // Importing some icons

const projects = [
  {
    title: "Quiz game JAVA",
    description: "Quiz game similar to the successful TV quiz show 'Who Wants to be a Millionaire'.",
    icon: <FaTrophy size={40} />,
  },
  {
    title: "Semantic Web - Ecommerce",
    description: "The growing interest in human-computer interactions is fueled by Semantic Web Technologies, which allow computers to understand data published in a machine-understandable online format.",
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
    title: "Design Of Energy Efficient Street Light Fault Monitoring System Using GSM Networks",
    description: "Intelligent lighting is designed to optimize the energy consumption for street lighting.",
    icon: <FaLightbulb size={40} />,
  },
  {
    title: "Manual Test Case Execution Guide with Voiceover",
    description: "I created a comprehensive screen recording that demonstrates the step-by-step execution of manual test cases, accompanied by a detailed voiceover to guide newcomers and freshers.",
    icon: <FaPlayCircle size={40} />,
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
            <div className="flex justify-center mb-4">
              {project.icon}
            </div>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
