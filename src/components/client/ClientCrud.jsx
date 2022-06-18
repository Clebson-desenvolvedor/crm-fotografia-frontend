import React, { useEffect, useState } from "react";
import Main from "../template/Main";
import { useForm } from "react-hook-form";
import { api } from "../../backend/api";
import { useParams } from "react-router-dom";

export default function ClientCrud(props) {
    console.log(props)
    const { id } = useParams();
    const [client, setClient] = useState([]);
    const headerProps = {
        icon: "user",
        title: `Cliente ${client.nomecliente}`,
        subtitle: ` id ${id}`
    };

    useEffect(() => {
        api.get(`clients/${id}`).then(({ data }) => {
            setClient(data);
        });
    }, []);

    console.log(client)
    return (
        <Main {...headerProps}>
            <form >
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
                            value={client.email}
                        ></input>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="date">Data de Nascimento</label>
                        <input type="date" class="form-control" id="birthday" value={client.dtnasccliente}></input>

                    </div>
                    <div class="form-group col-md-3">
                        <label for="whatsapp">WhatsApp</label>
                        <input
                            type="text"
                            class="form-control"
                            id="whatsapp"
                            placeholder="(  ) xxxxx-xxxx"
                            value={client.whatsapp}
                        ></input>
                    </div>
                </div>

                <div className="form-row">
                    <div class="form-group col-md-2">
                        <label for="cep">CEP</label>
                        <input
                            type="text"
                            class="form-control"
                            id="cep"
                            placeholder="00000-000"
                            value={client.cepcliente}
                        ></input>
                    </div>

                    <div class="form-group col-md-4">
                        <label for="rua">Logradouro</label>
                        <input
                            class="form-control"
                            type="text"
                            id="pPlace"
                            placeholder="rua, avenida, etc"
                            value={client.enderecocliente}
                        />
                    </div>
                    <div class="form-group col-md-1">
                        <label for="numero">Número</label>
                        <input type="text" class="form-control" id="number" value={client.numeroendcliente}></input>

                    </div>
                    <div class="form-group col-md-3">
                        <label for="bairro">Bairro</label>
                        <input type="text" class="form-control" id="district" value={client.bairrocliente}></input>

                    </div>
                    <div class="form-group col-md-2">
                        <label for="cidade">Cidade</label>
                        <input type="text" class="form-control" id="city" value={client.cidadecliente}></input>
                    </div>
                </div>

                <div className="form-row">
                    <div class="form-group col-md-2">
                        <label for="rDate">Data de Cadastro do Cliente</label>
                        <input type="date" class="form-control" id="rDate" value={client.dtcadcliente}></input>
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
