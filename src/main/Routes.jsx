import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import ClientsCrud from "../components/client/ClientsCrud";
import ServicesCrud from "../components/service/ServiceCrud";
import NewClientCrud from "../components/client/NewClientCrud";
import ClientCrud from "../components/client/ClientCrud";

export default function Router(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/clients" element={<ClientsCrud />} />
      <Route exact path="/services" element={<ServicesCrud />} />
      <Route exact path="*" element={<Home />} />
      <Route exact path="/clients/add" element={<NewClientCrud />} />
      <Route exact path="/client/:id" element={<ClientCrud />} />
    </Routes>
  );
}