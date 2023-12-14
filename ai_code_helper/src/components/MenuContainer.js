import "../styles/MenuContainer.css";
import MenuDiv from "./MenuDiv";
import CodeInspectDiv from './CodeInspectDiv';
import PseudoCodeDiv  from './PseudoCodeDiv';
import FlowChartDiv from './FlowChartDiv'

function MenuContainer({ curMenu, setCurMenu,codeInspect,isCodeInspectLoading,setCodeInspectIsLoading }) {

  return (
    <div className="MenuContainer">
      <MenuDiv
        curMenu={curMenu}
        operation="code-inspection"
        setCurMenu={setCurMenu}
      ><CodeInspectDiv
       codeInspect={codeInspect}
       isCodeInspectLoading={isCodeInspectLoading}
       setCodeInspectIsLoading={setCodeInspectIsLoading}
        /></MenuDiv>
      <MenuDiv
        curMenu={curMenu}
        operation="flow-chart"
        setCurMenu={setCurMenu}
      ><FlowChartDiv/></MenuDiv>
      <MenuDiv
        curMenu={curMenu}
        operation="pseudo-code"
        setCurMenu={setCurMenu}
      ><PseudoCodeDiv/></MenuDiv>
    </div>
  );
}

export default MenuContainer;
