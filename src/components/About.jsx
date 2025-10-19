import React from "react";
import { clubInfo } from "../data/mockData";

const About = ({ theme }) => (
  <section
    id="about"
    className={`py-20 ${
      theme === "light" ? "bg-white" : "bg-gray-500"
    } transition-colors duration-300`}
  >
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src={clubInfo.About}
          alt="Students collaborating"
          className="rounded-lg shadow-2xl width-50 transform transition duration-300 ease-in-out hover:scale-90"
        />
      </div>
      <div className="text-left">
        <h2
          className={`text-3xl md:text-4xl font-bold ${
            theme === "light"
              ? "text-gray-800 bg-white"
              : "text-white bg-gray-500"
          } mb-6 transform transition duration-300 ease-in-out hover:scale-90`}
        >
          Our Mission
        </h2>
        <p
          className={`${
            theme === "light"
              ? "text-gray-800  bg-white"
              : "text-gray-300  bg-gray-500"
          } mb-4 leading-relaxed transform transition duration-300 ease-in-out hover:scale-90`}
        >
          We are a passionate group of students dedicated to fostering a vibrant
          tech culture on campus. Our goal is to provide a platform for students
          to learn, collaborate, and showcase their skills through exciting
          hackathons, workshops, and events.
        </p>
        <p
          className={`${
            theme === "light" ? "text-gray-800" : "text-gray-300"
          } leading-relaxed transform transition duration-300 ease-in-out hover:scale-90`}
        >
          Whether you're a seasoned coder or just starting, the {clubInfo.name}{" "}
          is the perfect place to grow your knowledge, build your network, and
          turn your ideas into reality.
        </p>
      </div>
    </div>
  </section>
);

export default About;
