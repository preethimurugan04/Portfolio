import React, { useState } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS CSS

const WorkExperience = () => {
  const [showGoogleDetails, setShowGoogleDetails] = useState(false);
  const [showZurichDetails, setShowZurichDetails] = useState(false);
  const [showMUDetails, setShowMUDetails] = useState(false);

  // Initialize AOS when the component mounts
  React.useEffect(() => {
    AOS.init({ duration: 1200 }); // Adjust animation duration
  }, []);

  return (
    <section
      id="work-experience"
      className="my-0 px-6 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-700 text-white"
    >
      <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
        Work Experience
      </h2>

      {/* Google GStore */}
      <div className="mb-12 mt-8 p-6 rounded-xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
        <div
          className="cursor-pointer"
          onClick={() => setShowGoogleDetails(!showGoogleDetails)}
        >
          <h3 className="text-2xl font-semibold text-white" data-aos="fade-down">
            Software Tester
          </h3>
          <p className="text-xl italic text-gray-200" data-aos="fade-up">
            Accenture | Client: Google GStore (E-commerce)
          </p>
          <p className="text-lg text-gray-100" data-aos="fade-up">
            Chennai, India | 06/2021 – 12/2023
          </p>
        </div>

        {showGoogleDetails && (
          <ul
            className="list-disc ml-6 mt-4 text-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li>Led mobile app testing for iOS & Android, improving cross-platform functionality.</li>
              <li>Implemented API testing and automated scripts, enhancing backend integration.</li>
              <li>Worked in Agile teams to ensure fast, iterative deployments and high-quality releases.</li>
              <li>Developed test strategies and automated scripts, boosting test efficiency by 15%.</li>
              <li>Collaborated with global teams to troubleshoot complex issues and improve performance.</li>
            <li>Developed and executed automation scripts using Cider and Selenium.</li>
          </ul>
        )}
      </div>

      {/* Zurich Farmers Insurance */}
      <div className="mb-12 mt-8 p-6 rounded-xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
        <div
          className="cursor-pointer"
          onClick={() => setShowZurichDetails(!showZurichDetails)}
        >
          <h3 className="text-2xl font-semibold text-white" data-aos="fade-down">
            Associate Software Engineer
          </h3>
          <p className="text-xl italic text-gray-200" data-aos="fade-up">
            Accenture | Client: Zurich Farmers Insurance
          </p>
          <p className="text-lg text-gray-100" data-aos="fade-up">
            Chennai, India | 07/2019 – 06/2021
          </p>
        </div>

        {showZurichDetails && (
          <ul
            className="list-disc ml-6 mt-4 text-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li>Executed functional, regression, and integration testing for financial systems.</li>
            <li>Conducted API testing and backend validation (SQL, DB2), ensuring data integrity.</li>
            <li>Collaborated with QA teams to refine test plans and strategies.</li>
            <li>Mentored junior testers and contributed to best practices in automation.</li>
            <li>Trained in UFT, BDD, Cucumber, and Selenium, completing assessments with high proficiency.</li>
          </ul>
        )}
      </div>

      {/* Manchester United */}
      <div className="mb-12 mt-8 p-6 rounded-xl shadow-lg bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600">
        <div
          className="cursor-pointer"
          onClick={() => setShowMUDetails(!showMUDetails)}
        >
          <h3 className="text-2xl font-semibold text-white" data-aos="fade-down">
            Hospitality Part-Time Role
          </h3>
          <p className="text-xl italic text-gray-200" data-aos="fade-up">
            Manchester United Football Club
          </p>
          <p className="text-lg text-gray-100" data-aos="fade-up">
            Manchester, United Kingdom | 07/2024 – Present
          </p>
        </div>

        {showMUDetails && (
          <ul
            className="list-disc ml-6 mt-4 text-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li>Gained hands-on experience in a fast-paced environment, ensuring operational efficiency.</li>
            <li>Developed teamwork and communication skills through cross-department collaboration.</li>
            <li>Adapted to changing priorities, demonstrating problem-solving and decision-making under pressure.</li>
            <li>Learned how large-scale teams operate in a globally recognized organization.</li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default WorkExperience;
