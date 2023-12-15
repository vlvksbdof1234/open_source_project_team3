import React, { useState } from "react";

export const Diffresult = ({ curPullResult }) => {

  return (
    <div>
      <h1>Pull request</h1>
      <textarea className="pull-request" value={curPullResult}></textarea>
    </div>
  );
};

export default Diffresult;
