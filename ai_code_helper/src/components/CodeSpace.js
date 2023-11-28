import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import "./../styles/CodeSpace.css";

function CodeSpace() {
  const [curMenu, setCurMenu] = useState("code-inspection");

  const [value, updateValue] = useState("");
  const [jsvalue, updatejsValue] = useState("");
  const [cssvalue, updatecssValue] = useState("");
  const [preview, updatePreview] = useState("");
  const [dark, updateDark] = useState(false);
  const [selected, updateSelected] = useState("HTML");

  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }

  useEffect(() => {
    try {
      eval(jsvalue);
    } catch (e) {
      alert("Please verify your JS");
    }
    addStyle(cssvalue);
  }, [preview]);

  return (
    <div className="codeSpace">
      <div className="playground">
        <select
          className={`dropdown ${dark ? "darkDD" : ""}`}
          value={selected}
          onChange={(e) => {
            updateSelected(e.target.value);
          }}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
        </select>
        <div className={`editor mr-0 ${dark ? "colorDark" : ""}`}></div>
      </div>
      <div className="footer">
        <div
          className={`run ${dark ? "darkRun" : ""}`}
          onClick={() => {
            updatePreview(value);
            try {
              eval(jsvalue);
            } catch (e) {
              alert("Please verify your JS");
            }
            addStyle(cssvalue);
          }}
        >
          Run
        </div>
      </div>
    </div>
  );
}

export default CodeSpace;