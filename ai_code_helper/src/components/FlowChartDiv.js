import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import "../styles/FlowChartDiv.css";
import logo from "../image/settingLogo.png";
import { createFlowChartMermaid } from "../apiService";
import LoadingSpinner from "./LoadingSpinner";

export const FlowChartDiv = ({ curCode }) => {
  const initialMermaidCode = ``;
  const [mermaidVisible, setMermaidVisible] = useState("hidden");
  const [mermaidCode, setMermaidCode] = useState(initialMermaidCode);
  const [renderedMermaidCode, setRenderedMermaidCode] =
    useState(initialMermaidCode);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [tempDetailLevel, setTempDetailLevel] = useState("basic");
  const [tempLanguage, setTempLanguage] = useState("English");
  const [detailLevel, setDetailLevel] = useState("basic");
  const [language, setLanguage] = useState("English");
  const [isEditOpen, setEditIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generate, setGenerate] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleEdit = () => {
    if (!isEditOpen) {
      setShowSettings(false); // 에디트 모드를 켤 때, 설정 모드는 끈다
    }
    setEditIsOpen(!isEditOpen);
  };

  const renderMermaid = () => {
    console.log("현재 렌더링 대상: " + renderedMermaidCode);
    mermaid.initialize({ startOnLoad: true });
    const mermaidElement = document.getElementById("mermaid-diagram");

    // mermaid-diagram 요소가 존재하지 않으면 함수를 종료합니다.
    if (!mermaidElement) {
      return;
    }

    if (mermaidElement.getAttribute("data-processed")) {
      mermaidElement.removeAttribute("data-processed");
    }
    mermaid.contentLoaded();
  };

  const applyChanges = () => {
    setRenderedMermaidCode(mermaidCode);
    // renderMermaid();
  };

  const resetChanges = () => {
    setMermaidCode(renderedMermaidCode);
  };

  const toggleSettings = () => {
    if (!showSettings) {
      setEditIsOpen(false); // 설정 모드를 켤 때, 에디트 모드는 끈다
    }
    setShowSettings(!showSettings);
    setTempDetailLevel(detailLevel);
    setTempLanguage(language);
  };

  const applySettingChanges = () => {
    setDetailLevel(tempDetailLevel);
    setLanguage(tempLanguage);
    setShowSettings(false);
  };

  const cancelSettingChanges = () => {
    setShowSettings(false);
  };

  // useEffect(() => {
  //   if(showMermaid)
  //     renderMermaid();
  // }, [renderedMermaidCode]);

  // useEffect(() => {
  //   console.log(
  //     `복잡도: ${detailLevel} 언어: ${language} 생성 대상: ${query} 코드: ${curCode}`
  //   );
  // });

  useEffect(() => {
    renderMermaid();
  }, [renderedMermaidCode]);

  useEffect(() => {
    applyChanges();
  }, [generate]);

  const handleClick = async () => {
    setShowSettings(false);
    setIsLoading(true);
    setMermaidVisible("hidden");
    setGenerate(false);
    await createFlowChartMermaid(
      curCode,
      query,
      detailLevel,
      language,
      setIsLoading,
      setMermaidCode,
      setRenderedMermaidCode,
      setMermaidVisible
    );
    setIsLoading(false);
    setMermaidVisible("visible");
    setGenerate(true);
  };

  return (
    <div>
      <h1>Flow Chart</h1>
      <div className="generate-container">
        <input
          placeholder="Type Function or Logic"
          className="diagram-config-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleClick}>Generate</button>
        <button className="settingButton" onClick={toggleSettings}>
          <img className="settingImg" alt="settingLogo.png" src={logo} />
        </button>
      </div>

      {showSettings && (
          <div className="diagram-setting">
            <div className="complex-setting">
              <div className="content-config">
                <label>
                  <input
                    type="radio"
                    name="detailLevel"
                    value="simple"
                    checked={tempDetailLevel === "simple"}
                    onChange={() => setTempDetailLevel("simple")}
                  />{" "}
                  단순
                </label>
                <label>
                  <input
                    type="radio"
                    name="detailLevel"
                    value="basic"
                    checked={tempDetailLevel === "basic"}
                    onChange={() => setTempDetailLevel("basic")}
                  />{" "}
                  기본
                </label>
                <label>
                  <input
                    type="radio"
                    name="detailLevel"
                    value="advanced"
                    checked={tempDetailLevel === "advanced"}
                    onChange={() => setTempDetailLevel("advanced")}
                  />{" "}
                  복잡
                </label>
              </div>
              <select
                value={tempLanguage}
                onChange={(e) => setTempLanguage(e.target.value)}
              >
                <option value="English">영어</option>
                <option value="Korean">한국어</option>
              </select>
            </div>
            <div className="config-button">
              <button onClick={applySettingChanges}>설정 적용</button>
              <button onClick={cancelSettingChanges}>설정 취소</button>
            </div>
          </div>
        )}

      {isLoading && <LoadingSpinner />}

      <div className={`mermaid-container ${mermaidVisible}`}>
        <div
          className={`mermaid ${isModalOpen ? "modal" : ""}`}
          onClick={toggleModal}
          id="mermaid-diagram"
        >
          {renderedMermaidCode}
        </div>

        <button className="editButton" onClick={toggleEdit}>
          View & Edit Code
        </button>

        
        {isEditOpen && (
          <div className="mermaid-editor">
            <textarea
              value={mermaidCode}
              onChange={(e) => setMermaidCode(e.target.value)}
            />
            <div className="edit-button-container">
              <button onClick={applyChanges}>적용</button>
              <button onClick={resetChanges}>초기화</button>
            </div>
          </div>
        )}

        {isModalOpen && <div className="modal-backdrop"></div>}
      </div>
    </div>
  );
};

export default FlowChartDiv;
