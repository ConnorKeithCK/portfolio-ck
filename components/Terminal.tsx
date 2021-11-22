import React, { useState } from "react";
import TerminalStyles from "../styles/Terminal.module.css"


function Terminal() {

return (
    <div className={TerminalStyles["wrapper"]}>
        <span className={TerminalStyles["header"]}>Connor Keith Portfolio</span>
        {/* <table className={TerminalStyles["terminal-body"]}>
            <thead>Introduction and tutorial section!</thead>
            <tbody style={{border: 'none'}}>
            <tr className={TerminalStyles["command-body"]}>
                <td className={TerminalStyles["command-prompt"]}>$connorkeith-portfolio %</td>
                <td>
                    <input value={command} onChange={(e) => setCommand(e.target.value)} type="text" className={TerminalStyles['command-input']} />
                </td>
            </tr>
            </tbody>
        </table> */}
    </div>
)

}

export default Terminal