import CodeSpace from "./components/CodeSpace";
import MenuContainer from "./components/MenuContainer";
import { useState } from "react";

function App() {

  const [curMenu, setCurMenu] = useState("code-inspection");

  return (
    <div className="App">
      <CodeSpace></CodeSpace>
      <MenuContainer curMenu={curMenu} setCurMenu={setCurMenu}/>
    </div>
  );
}

export default App;
