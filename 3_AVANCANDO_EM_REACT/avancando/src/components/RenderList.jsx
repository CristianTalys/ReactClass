import { useState } from "react"

const RenderList = () => {
  const [list] = useState(['Matheus', 'Jorge', 'Ana']);
  return (
    <div className="content">
      <h2 className="subtitle">Renderização de lista</h2>
        <ul>
          <li>Dados do <strong>tipo array</strong> são muito comuns em aplicações;</li>
          <li>Geralmente recebemos um <strong>array de objetos</strong>, e precisamos iterar nele e exibir os elementos;</li>
          <li>O método <strong>map</strong> fará a iteração;</li>
          <li>É possível inserir <strong>JSX na execução</strong>;</li>
        </ul>
        <div className="exemplo">
          <h3>Exemplo:</h3>
          <ul>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default RenderList