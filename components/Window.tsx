import React from 'react';
import WindowStyles from '../styles/Window.module.css'

interface IWindowProps {
    windowContent: React.ReactNode;
}

const Window: React.FC<IWindowProps> = ({ windowContent }) => {
    return (
        <div className={WindowStyles["wrapper"]}>
            <div className={WindowStyles["bar"]}></div>
            <div className={WindowStyles["content"]}>{windowContent}</div>
        </div>
    )
}

export default Window