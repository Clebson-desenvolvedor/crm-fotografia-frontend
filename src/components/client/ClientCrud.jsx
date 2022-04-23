import React, { Component } from "react";
import Main from "../template/Main";
import clients from "./clients";

const headerProps = {
  icon: "users",
  title: "Clientes",
  subtitle: "Cadastro de Clientes: Incluir, Listar, Alterar e Excluir!",
};

export default class ClientCrud extends Component {
  state = {
    stClients: [],
  };

  async componentDidMount() {
    const responseClients = await clients.get("");
    this.setState({ stClients: responseClients.data });
  }

  render() {
    const { stClients } = this.state;
    return (
      <Main {...headerProps}>
        Lista de Clientes
       
      </Main>
    );
  }
}
