import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Clientes",
  subtitle: "Cadastro de Clientes: Incluir, Listar, Alterar e Excluir!",
};


export default class ClientCrud extends Component {
  render() {
    return <Main {...headerProps}>Lista de Clientes </Main>;
  }
}
