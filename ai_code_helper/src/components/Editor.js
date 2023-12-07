import React from "react";
import { render } from "react-dom";

import SimpleEditor from 'react-simple-code-editor';
import '../styles/Editor.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './../styles/prism-gruvbox-dark.css'



export default function Editor ({curCode, setcurCode}) {
  return (
    <SimpleEditor
      className={"editorbox"}
      value={curCode}
      onValueChange={curCode => setcurCode(curCode)}
      
      highlight={curCode => highlight(curCode, languages.js)}
      padding={10}
    />
  );


}
