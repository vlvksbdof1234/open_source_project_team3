import React, { useState } from "react";
import "../styles/PseudoCode.css";
import { createPseudoCode } from "../apiService";
import logo from "../image/settingLogo.png";
import LoadingSpinner from "./LoadingSpinner";

export const PseudoCodeDiv = ({ curCode }) => {
  const [pseudoCode, setPseudoCode] = useState("");
  const [query, setQuery] = useState("");
  const [tempDetailLevel, setTempDetailLevel] = useState("basic");
  const [tempLanguage, setTempLanguage] = useState("English");
  const [detailLevel, setDetailLevel] = useState("basic");
  const [language, setLanguage] = useState("English");
  const [showSettings, setShowSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  // setPseudoCode
  const toggleSettings = () => {
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

  const handleClick = async () => {
    setShowSettings(false);
    setIsLoading(true);
    setVisible(false);
    await createPseudoCode(
      curCode,
      query,
      detailLevel,
      language,
      setIsLoading,
      setPseudoCode
    );
    setIsLoading(false);
    setVisible(true);
  };

  return (
    <div>
      <h1>Pseudo Code</h1>
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
                  value="basic"
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
      {visible && <textarea value={pseudoCode}></textarea>}
    </div>
  );
};

export default PseudoCodeDiv;
