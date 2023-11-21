import "../styles/MenuContainer.css"

import MenuDiv from "./MenuDiv"

function MenuContainer({curMenu, setCurMenu}) {
    return (<div className="MenuContainer">
        <MenuDiv curMenu={curMenu} operation="code-inspection" setCurMenu={setCurMenu}/>
        <MenuDiv curMenu={curMenu} operation="flow-chart" setCurMenu={setCurMenu}/>
        <MenuDiv curMenu={curMenu} operation="pseudo-code" setCurMenu={setCurMenu}/>
    </div>)
}

export default MenuContainer;
