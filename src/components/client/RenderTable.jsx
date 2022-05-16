export default function RenderTable(props) {
  const { clients } = props;
  return (
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
        {clients.map(client => (
          <tr key={client.id}>
            <td>{client.idcliente}</td>
            <td>
              <a
                href=""
                className={`text-decoration-none text-dark`}
                title={`Busca todos os dados deste cliente`}
              >
                {client.nomecliente}
              </a>
            </td>
            <td>{client.email}</td>
            <td>{client.whatsapp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
