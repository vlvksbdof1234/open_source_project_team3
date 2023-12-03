import React from "react";
import "../styles/PseudoCode.css"

export const PseudoCodeDiv = () => {
  return (
    <div>
      <h1>Pseudo Code</h1>
      <div className="generate-container">
        <input
          placeholder="Type Function or Logic"
          className="diagram-config-input"
        />
        <button>Generate</button>
      </div>
      <textarea> 수도 코드 들어가는 위치</textarea>
    </div>
  );
};

export default PseudoCodeDiv;
