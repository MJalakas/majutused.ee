import React from "react";

export default function Card(props) {
  console.log("../images/" + props.img);
  return (
    <div className="card-wrapper">
      <div className="card--image-wrapper">
        <img src={props.img}></img>
      </div>
      <div className="card--text-wrapper">
        <div className="card--specs">
          <div className="card--rating">{props.rating}</div>
          <div className="card--location">{props.city}</div>
          <div className="card--type">{props.type}</div>
        </div>
        <div className="card--description">{props.description}</div>
        <div className="card--price">
          Alates <strong>{props.price}€</strong>
        </div>
      </div>
      <div className="card--buttons">
        <div className="card--book-button">Broneeri kohe</div>
        <div className="card--more-info-button">Vaata lähemalt</div>
      </div>
    </div>
  );
}
