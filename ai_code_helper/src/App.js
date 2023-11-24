import CodeSpace from "./components/CodeSpace";
import MenuContainer from "./components/MenuContainer";
import { useState } from "react";

function App() {

  const [curMenu, setCurMenu] = useState("code-inspection");
  // 입력 받은 코드 api 처리 => 결과를 MenuContainer 에 전달
  // MenuContainer에서 각 Div에 해당 정보 쏴주기
  // 각 Div에서 받은 정보들을 가공, display

  return (
    <div className="App">
      <CodeSpace></CodeSpace>
      <MenuContainer curMenu={curMenu} setCurMenu={setCurMenu}/>
    </div>
  );
}

export default App;
