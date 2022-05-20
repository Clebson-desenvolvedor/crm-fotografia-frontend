import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import ClientCrud from "../components/client/ClientCrud";
import ServiceCrud from "../components/service/ServiceCrud";
import NewClientCrud from "../components/client/NewClientCrud";

export default function Router(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/clients" element={<ClientCrud />} />
      <Route exact path="/services" element={<ServiceCrud />} />
      <Route exact path="*" element={<Home />} />
      <Route exact path="/clients/add" element={<NewClientCrud />} />
    </Routes>
  );
}