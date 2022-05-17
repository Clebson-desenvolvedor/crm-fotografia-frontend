import React, { useEffect, useState } from "react";
import Main from "../template/Main";
import { api } from "../../backend/api";
import RenderMenu from "../functions/RenderMenu";
import RenderTableClients from "./RenderTableClients";

const headerProps = {
  icon: "users",
  title: "Clientes",
  subtitle: "Cadastro de Clientes: Incluir, Listar, Alterar e Excluir!",
};

export default function ClientCrud() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("clients").then(({ data }) => {
      setClients(data);
    });
  }, []);

  return (
    <Main {...headerProps}>
      <h3>Lista de Clientes</h3>
      <RenderMenu />
      <RenderTableClients clients={clients} />
    </Main>
  );
}
