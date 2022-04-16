import "./Nav.css";
import React from "react";

export default function Nav(props) {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <a href="/">
          <i className="fa fa-home"></i> Início
        </a>
        <a href="clients">
          <i className="fa fa-users"></i> Clientes
        </a>
        <a href="services">
          <i className="fa fa-camera"></i> Serviços
        </a>
      </nav>
    </aside>
  );
}