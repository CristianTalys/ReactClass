const CondicionalRender = () => {
    const x = true;
    const y = "Cristian";
  return (
    <div className="content">
        <h2 className="subtitle">Renderização condicional</h2>
        <ul>
            <li><strong>Renderização condicional</strong> é quando parto do template é exibido por meio de uma condição;</li>
            <li>Que é simplesmente um <strong>if no JSX</strong>;</li>
            <li>Utilização: quando o usuário está autenticado/não autenticado;</li>
        </ul>
        <div className="exemplo">
          <h3>Exemplo:</h3>
          <h4>O item será exibido?</h4>
          {x && <p>Se x for true será exibido!</p>}
        </div>
        <h2 className="subtitle">Adicionaldo um else</h2>
        <ul>
          <li>A renderização condicional pode conter um <strong>else</strong>;</li>
          <li>A estrutura é igual a do <strong>if ternário</strong>;</li>
          <li>Fica desta forma: <br /> <strong><code>condição ? execução1 : execução2</code></strong></li>
        </ul>
        <div className="exemplo">
        <h3>Exemplo:</h3>
        <h4>O nome será exibido?</h4>
        {y === 'Cristian' ? <p>Bem vindo {y}!</p>:<p>Nome não encontrado</p>}
        {y === 'Antonio' ? <p>Bem vindo {y}!</p>:<p>Nome não encontrado</p>}
        </div>
    </div>
  )
}

export default CondicionalRender