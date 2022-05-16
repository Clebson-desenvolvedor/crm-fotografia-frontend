import React, { useEffect, useState } from "react";
import Main from "../template/Main";
import clientsApi from "./clientsApi";
import RenderMenu from "./RenderMenu";
import RenderTable from "./RenderTable";

const headerProps = {
  icon: "users",
  title: "Clientes",
  subtitle: "Cadastro de Clientes: Incluir, Listar, Alterar e Excluir!",
};

export default function ClientCrud() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    clientsApi.get("clients").then(({ data }) => {
      setClients(data);
    });
  }, []);

  return (
    <Main {...headerProps}>
      <h3>Lista de Clientes</h3>
      <RenderMenu />
      <RenderTable clients={clients} />
    </Main>
  );
}
