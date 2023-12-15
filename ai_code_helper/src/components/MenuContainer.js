import "../styles/MenuContainer.css";
import MenuDiv from "./MenuDiv.js";
import CodeInspectDiv from "./CodeInspectDiv.js";
import PseudoCodeDiv from "./PseudoCodeDiv.js";
import FlowChartDiv from "./FlowChartDiv.js";
import { Diffresult } from "./Diffresult";

function MenuContainer({
  currentCode,
  curMenu,
  setCurMenu,
  codeInspect,
  isCodeInspectLoading,
  setCodeInspectIsLoading,
  currentDiff,
  curPullResult,
}) {
  return (
    <div className="MenuContainer">
      <MenuDiv
        curMenu={curMenu}
        operation="code-inspection"
        setCurMenu={setCurMenu}
      >
        <CodeInspectDiv
          codeInspect={codeInspect}
          isCodeInspectLoading={isCodeInspectLoading}
          setCodeInspectIsLoading={setCodeInspectIsLoading}
          currentDiff={currentDiff}
        />
      </MenuDiv>
      <MenuDiv curMenu={curMenu} operation="flow-chart" setCurMenu={setCurMenu}>
        <FlowChartDiv currentCode={currentCode} />
      </MenuDiv>
      <MenuDiv
        curMenu={curMenu}
        operation="pseudo-code"
        setCurMenu={setCurMenu}
      >
        <PseudoCodeDiv currentCode={currentCode} />
      </MenuDiv>
      <MenuDiv
        curMenu={curMenu}
        operation="pull-request"
        setCurMenu={setCurMenu}
      >
        <Diffresult curPullResult={curPullResult}></Diffresult>
      </MenuDiv>
    </div>
  );
}

export default MenuContainer;
