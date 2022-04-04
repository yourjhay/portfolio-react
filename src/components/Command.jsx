import React, { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Command = ({ children }) => {
  const location = useLocation();
  const auth = useContext(AuthContext);
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

  const handleKeyDown = async (e) => {
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
      } else if (command.includes("login")) {
        let cmd = command.trim();
        const args = cmd.split(" ");
        if (args.length !== 3) {
          setError("invalid login options.");
        }
        let username = args[1];
        let password = args[2];
        let from = location.state?.from?.pathname || "/";
        setError("Please wait singing in...");
        await auth.signin({ username, password }, () => {
          console.log("navigating", from);
          setError("");
          navigate(from, { replace: true });
        });
        setError("");
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
