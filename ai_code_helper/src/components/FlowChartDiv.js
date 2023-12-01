import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import "../styles/FlowChartDiv.css";

export const FlowChartDiv = () => {
  const initialMermaidCode = `
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
  `;
  const [mermaidCode, setMermaidCode] = useState(initialMermaidCode);
  const [renderedMermaidCode, setRenderedMermaidCode] = useState(initialMermaidCode);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Mermaid 다이어그램 렌더링 함수
  const renderMermaid = () => {
    mermaid.initialize({ startOnLoad: true });

    const mermaidElement = document.getElementById('mermaid-diagram');
    if (mermaidElement.getAttribute('data-processed')) {
      mermaidElement.removeAttribute('data-processed');
    }

    mermaid.contentLoaded();
  };

  const applyChanges = () => {
    setRenderedMermaidCode(mermaidCode);
  };

  // 초기화 버튼 핸들러
  const resetCode = () => {
    setMermaidCode(initialMermaidCode);
    setRenderedMermaidCode(initialMermaidCode);
  };

  useEffect(() => {
    renderMermaid();
  }, [renderedMermaidCode]);

  return (
    <div className="mermaid-container">
      <div
        className={`mermaid ${isModalOpen ? "modal" : ""}`}
        onClick={toggleModal}
        id="mermaid-diagram"
      >{renderedMermaidCode}</div>
      <div className="mermaid-editor">
        <textarea
          value={mermaidCode}
          onChange={(e) => setMermaidCode(e.target.value)}
        />
        <button onClick={applyChanges}>적용</button>
        <button onClick={resetCode}>초기화</button>
      </div>
      
      
      {isModalOpen && <div className="modal-backdrop"></div>}
    </div>
  );
};

export default FlowChartDiv;
