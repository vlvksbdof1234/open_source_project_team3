import CodeSpace from "./components/CodeSpace.js";
import MenuContainer from "./components/MenuContainer.js";
import Navbar from "./components/Navbar.js";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [curMenu, setCurMenu] = useState("code-inspection");

  const [currentDiff, setCurrentDiff] = useState(`diff --git a/ai_code_helper/src/App.js b/ai_code_helper/src/App.js
  index 857f37e..eb73829 100644
  --- a/ai_code_helper/src/App.js
  +++ b/ai_code_helper/src/App.js
  @@ -7,77 +7,91 @@ import "./styles/App.css";
   function App() {
     const [curMenu, setCurMenu] = useState("code-inspection");
   
  -  const [currentDiff, setCurrentDiff] = useState(git bash에서 아래 명령어롤 명령어를 입력해서 결과를 받아오세요!\n\ngit --no-pager diff);
  +  const [currentDiff, setCurrentDiff] = useState(diff --git a/ai_code_helper/src/App.js b/ai_code_helper/src/App.js
  +  index 857f37e..1b4071d 100644
  +  --- a/ai_code_helper/src/App.js
  +  +++ b/ai_code_helper/src/App.js
  +  
  +  +  // 시간 빼기 함수
  +  +  function subtractTime(baseTime, hoursToSubtract, minutesToSubtract, secondsToSubtract) {
  +  +    const resultTime = new Date(baseTime.getTime());
  +  +    resultTime.setHours(resultTime.getHours() - hoursToSubtract);
  +  +    resultTime.setMinutes(resultTime.getMinutes() - minutesToSubtract);
  +  +    resultTime.setSeconds(resultTime.getSeconds() - secondsToSubtract);
  +  +    return resultTime;
  +  // 시간 빼기 함수
  +  function subtractTime(baseTime, hoursToSubtract, minutesToSubtract, secondsToSubtract) {
  +    const resultTime = new Date(baseTime.getTime());
  +    resultTime.setHours(resultTime.getHours() - hoursToSubtract);
  +    resultTime.setMinutes(resultTime.getMinutes() - minutesToSubtract);
  +    resultTime.setSeconds(resultTime.getSeconds() - secondsToSubtract);
  +    return resultTime;
   `);
  const [codeInspect, setCodeInspect] = useState(``);
  const [isCodeInspectLoading, setCodeInspectIsLoading] = useState(false);
  const [currentCode, setCurrentCode] = useState(`// 시간 더하기 함수
  function addTime(baseTime, hoursToAdd, minutesToAdd, secondsToAdd) {
    const resultTime = new Date(baseTime.getTime());
    resultTime.setHours(resultTime.getHours() + hoursToAdd);
    resultTime.setMinutes(resultTime.getMinutes() + minutesToAdd);
    resultTime.setSeconds(resultTime.getSeconds() + secondsToAdd);
    return resultTime;
  }
  
  // 시간 빼기 함수
  function subtractTime(baseTime, hoursToSubtract, minutesToSubtract, secondsToSubtract) {
    const resultTime = new Date(baseTime.getTime());
    resultTime.setHours(resultTime.getHours() - hoursToSubtract);
    resultTime.setMinutes(resultTime.getMinutes() - minutesToSubtract);
    resultTime.setSeconds(resultTime.getSeconds() - secondsToSubtract);
    return resultTime;
  }
  
  // 예시: 현재 시간
  const currentTime = new Date();
  
  // 예시: 2시간, 30분, 45초 뒤의 시간
  const futureTime = addTime(currentTime, 2, 30, 45);
  console.log("현재 시간:", currentTime.toLocaleTimeString());
  console.log("2시간 30분 45초 후의 시간:", futureTime.toLocaleTimeString());
  
  // 예시: 1시간, 15분, 20초 전의 시간
  const pastTime = subtractTime(currentTime, 1, 15, 20);
  console.log("1시간 15분 20초 전의 시간:", pastTime.toLocaleTimeString());
  
  `);


  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <CodeSpace className="topComponent"
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
        currentDiff={currentDiff}
        setCurrentDiff={setCurrentDiff}
        setCodeInspect={setCodeInspect}
        setCodeInspectIsLoading={setCodeInspectIsLoading}
        ></CodeSpace>
        <MenuContainer
          className="topComponent"
          curMenu={curMenu}
          currentCode={currentCode}
          setCurMenu={setCurMenu}
          codeInspect={codeInspect}
          currentDiff={currentDiff}
          setCodeInspect={setCodeInspect}
          isCodeInspectLoading={isCodeInspectLoading}
          setCodeInspectIsLoading={setCodeInspectIsLoading}
        />
      </div>
    </div>
  );
}

export default App;
