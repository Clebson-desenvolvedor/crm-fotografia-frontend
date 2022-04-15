import React from "react";
import Main from "../template/Main";

export default function Home(props) {
  return (
    <Main icon="home" title="Início" subtitle="Alice Andrade Fotografia">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
        Gerenciador de clientes e serviços de fotografia ByEmotion
      </p>
    </Main>
  );
}
