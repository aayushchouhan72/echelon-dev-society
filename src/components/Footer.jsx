import React from "react";
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import { clubInfo } from "../data/mockData";

const Footer = ({ theme }) => (
  <footer
    className={`py-8 ${
      theme === "light"
        ? "bg-gray-100 text-gray-800"
        : "bg-gray-900 text-gray-300"
    } transition-colors duration-300`}
  >
    <div className="flex justify-center items-center space-x-6">
      <a
        href="https://www.instagram.com/echelondevsociety?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transform transition duration-300 ease-in-out hover:scale-90"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://chat.whatsapp.com/D2Qx7lofeFnLre9gsAU4mW"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-500  transform transition duration-300 ease-in-out hover:scale-90"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://x.com/devsociety_CDGI"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-500 transform transition duration-300 ease-in-out hover:scale-90"
        aria-label="Twitter"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/authwall?trkInfo=AQGhyguR1V1NQgAAAZn4FqZQHjWJ08ZG98a3ZpR8a32M41JL36wEvOB5AKRJzd50Q0rG1_vLsVXamMplbI7t6MC8gcLQ2uh9jk11HF-gSJmb9efd6f2BWN5Szd3QYaclVoeSW9Y=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fechelondevsociety"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 transform transition duration-300 ease-in-out hover:scale-90"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
    </div>

    <div className="container mx-auto px-6 py-8 text-center mt-2 transform transition duration-300 ease-in-out hover:scale-90">
      <p>
        &copy; {new Date().getFullYear()} {clubInfo.name}. All Rights Reserved.
      </p>
      <p
        className={`${
          theme === "light" ? "text-gray-800" : "text-gray-400"
        } mt-2`}
      >
        Made with ❤️ by the students, for the students. By /\ayush ....
      </p>
    </div>
  </footer>
);

export default Footer;
