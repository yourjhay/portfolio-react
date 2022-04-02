import React from "react";
import TerminalContainer from "../components/TerminalContainer";
import Command from "../components/Command";

const Shares = () => {
  return (
    <TerminalContainer title={"Shares"} display="Sharing">
      <Command>
        <strong>ls</strong>
        <span className="ml-2 blue">
          <span className="yellow">-l</span> /var/log/shares.log
        </span>
      </Command>
      <p className="blue text-xl md:text-2xl font-semibold my-5">
        Anything I want to share.
      </p>
      <div className="mt-5 w-full md:w-2/3 border border-dashed">
        <div className="flex justify-between  border-b  border-dotted">
          <div className="w-1/2 p-2">Date</div>
          <div className="w-full border-l border-dotted p-2">Title</div>
          <div className="w-full border-l border-dotted p-2">Author</div>
        </div>
        <div className="p-2">There nothing here at the moment.</div>
      </div>
      <div className="mt-5">
        <p>
          run <span className="text-blue-400">command --help</span> to show
          available commands.
        </p>
      </div>
    </TerminalContainer>
  );
};

export default Shares;
