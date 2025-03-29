import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Projects from "./components/Projects.js";  // Add .js extension
import WorkExperience from "./components/WorkExperience.js"; // Adjust the path based on your file structure
import About from "./components/About.js"; // Import About component
import Contact from "./components/Contact.js"; // Import Contact component
import Footer from "./components/Footer.js"; // Import Footer component

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="App">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-12 text-center">
        <h1 className="text-5xl font-extrabold" data-aos="fade-down">
          Preethi Murugan
        </h1>
        <p className="text-xl mt-3" data-aos="fade-up">
          Software Testing Professional | Manual & Automation QA | Agile Practitioner
        </p>
      </header>

      {/* About Section */}
      <About /> {/* Add the About component here */}

      {/* Work Experience Section */}
      <WorkExperience /> {/* Add WorkExperience component here */}

      {/* Projects Section */}
      <Projects /> {/* This will display your projects as before */}

      {/* Contact Section */}
      <Contact /> {/* Add the Contact section here */}

      {/* Footer */}
      <Footer /> {/* Replacing the old footer with the new Footer component */}
    </div>
  );
}

export default App;
