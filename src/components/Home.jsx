import React, { useState, useEffect } from "react";
import "../App.css";
import image1 from "../assets/image1.png";


import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPaperclip } from "react-icons/bs";

const Home = () => {
  // Array of image sources for cycling
  const images = [image1, image4, image5, image6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Update the image index every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div name="home" className="relative h-screen w-full">
      {/* Main Content */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">
        <div className="flex flex-col justify-center items-center h-full">
          {/* Fixed Cycling Image Container */}
          <div className="relative w-60 h-60 mb-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Profile"
                className={`absolute inset-0 border-4 border-purple1 rounded-full object-contain w-full h-full transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <h1 className="pt-2 pb-8 text-6xl sm:text-7xl font-bold text-black">
            Hi, I'm{" "}
            <span
              id="Pavan"
              className="bg-gradient-to-b from-transparent to-yellow-300"
            >
              Pavan Kumar Vipparla
            </span>
            .
          </h1>
          <h2 className="text-xl max-w-md font-semibold text-purple1 whitespace-nowrap">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am a student, creator and tech enthusiast.")
                  .start();
              }}
            />
          </h2>
          <div className="py-4 flex space-x-4">
            <a
              href="https://github.com/pkchoudary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="hover:text-purple1" />
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-kumar-vipparla-86b30828a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} className="hover:text-purple1" />
            </a>
            <a href="mailto:vipparlapavankumar2001@gmail.com">
              <HiOutlineMail size={30} className="hover:text-purple1" />
            </a>
            <a
              href="https://drive.google.com/file/d/1lfFhWMRhu1lta8D5AwUHcGUgnQ2zTEl4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsPaperclip size={30} className="hover:text-purple1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
