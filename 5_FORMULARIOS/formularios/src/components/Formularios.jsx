const Formularios = () => {
  return (
    <div className="content">
      <h2 className="subtitle">Formulários e React</h2>
      <ul>
        <li>Para envio de dados é necessário um formulário, em React também utilizamos a <strong>tag form</strong>;</li>
        <li>As labels tem o atributo alterado para <strong>htmlFor</strong>, que conta com o name do input;</li>
        <li><strong>Não utilizamos action</strong>, o envio deve ser feito pelo JavaScript, de forma assíncrona;</li>
      </ul>
    </div>
  )
}

export default Formularios