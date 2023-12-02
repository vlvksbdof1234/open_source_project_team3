import React from "react";
import { render } from "react-dom";

import SimpleEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
// import 'prismjs/themes/prism-dark.css';
import './../styles/prism-gruvbox-dark.css'
// import 'prismjs/themes/prism-darcula.css';
// import 'prismjs/themes/prism-gruvbox-dark.css';
 //Example style, you can use another
// import 'prismjs/themes/prism-darcula.css'; //Example style, you can use another




export default function Editor(data) {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <SimpleEditor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
}
