import React, { useState } from "react";
import RowStyles from '../styles/TerminalRow.module.css'


function TerminalRow() {

    const [command, setCommand] = useState("")

    return (
        <table className={RowStyles["terminal-body"]}>
        <thead>Introduction and tutorial section!</thead>
        <tbody style={{border: 'none'}}>
        <tr className={RowStyles["command-body"]}>
            <td className={RowStyles["command-prompt"]}>$connorkeith-portfolio %</td>
            <td>
                <input value={command} onChange={(e) => setCommand(e.target.value)} type="text" className={RowStyles['command-input']} />
            </td>
        </tr>
        </tbody>
    </table>
    )
}

export default TerminalRow