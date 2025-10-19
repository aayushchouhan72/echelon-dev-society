import React from "react";
import { galleryImages } from "../data/mockData";

const Gallery = ({ theme }) => (
  <section
    id="gallery"
    className={`py-20 ${
      theme === "light" ? "bg-white" : "bg-gray-500"
    } transition-colors duration-300`}
  >
    <div className="container mx-auto px-6">
      <h2
        className={`text-3xl md:text-4xl font-bold text-center ${
          theme === "light" ? "text-gray-800" : "text-white"
        } mb-12 transform transition duration-300 ease-in-out hover:scale-90`}
      >
        Moments from Past Events
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-xl group"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
