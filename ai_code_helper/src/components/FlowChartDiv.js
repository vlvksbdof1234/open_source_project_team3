import React, { useEffect } from "react";
import mermaid from "mermaid";
import "../styles/FlowChartDiv.css"

export const FlowChartDiv = () => {
  // Store Mermaid code
  const mermaidCode = `
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
  `;
  
  useEffect(() => {
    // Mermaid 초기화
    mermaid.initialize({ startOnLoad: true });

    // Mermaid 코드 렌더링
    mermaid.contentLoaded();
  }, []);

  return (
    <div>
      <div className="mermaid">{mermaidCode}</div>
    </div>
  );
};

export default FlowChartDiv;
