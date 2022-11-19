import React from "react";

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="header--left">MAJUTUSED.EE</div>
      <div className="header--right">
        <nav className="header--main-nav">
          <ul className="nav-ul">
            <li className="nav-li">Avaleht</li>
            <li className="nav-li">Kõik hotellid</li>
            <li className="nav-li">Kõik kodumajutused</li>
            <li className="nav-li">Meist</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
