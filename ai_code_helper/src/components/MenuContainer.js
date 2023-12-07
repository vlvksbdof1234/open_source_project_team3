import "../styles/MenuContainer.css";
import MenuDiv from "./MenuDiv.js";
import CodeInspectDiv from './CodeInspectDiv.js';
import PseudoCodeDiv  from './PseudoCodeDiv.js';
import FlowChartDiv from './FlowChartDiv.js'

function MenuContainer({ curMenu, setCurMenu, curCode }) {

  return (
    <div className="MenuContainer">
      <MenuDiv
        curMenu={curMenu}
        operation="code-inspection"
        setCurMenu={setCurMenu}
      ><CodeInspectDiv/></MenuDiv>
      <MenuDiv
        curMenu={curMenu}
        operation="flow-chart"
        setCurMenu={setCurMenu}
      ><FlowChartDiv curCode={curCode}/></MenuDiv>
      <MenuDiv
        curMenu={curMenu}
        operation="pseudo-code"
        setCurMenu={setCurMenu}
      ><PseudoCodeDiv/></MenuDiv>
    </div>
  );
}

export default MenuContainer;
