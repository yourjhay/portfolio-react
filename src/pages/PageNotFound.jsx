import React from "react";
import Command from "../components/Command";
import TerminalContainer from "../components/TerminalContainer";

const PageNotFound = () => {
  return (
    <div>
      <TerminalContainer title="Missing Page">
        <Command>
          <strong>cat</strong>
          <span className="blue"> /var/log/error.log</span>
        </Command>
        <p className="blue text-2xl md:text-4xl text-center font-semibold my-5">
          404
        </p>
        <p className="text-purple-400 text-1xl md:text-2xl text-center font-semibold my-5">
          HMPPP... THAT PAGE IS NOT MINE.
        </p>
        <p className="text-center text-gray-500">
          run <span className="text-blue-400">cd /home</span> to go display main
          page.
        </p>
      </TerminalContainer>
    </div>
  );
};

export default PageNotFound;
