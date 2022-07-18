import React from "react";
import Main from "../template/Main";
import { api } from "../../backend/api";


const headerProps = {
  icon: "user",
  title: "Crie um novo cliente",
};



export default function NewClientCrud() {

  const initialValue = {
    nomecliente: '',
    dtnasccliente: '',
    dtcadcliente: '',
    email: '',
    whatsapp: '',
    enderecocliente: '',
    numeroendcliente: '',
    bairrocliente: '',
    cepcliente: '',
    cidadecliente: '',
  }

  function onChange(ev) {
    initialValue[ev.target.id] = ev.target.value;
  }

  function onSubmit(ev) {
    ev.preventDefault();
    api.post('/clients', initialValue)
      .then(response => {
        alert(response.data['mensagem']);
        window.location.reload();
      }).catch((error) => {
        alert(error.response.data['error']);
      })
  }

  return (
    <Main {...headerProps}>
      <form onSubmit={onSubmit}>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="name">Nome</label>
            <input
              type="text"
              class="form-control"
              id="nomecliente"
              placeholder="Digite o nome"
              onChange={onChange}
            ></input>
          </div>
          <div class="form-group col-md-3">
            <label for="email">E-mail</label>
            <input 
              type="email"
              class="form-control"
              id="email"
              placeholder="exemplo@email.com"
              onChange={onChange}
            ></input>
          </div>
          <div class="form-group col-md-2">
            <label for="date">Data de Nascimento</label>
            <input type="date" class="form-control" id="dtnasccliente" onChange={onChange}></input>
          </div>
          <div class="form-group col-md-3">
            <label for="whatsapp">WhatsApp</label>
            <input
              type="text"
              class="form-control"
              id="whatsapp"
              placeholder="(  ) xxxxx-xxxx"
              onChange={onChange}
            ></input>
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-2">
            <label for="cep">CEP</label>
            <input type="text"
              class="form-control"
              id="cep"
              placeholder="00000-000"
              onChange={onChange}
            ></input>
          </div>

          <div class="form-group col-md-4">
            <label for="rua">Logradouro</label>
            <input 
              class="form-control"
              type="text"
              id="enderecocliente"
              placeholder="rua, avenida, etc"
              onChange={onChange}
            />
          </div>
          <div class="form-group col-md-1">
            <label for="numero">Número</label>
            <input type="text" class="form-control" id="numeroendcliente" onChange={onChange}></input>
          </div>
          <div class="form-group col-md-3">
            <label for="bairro">Bairro</label>
            <input type="text" class="form-control" id="bairrocliente" onChange={onChange}></input>
          </div>
          <div class="form-group col-md-2">
            <label for="cidade">Cidade</label>
            <input type="text" class="form-control" id="cidadecliente" onChange={onChange}></input>
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-2">
            <label for="datacad">Data de Cadastro do Cliente</label>
            <input  type="date" class="form-control" id="dtcadcliente" onChange={onChange}></input>
          </div>
        </div>
        <button type="submit" class="btn btn-success">
          Salvar
        </button>
        <button type="button" class="btn btn-danger ml-4">
          Cancelar
        </button>
      </form>
    </Main>
  );
}
