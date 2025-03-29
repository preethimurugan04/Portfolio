import React, { useEffect } from "react"; // Import useEffect
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const About = () => {
    useEffect(() => { // Initialize AOS in useEffect
        AOS.init({
            duration: 1200, // You can adjust the duration
        });
    }, []); // Empty dependency array means it runs only once on mount

    return (
        <div
            id="about"
            className="p-10 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-700 text-white mb-0" // Gradient applied to fill full background
            data-aos="fade-up" // Professional fade-up animation
        >
            <h2 className="text-3xl font-bold text-center">About Me</h2>
            <p className="mt-4 text-lg text-center">
                Hey there! I'm a passionate QA Engineer who loves diving deep into the world of testing—whether it's manual or automated. 
                I’ve worked on exciting projects for big names like Google GStore and Zurich Farmers Insurance, ensuring software runs like a dream with no bugs in sight. When it comes to testing, I’m all about raising the right bugs, pushing the boundaries of quality, and making sure the product is nothing less than top-notch.
            </p>
            <p className="mt-4 text-lg text-center">
                But hey, apart from breaking things (in the best way possible), I love watching series and movies. I’m a huge sports fan—football and cricket top the list—but I also enjoy playing badminton. Recently, I’ve started exploring Formula 1, and it’s been an adrenaline-packed journey!
            </p>
            <p className="mt-4 text-lg text-center">
                My love for football even led me to a part-time role at Manchester United Football Club (MUFC) while pursuing my master’s degree. Working in such a fast-paced environment has strengthened my attention to detail, adaptability, and ability to perform under pressure—skills that I bring into my QA career.
            </p>
        </div>
    );
};

export default About;
