import React, { useState } from 'react'
import "../css/Alert.css";

export default function Alert(props : AProps) {
    const [isShowingAlert, setShowingAlert] = useState(props.message);
    return (
        <div className={`alert ${isShowingAlert ? 'alert-show' : 'alert-hidden'}`} onTransitionEnd={() => setShowingAlert('')}>
            {props.children}
        </div>
    )
}

interface AProps {
    children?: any
    message: string
}
