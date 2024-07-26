const StateLift = () => {
  return (
    <div className="content">
      <h2 className="subtitle">Elevação de state</h2>
      <ul>
        <li>Elevação de state ou <strong>state lift</strong>, é quando um valor é levado do componente filho para o componente pai;</li>
        <li>Geralmente temos um componente que usa o state e outro que o altera;</li>
        <li>Enão <strong>o componente pai vai gerenciar os valores</strong> e passar para os filhos as alterações;</li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        <p>A mensagem é:</p>
      </div>
    </div>
  )
}

export default StateLift