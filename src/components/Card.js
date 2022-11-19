import React from "react";
import cardImg from "../images/cardimg.jpg";

export default function Card(props) {
  return (
    <div className="card-wrapper">
      <div className="card--image-wrapper">
        <img src={cardImg}></img>
      </div>
      <div className="card--text-wrapper">
        <div className="card--specs">
          <div className="card--rating">5.0</div>
          <div className="card--location">Tallinn</div>
          <div className="card--type">Hotell</div>
        </div>
        <div className="card--description">
          Terve stuudiokorter • 1 vannituba • 1 köök • 26m² 1 lai
          kaheinimesevoodi
        </div>
        <div className="card--price">
          Alates <strong>99€</strong>
        </div>
      </div>
      <div className="card--buttons">
        <div className="card--book-button">Broneeri kohe</div>
        <div className="card--more-info-button">Vaata lähemalt</div>
      </div>
    </div>
  );
}
