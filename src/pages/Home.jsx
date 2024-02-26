import React from "react";
import { Link } from "react-router-dom";
import TerminalContainer from "../components/TerminalContainer";
import Command from "../components/Command";

const Home = () => {


  return (
    <TerminalContainer title={"Home"}>
      <Command>
        <strong>command</strong> <span className="yellow">--</span>
        <span className="blue">
          available <span className="text-gray-500">(click here to edit)</span>
        </span>
      </Command>
      <div className="mt-3">
        <p>
          Hello! Welcome to my site. Interested about me? Please check available
          commands below to show my information.
        </p>
      </div>
      <div className="mt-3">
        <p className="text-gray-500">Show Profile Information:</p>
        <p className="text-blue-400"><Link className="visited:text-blue-400" to={"/about"} >cat ~/info/about.md</Link></p>
        <p className="text-blue-400"><Link className="visited:text-blue-400" to={"/about"} >about</Link></p>
        <p className="mt-3 text-gray-500">To go to my LinkedIn profile:</p>
        <p className="text-blue-400">linkedin</p>
        <p className="mt-3 text-gray-500">To go to my Github profile:</p>
        <p className="text-blue-400">github</p>
        <p className="mt-5 text-gray-500">
          To go back here or to display available commands:
        </p>
        <p className="text-blue-400">command --help</p>
        <p className="text-blue-400">command --available</p>
        <p className="text-blue-400">cd /home</p>
      </div>
    </TerminalContainer>
  );
};

export default Home;
