const RenderFunction = () => {
  const renderSomething = (x) => {
    if(x) {
      return <h1>Renderizando true;</h1>
    } else {
      return <h1>Renderizando false;</h1>
    }
  }
  return (
    <div className="content">
      <h2 className="subtitle">Funções de renderização</h2>
      <ul>
        <li>Podemos criar funções nos componentes que <strong>retornam JSX</strong>;</li>
        <li>Isso pode ser utilizado para uma <strong>renderização condicional</strong>, por exemplo;</li>
        <li>Fazendo que o JSX varie dependendo do resultado da operação;</li>
      </ul>

      <div className="exemplo">
        <h3>Exemplo:</h3>
        {renderSomething(true)}
        {renderSomething(false)}
      </div>
    </div>
  )
}

export default RenderFunction