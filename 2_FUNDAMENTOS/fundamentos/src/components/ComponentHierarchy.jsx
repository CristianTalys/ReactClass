import ComponentRecicle from "./ComponentRecicle"

const ComponentHierarchy = () => {
  return (
    <div className="content">
        <h2 className="subtitle">Hierarquia de componentes</h2>
        <ul>
            <li>Os componentes podem ser <strong>reutilizados</strong> em outros componentes;</li>
            <li>Podemos montar também uma <strong>hierarquia</strong>, onde um componente é pai do outro;</li>
            <li>E ao importar o componente pai, todos os outros vem juntos;</li>
        </ul>
        <ComponentRecicle />
    </div>
  )
}

export default ComponentHierarchy