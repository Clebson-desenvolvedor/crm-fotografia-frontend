export default function RenderMenu(props) {
  console.log(props)
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
        <a href={`/${props.route}/add`} className={`text-decoration-none text-dark`}>
          <i className={`fa fa-solid fa-plus`} title={`Criar novo`}></i>
        </a>
      </div>
    );
  }