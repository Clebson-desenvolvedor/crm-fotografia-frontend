import React, { useEffect, useState } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "user",
  title: "Crie um novo cliente",
};

export default function NewClientCrud() {
  return (
    <Main {...headerProps}>
      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="name">Nome</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Digite o nome"
            ></input>
          </div>
          <div class="form-group col-md-3">
            <label for="email">E-mail</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="exemplo@email.com"
            ></input>
          </div>
          <div class="form-group col-md-2">
            <label for="date">Data de Nascimento</label>
            <input type="date" class="form-control" id="datenasc"></input>
          </div>
          <div class="form-group col-md-3">
            <label for="whatsapp">WhatsApp</label>
            <input
              type="text"
              class="form-control"
              id="whatsapp"
              placeholder="(  ) xxxxx-xxxx"
            ></input>
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-2">
            <label for="cep">CEP</label>
            <input
              type="text"
              class="form-control"
              id="rua"
              placeholder="Rua, Avenida, etc..."
            ></input>
          </div>

          <div class="form-group col-md-4">
            <label for="rua">Lograduoro</label>
            <input
              class="form-control"
              type="text"
              id="num"
              placeholder="123..."
            />
          </div>
          <div class="form-group col-md-1">
            <label for="numero">Número</label>
            <input type="text" class="form-control" id="bairro"></input>
          </div>
          <div class="form-group col-md-3">
            <label for="bairro">Bairro</label>
            <input type="text" class="form-control" id="bairro"></input>
          </div>
          <div class="form-group col-md-2">
            <label for="cidade">Cidade</label>
            <input type="text" class="form-control" id="bairro"></input>
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-2">
            <label for="bairro">Data de Cadastro do Cliente</label>
            <input type="date" class="form-control" id="datecad"></input>
          </div>
        </div>
        <button type="button" class="btn btn-success">
          Salvar
        </button>
        <button type="button" class="btn btn-danger ml-4">
          Cancelar
        </button>
      </form>
    </Main>
  );
}
