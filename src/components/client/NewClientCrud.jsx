import React, { useEffect, useState } from "react";
import Main from "../template/Main";
import { useForm } from "react-hook-form";
import { api } from "../../backend/api";

const headerProps = {
  icon: "user",
  title: "Crie um novo cliente",
};

export default function NewClientCrud() {
  const { formData, setFormData } = useState("")
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    api.post("/clients", {
      nomecliente: data.name,
      dtnasccliente: data.birthday,
      dtcadcliente: data.rDate,
      email: data.email,
      whatsapp: data.whatsapp,
      enderecocliente: data.pPlace,
      numeroendcliente: data.number,
      bairrocliente: data.district,
      cepcliente: data.cep,
      cidadecliente: data.city,
    }).then((response) => {
      alert(response.data['mensagem']);
      window.location.reload();
    }).catch((error) => {
      alert(error.response.data['error'])
    });
  }

  return (
    <Main {...headerProps}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="name">Nome</label>
            <input {...register("name")}
              type="text"
              class="form-control"
              id="name"
              placeholder="Digite o nome"
            ></input>
          </div>
          <div class="form-group col-md-3">
            <label for="email">E-mail</label>
            <input {...register("email")}
              type="email"
              class="form-control"
              id="email"
              placeholder="exemplo@email.com"
            ></input>
          </div>
          <div class="form-group col-md-2">
            <label for="date">Data de Nascimento</label>
            <input {...register("birthday")} type="date" class="form-control" id="birthday"></input>
          </div>
          <div class="form-group col-md-3">
            <label for="whatsapp">WhatsApp</label>
            <input {...register("whatsapp")}
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
            <input {...register("cep")}
              type="text"
              class="form-control"
              id="cep"
              placeholder="00000-000"
            ></input>
          </div>

          <div class="form-group col-md-4">
            <label for="rua">Logradouro</label>
            <input {...register("pPlace")}
              class="form-control"
              type="text"
              id="pPlace"
              placeholder="rua, avenida, etc"
            />
          </div>
          <div class="form-group col-md-1">
            <label for="numero">Número</label>
            <input {...register("number")} type="text" class="form-control" id="number"></input>
          </div>
          <div class="form-group col-md-3">
            <label for="bairro">Bairro</label>
            <input {...register("district")} type="text" class="form-control" id="district"></input>
          </div>
          <div class="form-group col-md-2">
            <label for="cidade">Cidade</label>
            <input {...register("city")} type="text" class="form-control" id="city"></input>
          </div>
        </div>

        <div className="form-row">
          <div class="form-group col-md-2">
            <label for="datacad">Data de Cadastro do Cliente</label>
            <input {...register("rDate")} type="date" class="form-control" id="rDate"></input>
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
