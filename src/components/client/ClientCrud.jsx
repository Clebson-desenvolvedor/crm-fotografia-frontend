import React, { Component } from "react";
import Main from "../template/Main";
import clients from "./clients";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  renderTable() {
    const { stClients } = this.state;
    return (
      <div>
        {console.log(stClients)}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOME</th>
              <th scope="col">E-MAIL</th>
              <th scope="col">WHATSAPP</th>
            </tr>
          </thead>
          <tbody>
            {stClients.map((e) => (
              <tr>
                <td>{e.idcliente}</td>
                <td>
                  <a href="#" className="text-decoration-none text-dark">
                    {e.nomecliente}
                  </a>
                </td>
                <td>{e.email}</td>
                <td>{e.whatsapp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  renderMenu() {
    return (
      <div className="render-menu">
        <input type="search" name="" id="btn-search" placeholder="buscar" />
        <button className="btn btn-success">Criar</button>
      </div>
    );
  }

  render() {
    return (
      <Main {...headerProps}>
        <h3>Lista de Clientes</h3>
        {this.renderMenu()}
        {this.renderTable()}
      </Main>
    );
  }
}
