import React, { useEffect } from "react"; // Import useEffect
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Home = () => {
    useEffect(() => { // Initialize AOS in useEffect
        AOS.init({
            duration: 1200, // You can adjust the duration
        });
    }, []); // Empty dependency array means it runs only once on mount

    return (
        <div
            className="h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10"
            data-aos="fade-up" // Add fade-up animation when scrolling
        >
            <div>
                <h1 className="text-5xl font-bold">Hello, I'm Preethi!</h1>
                <p className="mt-4 text-lg">QA Engineer | Automation Tester | Agile Enthusiast</p>
            </div>
        </div>
    );
};

export default Home;