import React, { useEffect, useState } from "react";
import RenderMenu from "../functions/RenderMenu";
import Main from "../template/Main";
import { api } from "../../backend/api";
import RenderTableServices from "./RenderTableServices";

const headerProps = {
  icon: "camera",
  title: "Serviços",
  subtitle: "Gerenciamento dos serviços!",
};

export default function ServiceCrud() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get("services").then(({ data }) => {
      setServices(data);
      console.log(data);
    });
  }, []);

  return (
    <Main {...headerProps}>
      <h3>Gerenciamento de Serviços</h3>
      <RenderMenu />
      <RenderTableServices services = {services} />
    </Main>
  );
}
