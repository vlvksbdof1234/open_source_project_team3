import CodeSpace from "./components/CodeSpace";
import MenuContainer from "./components/MenuContainer";
import Navbar from './components/Navbar';
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [curMenu, setCurMenu] = useState("code-inspection");
  const [currentCode, setCurrentCode] = useState(`function recommendClass() {\n  return "Open Source Software";\n}`);
  const [currentDiff, setCurrentDiff] = useState(`git bash에서 아래 명령어롤 명령어를 입력해서 결과를 받아오세요!\n\ngit --no-pager diff`);
  const [codeInspect, setCodeInspect] = useState(`분석 결과`);
  return (
    <div className="App">
      <Navbar/>
      <div className="body">
        <CodeSpace className="topComponent"
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
        currentDiff={currentDiff}
        setCurrentDiff={setCurrentDiff}
        setCodeInspect={setCodeInspect}
        ></CodeSpace>
        <MenuContainer
          className="topComponent"
          curMenu={curMenu}
          setCurMenu={setCurMenu}
          codeInspect={codeInspect}
          setCodeInspect={setCodeInspect}
        />
      </div>
    </div>
  );
}

export default App;
