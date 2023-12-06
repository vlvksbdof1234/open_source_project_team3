import React, { useEffect } from 'react'
import ReadOnlyEditor from "./ReadOnlyEditor";

export const CodeInspectDiv = ({codeInspect}) => {
  // 여기에서 작업 
  // useEffect(() => {
  //   const codeInspectDiv = document.querySelector('#codeInspect');

  //   const messageElement = document.createElement('div');
  //   // 생성된 요소에 클래스 추가
  //   messageElement.className = 'message';
  //    // 채팅 메시지 목록에 새로운 메시지 추가
  //   messageElement.innerHTML = `${codeInspect}`;
  //   codeInspectDiv.prepend(messageElement);

  // }, [codeInspect]);

  return (
    <div id="codeInspect">{codeInspect}</div>
  )
}

export default CodeInspectDiv;