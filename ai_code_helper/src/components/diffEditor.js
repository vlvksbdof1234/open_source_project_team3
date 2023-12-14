import React from "react";
import { render } from "react-dom";

import SimpleEditor from 'react-simple-code-editor';
import '../styles/Editor.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-diff';
import './../styles/prism-gruvbox-dark.css'



export default function Editor ({currentCode, setCurrentCode}) {
  return (
    <SimpleEditor
      className={"editorbox"}
      value={currentCode}
      onValueChange={currentCode => setCurrentCode(currentCode)}
      
      highlight={currentCode => highlight(currentCode, languages.diff)}
      padding={10}
    />
  );


}
