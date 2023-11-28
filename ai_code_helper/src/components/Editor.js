import React from "react";

export default function Editor({ value, onChange, language }) {
  // `value`는 편집기의 현재 내용을 나타냅니다.
  // `onChange`는 내용이 변경될 때마다 호출되는 함수입니다.
  // `language`는 현재 편집 중인 언어의 종류를 나타냅니다. (예: "html", "css", "javascript")

  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      className={`editor ${language}`}
      placeholder={`Type your ${language} code here...`}
      aria-label={`Code editor for ${language}`}
    ></textarea>
  );
}
