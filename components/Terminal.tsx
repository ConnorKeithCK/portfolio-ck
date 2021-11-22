import React, { useState } from "react";
import TerminalStyles from "../styles/Terminal.module.css"
import TerminalRow from "./TerminalRow";


function Terminal() {

return (
    <div className={TerminalStyles["wrapper"]}>
        <span className={TerminalStyles["header"]}>Connor Keith Portfolio</span>
        <TerminalRow />
    </div>
)

}

export default Terminal