import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import "../styles/FlowChartDiv.css";
import logo from "../image/settingLogo.png";
import { createFlowChartMermaid } from "../apiService";
import LoadingSpinner from "./LoadingSpinner";

export const FlowChartDiv = ({ curCode }) => {
  const initialMermaidCode = `
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
  `;
  const [showMermaid, setShowMermaid] = useState(false);
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
    setMermaidCode(initialMermaidCode);
    setRenderedMermaidCode(initialMermaidCode);
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

  // useEffect(() => {
  //   if (showMermaid) {
  //     renderMermaid();
  //   }
  // }, [showMermaid]);

  const handleClick = async () => {
    setShowSettings(false);
    setIsLoading(true);
    setShowMermaid(false);
    await createFlowChartMermaid(
      curCode,
      query,
      detailLevel,
      language,
      setIsLoading,
      setMermaidCode,
      setRenderedMermaidCode,
      setShowMermaid
    );
    // setMermaidCode()
    setIsLoading(false);
    setShowMermaid(true);

    console.log("디테일: " + detailLevel);
    console.log("언어: " + language);
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
        <button
          onClick={() => {
            handleClick();
            applyChanges();
          }}
        >
          Generate
        </button>
      </div>

      {isLoading && <LoadingSpinner />}

      {showMermaid && (
        <div className="mermaid-container">
          <div
            className={`mermaid ${isModalOpen ? "modal" : ""}`}
            onClick={toggleModal}
            id="mermaid-diagram"
          >
            {renderedMermaidCode}
          </div>
          <div className="edit-config-buttons">
            <button className="editButton" onClick={toggleEdit}>
              View & Edit Code
            </button>
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
                      value="basic"
                      checked={tempDetailLevel === "basic"}
                      onChange={() => setTempDetailLevel("basic")}
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
      )}
    </div>
  );
};

export default FlowChartDiv;
