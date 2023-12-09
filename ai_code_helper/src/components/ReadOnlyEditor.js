import React from "react";
import { render } from "react-dom";

import SimpleEditor from 'react-simple-code-editor';
import '../styles/Editor.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './../styles/prism-gruvbox-dark.css'



export default function ReadOnlyEditor ({currentCode}) {
  return (
    <SimpleEditor
      className={"readOnlyEditor"}
      value={currentCode}
      highlight={currentCode => highlight(currentCode, languages.js)}
      padding={10}
    />
  );


}
