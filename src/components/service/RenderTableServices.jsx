import moment from "moment";

export default function RenderTableServices(props) {
    const { services } = props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">SERVIÇO</th>
            <th scope="col">DATA DO EVENTO</th>
          </tr>
        </thead>
        <tbody>
          {services.map(service => (
            <tr key={service.idservico}>
              <td>{service.idservico}</td>
              <td>
                <a
                  href=""
                  className={`text-decoration-none text-dark`}
                  title={`Busca todos os dados deste servicee`}
                >
                  {service.tiposervico}
                </a>
              </td>
              <td>{moment(service.dtevento).utc().format('DD/MM/YYYY')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  