import CodeSpace from "./components/CodeSpace.js";
import MenuContainer from "./components/MenuContainer.js";
import Navbar from './components/Navbar.js';
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [curMenu, setCurMenu] = useState("code-inspection");
  const [currentCode, setCurrentCode] = useState(`function recommendClass() {\n  return "Open Source Software";\n}`);
  const [currentDiff, setCurrentDiff] = useState(`git bash에서 git diff 명령어를 입력해서 결과를 받아오세요!`);
  return (
    <div className="App">
      <Navbar/>
      <div className="body">
        <CodeSpace className="topComponent"
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
        currentDiff={currentDiff}
        setCurrentDiff={setCurrentDiff}
        ></CodeSpace>
        <MenuContainer
          className="topComponent"
          curMenu={curMenu}
          setCurMenu={setCurMenu}
        />
      </div>
    </div>
  );
}

export default App;
