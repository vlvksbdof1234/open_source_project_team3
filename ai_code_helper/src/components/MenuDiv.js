import "../styles/MenuDiv.css";

function MenuDiv({ curMenu, operation, setCurMenu, children }) {
  // active 클래스 추가 로직
  const isActive = curMenu === operation;
  return (
    <div className={`MenuDiv ${isActive ? "active" : ""}`}>
      <label onClick={() => setCurMenu(operation)}>{operation}</label>
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
