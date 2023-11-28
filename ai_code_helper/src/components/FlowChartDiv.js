import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import "../styles/FlowChartDiv.css";

export const FlowChartDiv = () => {
  const initialCode = `
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
  `;
  const [mermaidCode, setMermaidCode] = useState(initialCode);
  const [currentCode, setCurrentCode] = useState(initialCode);
  const [isError, setIsError] = useState(false);

  const renderMermaid = () => {
    mermaid.initialize({
      startOnLoad: true,
      errorCallback: (err) => {
        console.error(err);
        setIsError(true);
      },
    });

    // Clear the previous diagram
    const container = document.querySelector(".mermaid");
    if (container) {
      container.innerHTML = "";
    }

    mermaid.render("mermaidGraph", mermaidCode, (svgCode) => {
      if (container) {
        container.innerHTML = svgCode;
      }
      setIsError(false);
    });
  };

  useEffect(() => {
    renderMermaid();
  }, []);

  const handleCodeChange = (event) => {
    setCurrentCode(event.target.value);
  };

  const executeMermaid = () => {
    setMermaidCode(currentCode);
    renderMermaid();
  };

  const resetCode = () => {
    setCurrentCode(initialCode);
    setMermaidCode(initialCode);
    renderMermaid();
  };

  return (
    <div className="mermaid-layout">
      <div className="mermaid-editor">
        <textarea value={currentCode} onChange={handleCodeChange} />
        <button onClick={executeMermaid}>실행</button>
        <button onClick={resetCode}>원래대로</button>
      </div>
      <div className="mermaid-container">
        {isError ? (
          <img src="/path/to/error-image.png" alt="Error" />
        ) : (
          <div className="mermaid" id="mermaidGraph"></div>
        )}
      </div>
    </div>
  );
};

export default FlowChartDiv;