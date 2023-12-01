import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import "../styles/FlowChartDiv.css";

export const FlowChartDiv = () => {
  // Store Mermaid code
  const mermaidCode = `
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
  `;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    // Mermaid 초기화
    mermaid.initialize({ startOnLoad: true, maxWidth: 800 });

    // Mermaid 코드 렌더링
    mermaid.contentLoaded();
    const mermaidSvg = document.querySelector(".mermaid svg");
    if (mermaidSvg) {
      mermaidSvg.style.maxWidth = "250px";
      mermaidSvg.style.width = "100%";
      mermaidSvg.style.height = "auto";
    }
  }, []);

  return (
    <div className="mermaid-container">
      <div
        className={`mermaid ${isModalOpen ? "modal" : ""}`}
        onClick={toggleModal}
      >
        {mermaidCode}
      </div>
      {isModalOpen && <div className="modal-backdrop"></div>}
    </div>
  );
};

export default FlowChartDiv;