import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Command = ({ children }) => {
  const navigate = useNavigate();
  const [command, setCommand] = React.useState("");
  const [error, setError] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  let timer = null;

  useEffect(() => {
    return () => {
      if (timer !== null) clearTimeout(timer);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (
        command.includes("cd /home") ||
        command.includes("command --available") ||
        command.includes("--help") ||
        command.includes("cd ~")
      ) {
        navigate("/");
      } else if (
        command.includes("/var/log/shares.log") ||
        command.includes("shares")
      ) {
        navigate("shares");
      } else if (
        command.includes("cat ~/info/about.md") ||
        command.includes("about")
      ) {
        navigate("about");
      } else if (
        command.includes("linkedin") ||
        command.includes("show linkedin") ||
        command.includes("goto linkedin")
      ) {
        timer = setTimeout(() => {
          window.open(
            "https://www.linkedin.com/in/rey-jhon-baquirin-810402182",
            "_blank"
          );
        }, 2000);
        setFeedback("opening linkedin profile in new tab.");
      } else if (
        command.includes("github") ||
        command.includes("show github") ||
        command.includes("goto github")
      ) {
        timer = setTimeout(() => {
          window.open("https://github.com/yourjhay", "_blank");
        }, 2000);
        setFeedback("opening github profile in new tab.");
      } else {
        setError("Command not found.");
      }
    }
  };

  return (
    <>
      $
      {command !== "" ? (
        <input
          autoFocus
          value={command}
          onChange={(e) => {
            setCommand(e.target.value);
            setError("");
            setFeedback("");
          }}
          onKeyDown={handleKeyDown}
          className="bg-transparent ml-3 focus:outline-none md:w-1/2"
        />
      ) : (
        <span onClick={() => setCommand(" ")} className="ml-3">
          {children} <span className="animate-ping">|</span>
        </span>
      )}
      {feedback && <p className="text-blue-500">{feedback}</p>}
      {error && <p className="text-md">/usr/system: {error}</p>}
    </>
  );
};

export default Command;
