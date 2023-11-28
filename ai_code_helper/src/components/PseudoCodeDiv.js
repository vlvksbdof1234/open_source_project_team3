import React from 'react';

export const PseudoCodeDiv = ({ pseudoCode }) => {
  return (
    <div className="pseudo-code-div">
      <pre>{pseudoCode}</pre>
    </div>
  );
};

export default PseudoCodeDiv;
