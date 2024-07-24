const EventFunctions = () => {
  const handleClick = () => {
    console.log("O botão foi clicado!")
  }
  return (
    <div className="content">
      <h2 className="subtitle">Funções nos eventos</h2>
      <ul>
        <li>Quando temos <strong>lógicas complexas</strong>, é mais indicado criar uma função para o evento;</li>
        <li>Isso vai separar as responsabilidades, e deixar nosso código mais fácil de dar <strong>manutenção</strong>;</li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        <button onClick={handleClick}>Clique aqui</button>
        <p>
          Lógica disparada no console.
        </p>
      </div>
    </div>
  )
}

export default EventFunctions