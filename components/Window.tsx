import React from 'react';
import WindowStyles from '../styles/Window.module.css'

interface IWindowProps {
    windowContent: React.ReactNode;
}

function Window() {

    return (
        <div className={WindowStyles["wrapper"]}>
            <div className={WindowStyles["bar"]}></div>
            <div className={WindowStyles["content"]}></div>
        </div>
    )
}

export default Window