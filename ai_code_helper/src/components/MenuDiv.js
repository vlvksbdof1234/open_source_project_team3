import "../styles/MenuDiv.css";

function MenuDiv({ curMenu, operation, setCurMenu }) {
  let labelValue = "";

  switch (operation) {
    case "code-inspection":
      labelValue = "Code Inspection";
      break;
    case "flow-chart":
      labelValue = "Flow Chart";
      break;
    case "pseudo-code":
      labelValue = "Pseudo Code";
      break;
    default:
      break;
  }

  // active 클래스 추가 로직
  const isActive = curMenu === operation;

  return (
    <div
      className={`MenuDiv ${isActive ? "active" : ""}`}
      onClick={() => setCurMenu(operation)}
    >
      <label>{labelValue}</label>
      {isActive ? (
        <div className="content-container">
          <div className="content">
            {isActive ? (
              <div class="content">
                신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은
                법률이 정하는 바에 의하여 국가의 보호를 받는다. 탄핵결정은
                공직으로부터 파면함에 그친다. 그러나, 이에 의하여 민사상이나
                형사상의 책임이 면제되지는 아니한다. 모든 국민은 자기의 행위가
                아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다. 모든
                국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 대한민국은
                통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을
                수립하고 이를 추진한다. 헌법개정안이 제2항의 찬성을 얻은 때에는
                헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다.
                국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로
                정한다. 대통령은 국회에 출석하여 발언하거나 서한으로 의견을
                표시할 수 있다. 법률이 정하는 주요방위산업체에 종사하는 근로자의
                단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지
                아니할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 납세의
                의무를 진다. 대통령·국무총리·국무위원·행정각부의 장·헌법재판소
                재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타
                법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한
                때에는 국회는 탄핵의 소추를 의결할 수 있다. 모든 국민은 종교의
                자유를 가진다. 헌법재판소 재판관은 정당에 가입하거나 정치에
                관여할 수 없다. 제3항의 승인을 얻지 못한 때에는 그 처분 또는
                명령은 그때부터 효력을 상실한다. 이 경우 그 명령에 의하여 개정
                또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히
                효력을 회복한다. 대통령은 전시·사변 또는 이에 준하는
                국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나 공공의
                안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여
                계엄을 선포할 수 있다. 대한민국은 통일을 지향하며, 자유민주적
                기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다.
                국가원로자문회의의 의장은 직전대통령이 된다. 다만, 직전대통령이
                없을 때에는 대통령이 지명한다.
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MenuDiv;
