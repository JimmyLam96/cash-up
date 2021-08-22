import React from 'react'
import "../css/Alert.css";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useForm } from '../utils/useForm';

export default function Alert() {
    const { errors } = useForm();
    return (
        Object.keys(errors).length > 0 ?
        <div className={`alert alert-show`}>
            <div className={"header"}>
                <AiOutlineExclamationCircle/>
                <b>Incorrect format</b>
            </div>
            {Object.entries(errors).map(x => {
                if(x[1]) {
                    return <div>{x[1]}</div>
                }
            })}
        </div> : null
        
    )
}
