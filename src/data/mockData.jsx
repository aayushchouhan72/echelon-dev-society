// --- ASSET IMPORTS ---
import clubLogo from "../assets/logo.jpg";
import heroImg1 from "../assets/image-1.jpeg";
import heroImg2 from "../assets/hero-2.jpg";
import heroImg3 from "../assets/hero-3.jpg";
import heroImg4 from "../assets/ima.jpeg";
import galleryImg1 from "../assets/hackwava.jpg";
import galleryImg2 from "../assets/hackwava2.0.jpg";
import galleryImg3 from "../assets/web3.2.jpg";
import galleryImg4 from "../assets/web3.jpg";
import galleryImg5 from "../assets/gitgithub.jpg";
import galleryImg6 from "../assets/hackstart.jpg";
import teamImg1 from "../assets/team.jpg";
import teamImg2 from "../assets/team1.webp";
import teamImg3 from "../assets/team3.1.japg.webp";
import teamImg4 from "../assets/team.jpg";
import aboutImg from "../assets/about_sectio.png";

// --- MOCK DATA EXPORTS ---

export const clubInfo = {
  name: "Echelon Dev Society EDS",
  logoUrl: clubLogo,
  About: aboutImg,
};

export const Aboutimg = [aboutImg];

export const heroSliderImages = [heroImg4, heroImg2, heroImg3, heroImg1];

export const upcomingEvents = [
  {
    title: " Web3 Bootcamp",
    date: "October 25-26, 2025",
    location: "Main Auditorium",
    description:
      "an immersive learning experience designed to help students explore the next generation of the web — blockchain, decentralized apps (dApps), smart contracts, and NFTs.",
    link: "#",
  },
  {
    title: "Intro to AI/ML Workshop",
    date: "November 12, 2025",
    location: "CS Department, Lab 207",
    description:
      "A hands-on workshop for beginners to explore the fascinating world of Artificial Intelligence and Machine Learning.",
    link: "#",
  },
  {
    title: "CodeSprint: Competitive Programming",
    date: "November 28, 2025",
    location: "Online (Discord)",
    description:
      "Test your algorithmic skills in a fast-paced competitive programming contest. For all skill levels.",
    link: "#",
  },
];

export const galleryImages = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
];

export const teamMembers = [
  { name: "Priya Sharma", role: "President", imageUrl: teamImg1 },
  { name: "Rohan Verma", role: "Vice President", imageUrl: teamImg3 },
  { name: "Aisha Khan", role: "Head of Events", imageUrl: teamImg2 },
  { name: "David Lee", role: "Social Media", imageUrl: teamImg4 },
];

export const aboutSectionImage = aboutImg;
