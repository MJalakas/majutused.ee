import React from "react";

export default function Card(props) {
  return (
    <div className="card-wrapper">
      <div className="card--image-wrapper">
        <img src={props.img}></img>
      </div>
      <div className="card--text-wrapper">
        <div className="card--title">{props.name}</div>
        <div className="card--specs">
          <div className="card--rating-wrapper">
            <div className="card--rating-title">Hinnang</div>
            <div className="card--rating">⭐ {props.rating}</div>
          </div>
          <div className="card--location-wrapper">
            <div className="card--location-title">Asukoht</div>
            <div className="card--location">{props.city}</div>
          </div>
          <div className="card--type-wrapper">
            <div className="card--type-title">Majutuse tüüp</div>
            <div className="card--type">{props.type}</div>
          </div>
        </div>
        <div className="card--description">{props.description}</div>
        <div className="card--price">
          Alates <strong>{props.price}€</strong> / öö
        </div>
      </div>
      <div className="card--buttons">
        <div className="card--book-button">Broneeri kohe</div>
        <div className="card--more-info-button">Vaata lähemalt</div>
      </div>
    </div>
  );
}
