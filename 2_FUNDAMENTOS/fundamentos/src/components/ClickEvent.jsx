const ClickEvent = () => {
  return (
    <div className="content">
      <h2 className="subtitle">Evento de Clique</h2>

      <ul>
        <li>Os eventos são essenciais para programar apps de front-end, vimo isso em <strong>DOM</strong>;</li>
        <li><strong>Em React temos os mesmo eventos</strong>, só que de forma simplificada;</li>
        <li>Por exemplo: com <strong>onClick</strong>, conseguimos diparar um evento que ativa uma função ao clicar em um elemento;</li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        <div>
          <button onClick={() => console.log("Botão foi clicado!")}>
            Clique aqui
          </button>
          <p>
            Lógica disparada no console.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ClickEvent