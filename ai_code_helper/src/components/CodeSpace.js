import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import DiffEditor from "./diffEditor";
import "./../styles/CodeSpace.css";
import Modal from "../components/Modal"


function CodeSpace({ currentCode, setCurrentCode, currentDiff, setCurrentDiff}) {

  const [value, updateValue] = useState("");
  const [jsvalue, updatejsValue] = useState("");
  const [cssvalue, updatecssValue] = useState("");
  const [preview, updatePreview] = useState("");
  // const [dark, updateDark] = useState(false);
  // const [selected, updateSelected] = useState("HTML");
  const [modalOpen, setModalOpen] = useState(false);

  // function download(filename, text) {
  //   var element = document.createElement("a");
  //   element.setAttribute(
  //     "href",
  //     "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  //   );
  //   element.setAttribute("download", filename);
  //   element.style.display = "none";
  //   document.body.appendChild(element);
  //   element.click();
  //   document.body.removeChild(element);
  // }
  
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
          <Editor currentCode={currentCode} setCurrentCode={setCurrentCode}></Editor>
        </div>
      </div>
      <div className="footer">
        <div
          className={`run`}
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

        <button onClick={openModal}>모달팝업</button>
      
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
      <div className="playground">
        <div className={`editor mr-0 editorbox`}>
        <DiffEditor currentCode={currentDiff} setCurrentCode={setCurrentDiff}></DiffEditor>
        </div>
        </div>
      </Modal>
      
      </div>
    </div>
    
  );
}

export default CodeSpace;
