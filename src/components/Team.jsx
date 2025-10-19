import React from "react";
import { teamMembers } from "../data/mockData";

const Team = ({ theme }) => (
  <section
    id="team"
    className={`py-20 ${
      theme === "light" ? "bg-gray-50" : "bg-gray-500"
    } transition-colors duration-300`}
  >
    <div className="container mx-auto px-6">
      <h2
        className={`text-3xl md:text-4xl font-bold text-center ${
          theme === "light" ? "text-gray-800" : "text-white"
        } mb-12 transform transition duration-300 ease-in-out hover:scale-90`}
      >
        Meet the Team
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 shadow-lg border-4 ${
                theme === "light" ? "border-white" : "border-gray-700"
              }`}
            />
            <h3
              className={`text-lg font-bold ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {member.name}
            </h3>
            <p
              className={`${
                theme === "light" ? "text-violet-600" : "text-violet-400"
              }`}
            >
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
