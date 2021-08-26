import React from 'react'
import { Order } from '../../../shared/interfaces/Interfaces'
import "../css/OrderCard.css";


export default function OrderCard({ details } : OProps) {

    // const {  } = useDelivery()

    return (
        <div className={"ordercard"}>
            <div className="upper">
                <div className="upper-left">
                    <b>18</b>
                    <b>30</b>
                </div>
                <div className="upper-middle">
                    <p>{details.address + details.houseNumber[0]}</p>
                    <p>{details.postalCode}</p>
                    <p>Amsterdam</p>
                </div>
                <div className="upper-right">
                    <button>x</button>
                    <button>y</button>
                </div>
            </div>
            <hr style={ { width: "90%", margin: "auto" } }/>
            <div className="lower">
                <p>Sissy Wu</p>
                <p>4KM</p>
                <p>{details.items.length} $4,95</p>       
            </div>
        </div>
    )
}

interface OProps {
    details: Order
}
