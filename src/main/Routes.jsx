import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from '../components/home/Home'
import ClientCrud from "../components/client/ClientCrud"

export default props => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/clients" element={<ClientCrud />} />
        <Route exact path="*" element={<Home />} />
    </Routes>
);