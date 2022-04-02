import React from "react";
import {
  inbox,
  chevronRight,
  phone,
  github,
  linkedin,
} from "../resources/Icons";
import TerminalContainer from "../components/TerminalContainer";
import Command from "../components/Command";

const About = () => {
  return (
    <TerminalContainer title={"About Me"}>
      <Command>
        <strong>cat</strong> <span className="yellow">~</span>
        <span className="blue">/info/about.md</span>
      </Command>
      <p className="blue text-2xl md:text-4xl font-semibold my-5">
        Rey Jhon Abarracoso Baquirin
      </p>
      <span className="yellow">Web Application Developer</span>
      <p className="mt-3 mb-2">@skills:</p>
      <p className="blue flex items-center"> {chevronRight} React.js</p>
      <p className="text-blue-500 flex items-center">
        {" "}
        {chevronRight} React Native
      </p>
      <p className="text-red-500 flex items-center"> {chevronRight} Laravel</p>
      <p className="text-red-400 flex items-center"> {chevronRight} Git</p>
      <p className="text-blue-400 flex items-center"> {chevronRight} Php OOP</p>
      <p className="yellow flex items-center"> {chevronRight} JavaScript</p>
      <p className="text-green-500 flex items-center"> {chevronRight} C#</p>
      <p className="text-blue-300 flex items-center"> {chevronRight} C++</p>

      <p className="mt-5 mb-2">@contact:</p>
      <p className="text-blue-300 flex items-center">
        {" "}
        <span className="mr-2">{inbox}</span> reyjhonbaquirin@yahoo.com
      </p>
      <div className="mt-5 flex gap-4 items-center">
        <div className={"text-gray-500 w-8 h-8"}>
          <a
            href={"https://github.com/yourjhay"}
            rel={"noreferrer"}
            target={"_blank"}>
            {github}
          </a>{" "}
        </div>
        <div className={"text-gray-500 w-8 h-8"}>
          <a
            href={"https://www.linkedin.com/in/rey-jhon-baquirin-810402182"}
            rel={"noreferrer"}
            target={"_blank"}>
            {linkedin}
          </a>
        </div>
      </div>
      <p className="pt-5">And oh! I don't use Microsoft Windows. 🙃</p>
    </TerminalContainer>
  );
};

export default About;
