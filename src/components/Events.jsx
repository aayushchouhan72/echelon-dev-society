import React from "react";
import { upcomingEvents } from "../data/mockData";
import { CalendarIcon, LocationIcon } from "./Icons";

const Events = ({ theme }) => (
  <section
    id="events"
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
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className={`${
              theme === "light" ? "bg-white" : "bg-gray-500"
            } rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group`}
          >
            <div className="p-6">
              <h3
                className={`text-xl font-bold ${
                  theme === "light" ? "text-gray-900" : "text-white"
                } mb-2`}
              >
                {event.title}
              </h3>
              <div
                className={`flex items-center ${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                } mb-2`}
              >
                <CalendarIcon className="h-5 w-5 mr-2 text-violet-500" />
                <span>{event.date}</span>
              </div>
              <div
                className={`flex items-center ${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                } mb-4`}
              >
                <LocationIcon className="h-5 w-5 mr-2 text-violet-500" />
                <span>{event.location}</span>
              </div>
              <p
                className={`${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                } mb-6`}
              >
                {event.description}
              </p>
              <a
                href={event.link}
                className={`inline-block ${
                  theme === "light"
                    ? "bg-gray-800 hover:bg-gray-900"
                    : "bg-violet-600 hover:bg-violet-700"
                } text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300`}
              >
                Register Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Events;
