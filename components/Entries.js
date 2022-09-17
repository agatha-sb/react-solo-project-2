import React from "react";

export default function Entries(props)    {
    return (
        <div className="entry flex">
            <img className="entry--image"src={`${props.imageUrl}`} alt="An image of Mount Fuji" />
            <div className="entry--content">
                <div className="entry--location flex">
                    <img className="marker" src="./images/location-marker.png" alt="Location marker" />
                    <span className="name">{props.location}</span>
                    <a className="link" href={`${props.googleMapsUrl}`}>view on google maps</a>
                </div>
                <div className="entry--title">
                    <h3 className="heading">{props.title}</h3>
                </div>
                <div className="entry--date flex">
                    <span className="start">{props.startDate} - </span>
                    <span className="end">{props.endDate}</span>
                </div>
                <div className="entry--desc">
                    <p className="text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}