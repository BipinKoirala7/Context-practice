import React from "react";

export default function Card(props){
    return (
        <div className="card" id={props.id}>
            <img src={props.item.imageUrl} alt="" className="place-img" />
            <div className="place-info">
                <div className="place-country">
                    <span className="material-symbols-outlined" id="location-icon">
                        location_on
                    </span>
                    <p className="country-name">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className="google-maps-link" target="_blank">View on Google Maps</a>
                </div>
                <p className="place-title">{props.item.title}</p>
                <p className="travel-time">{props.item.startDate} - {props.item.endDate}</p>
                <p className="travel-descrpt">{props.item.description}</p>
            </div>
        </div>
    )
}