import React from "react";
import Card from "./Card";
import data from "../cardData.js";

export default function MainContent() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return <div className="main-content">{cards}</div>;
}
