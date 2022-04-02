import React from "react";

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
          Hello! Welcome to my site. Please check available commands below to
          show my information.
        </p>
      </div>
      <div className="mt-3">
        <p className="text-gray-500">Show Profile Information:</p>
        <p className="text-blue-400">cat ~/info/about.md</p>
        <p className="text-blue-400">about</p>
        <p className="mt-3 text-gray-500">
          To go back here or to display available commands:
        </p>
        <p className="text-blue-400">command --help</p>
        <p className="text-blue-400">command --available</p>
        <p className="text-blue-400">cd /home</p>
        <p className="mt-3 text-gray-500">To go to my LinkedIn profile:</p>
        <p className="text-blue-400">linkedin</p>
        <p className="mt-3 text-gray-500">To go to my Github profile:</p>
        <p className="text-blue-400">github</p>
      </div>
    </TerminalContainer>
  );
};

export default Home;
