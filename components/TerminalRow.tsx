import React, { useState } from "react";
import RowStyles from '../styles/TerminalRow.module.css'


function TerminalRow() {

    const [command, setCommand] = useState("")

    return (
    <div className={RowStyles["terminal-body"]}>
        <span>Introduction and tutorial section!</span>
        <div className={RowStyles["command-body"]}>
            <span className={RowStyles["command-prompt"]}>connorkeith-portfolio % - </span>
            <input value={command} onChange={(e) => setCommand(e.target.value)} type="text" className={RowStyles['command-input']} />
        </div>
    </div>
    )
}

export default TerminalRow