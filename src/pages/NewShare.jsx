import React from "react";
import TerminalContainer from "../components/TerminalContainer";

const NewShare = () => {
  return (
    <div>
      <TerminalContainer>
        <p className="blue text-2xl md:text-4xl font-semibold my-5">
          New Share
        </p>
        <div className="mt-3">
          <form className="flex flex-col space-y-3 md:w-1/2 mx-auto">
            <input
              type="text"
              className="p-2 rounded-md bg-transparent border"
              placeholder="Title"
            />
            <textarea
              className="rounded-md bg-transparent p-2  border"
              rows={8}></textarea>
            <button
              type="submit"
              className="p-2 rounded-md border hover:bg-gray-600 ">
              Submit
            </button>
          </form>
        </div>
      </TerminalContainer>
    </div>
  );
};

export default NewShare;
