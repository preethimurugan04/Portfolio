import React from 'react';

const Hero = () => {
  return (
    <div className="bg-light-beige h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-extrabold text-dark-charcoal">Welcome to My QA Portfolio</h1>
      <p className="text-lg mt-4 max-w-2xl text-dark-charcoal">
        I'm a QA Engineer passionate about software testing, automation, and ensuring quality in every project.
      </p>
      <button className="mt-6 bg-soft-blue px-6 py-3 text-white font-semibold rounded-lg hover:bg-sage-green transition">
        View My Work
      </button>
    </div>
  );
};

export default Hero;
