import CodeSpace from "./components/CodeSpace";
import MenuContainer from "./components/MenuContainer";
import Navbar from './components/Navbar';
import { useState } from "react";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [curMenu, setCurMenu] = useState("code-inspection");

  return (
    <div className="App">
      <Navbar/>
      <div className="body">
        <CodeSpace className="topComponent"></CodeSpace>
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
