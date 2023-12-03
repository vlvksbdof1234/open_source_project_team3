import "../styles/MenuDiv.css";

function MenuDiv({ curMenu, operation, setCurMenu, children }) {
  // active 클래스 추가 로직
  const isActive = curMenu === operation;

  const labelName = {"code-inspection": "Code Inspection", "flow-chart":"Flow Chart", "pseudo-code": "Pseudo Code"};
  const curLabel = labelName[operation];
  
  return (
    <div className={`MenuDiv ${isActive ? "active" : ""}`}>
      <label onClick={() => setCurMenu(operation)}>{curLabel}</label>
      {isActive ? (
        <div className="content-container">
            <div className="content">{children}</div>
        </div>
      ) : null}

      <div></div>
    </div>
  );
}

export default MenuDiv;
