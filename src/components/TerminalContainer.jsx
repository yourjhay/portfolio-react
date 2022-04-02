import React from "react";

const TerminalContainer = ({ children, title, display }) => {
  return (
    <div className="root-page-container bg-gray-700">
      <div className="backdrop-upper-half" />
      <div className="terminal-outer-container p-5 md:p-20">
        <div className="terminal-inner-container">
          <div className="terminal-title-bar">
            <div className="terminal-title-actions">
              <div className="title-btn title-btn__red" />
              <div className="title-btn title-btn__yellow" />
              <div className="title-btn title-btn__green" />
            </div>

            <div className="terminal-title-text">
              RJ: <span className="blue">{title}</span>
            </div>
          </div>

          <div className="terminal-content-container">
            <div className="terminal-content-text">{children}</div>
          </div>

          <div className="terminal-mode-line-container">
            <div className="terminal-mode-indicator">production</div>
            <div className="mode-indicator-triangle" />
            <div className="terminal-file-display">
              {display ?? "Portfolio"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalContainer;
