import React from "react";
import "../App.css";
import profilePicture from '../assets/heroImage.png'; // Import your image

// ABOUT ME SECTION //
const About = () => {
  return (
    <div name="about" className=" w-full min-h-screen flex">
      <div className="max-w-screen-lg p-14 flex items-center"> {/* Flex container for bio and image, items-center for vertical alignment */}

        {/* Bio Text Container */}
        <div className="mr-8"> {/* Add some right margin to separate text and image */}
          <h1 className="text-6xl font-bold">
            <span id="Pavan">About Me</span>
          </h1>
          <p className="pt-4 text-xl leading-8">
          Hello! Pavan Kumar Vipparla here, passionate about web development, frontend engineering, software development, and machine learning. From dynamic web applications to scalable AI-driven solutions, I build innovative, user-friendly, and efficient systems. Let’s connect and create something amazing together!
            <br></br>
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0"> {/* Prevent image from shrinking */}
        <img
            src={profilePicture}
            alt="Your Profile"
            className="rounded-full w-48 h-48 object-cover border-4 border-purple1"
          />

        </div>

      </div>
    </div>
  );
};

export default About;