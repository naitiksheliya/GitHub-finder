import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
    <div className="text-center	">

      <h1 className="text-6xl mb-4">Github Finder</h1>
      {/* <p className='mb-4 text-2xl font-light'> */}
      <ul>
        <li>
          GitHub Finder project is a web application that allows users to search
          for GitHub users
          <li>
            It also helps retrieve information about their public repositories
            and profiles using GitHub rest API and display it nicely using
            Reducers.
          </li>
        </li>
        <li>The UI is built with tailwind CSS and Daisy UI.</li>
        <li><strong>Technology Stack</strong>: React.js, tailwind CSS, Daisy UI.</li>
      </ul>

      {/* </p> */}
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </div>
    </>
  );
}

export default About;
