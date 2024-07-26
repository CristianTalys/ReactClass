const PorpFunction = ({myFunction}) => {
  return (
    <div className="content">
      <h2 className="subtitle">Funções em prop</h2>
      <ul>
        <li>Podemos passar <strong>funções através de props</strong>;</li>
        <li>Basta criar a função no componente pai, e enviar como prop;</li>
        <li>No componente filho, podemos utilizar para algum <strong>evento</strong>;</li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        <button onClick={myFunction}>Clique em mim</button>
        <p>Resultado no console.</p>
      </div>
    </div>
  )
}

export default PorpFunction