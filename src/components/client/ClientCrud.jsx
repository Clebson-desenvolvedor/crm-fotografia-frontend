import React, { useEffect, useState } from "react";
import Main from "../template/Main";
import clientsApi from "./clientsApi";

const headerProps = {
  icon: "users",
  title: "Clientes",
  subtitle: "Cadastro de Clientes: Incluir, Listar, Alterar e Excluir!",
};

export default function ClientCrud() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    clientsApi.get("clients").then(({data}) => {
      setClients(data);
    })
  });

  function renderTable() {
    <div>
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
          {clients?.map((e) => (
            <tr>
              <td>{e.idcliente}</td>
              <td>
                <a
                  href=""
                  className={`text-decoration-none text-dark`}
                  title={`Busca todos os dados deste cliente`}
                >
                  {e.nomecliente}
                </a>
              </td>
              <td>{e.email}</td>
              <td>{e.whatsapp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>;
  }

  function renderMenu() {
    return (
      <div className="render-menu">
        <div className="search-box">
          <input
            type={"text"}
            className={"search-txt"}
            placeholder={"Buscar"}
          />
          <a href="#" className={"search-btn"}>
            <i className={`fa fa-search`}></i>
          </a>
        </div>
        <a href="/" className={`text-decoration-none text-dark`}>
          Listar todos
        </a>
        <a href="" className={`text-decoration-none text-dark`}>
          <i className={`fa fa-solid fa-plus`} title={`Criar novo`}></i>
        </a>
      </div>
    );
  }

  return (
    <Main {...headerProps}>
      <h3>Lista de Clientes</h3>
      {renderMenu}
      {renderTable}
    </Main>
  );
}
