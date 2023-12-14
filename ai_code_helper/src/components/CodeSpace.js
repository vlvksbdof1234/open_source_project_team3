import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import DiffEditor from "./diffEditor";
import "./../styles/CodeSpace.css";
import Modal from "../components/Modal"
import { createCodeInspection } from "../apiService";


function CodeSpace({curCode, setcurCode, currentDiff, setCurrentDiff}) {

  const [value, updateValue] = useState("");
  const [jsvalue, updatejsValue] = useState("");
  const [cssvalue, updatecssValue] = useState("");
  const [preview, updatePreview] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  
  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  const callGpt = () => {
    createCodeInspection(currentCode,setCodeInspect,setCodeInspectIsLoading);
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
        <div className={`editor mr-0 editorbox`}>
          <Editor curCode={curCode} setcurCode={setcurCode}></Editor>
        </div>
      </div>
      <div className="footer">

      <button className={`footer-button primary-footer-button`} onClick={callGpt}>
        RUN
      </button>

      <button className={`footer-button primary-footer-button`} onClick={openModal}>
        Git diff
      </button>

      
      <Modal open={modalOpen} close={closeModal} header="Git Diff">
      <div className="playground">
        <div className={`editor mr-0 editorbox`}>
        <DiffEditor curCode={currentDiff} setcurCode={setCurrentDiff}></DiffEditor>
        </div>
        </div>
      </Modal>
      
      </div>
    </div>
    
  );
}

export default CodeSpace;
