import React from "react";

export default function Property(props) {
    // Logic for displaying the badge text either sold out or online/available
    let badgeText
    if(props.item.openSpots === 0) {
        badgeText = <div className="white">SOLD OUT</div>
    } 
     else {
        badgeText  = <div className="green">AVAILABLE</div>
    }
    


    return (
        <div className="property-card">
            <div className="card-badge">{badgeText}</div>
            <img src={props.item.img}/>
            <h3>{props.item.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.item.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.item.email}</p>
            </div>
            <div className="cost">
                <p>{props.item.cost}</p>
            </div>
    </div>
    )
}