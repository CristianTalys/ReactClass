import { useState } from "react"

const RenderList = () => {
  const [list] = useState(['Matheus', 'Jorge', 'Ana']);
  const [secondList, setUsers] = useState([
    { id: 1, nome: "Matheus", age: 31 },
    { id: 2, nome: "Pedro", age: 23 },
    { id: 3, nome: "José", age: 42 },
  ])
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

      <h2 className="subtitle">Propriedade key</h2>
      <ul>
        <li>Iterar uma lista sem a <strong>propriedade key</strong>, gera um erro no console;</li>
        <li>O React precisa de uma <strong>chave única</strong> para cada elemento;</li>
        <li>Isso serve para ajudar a <strong>renderização do componente</strong>;</li>
        <li>O React utiliza isso para manipulação dos itens;</li>
      </ul>

      <div className="exemplo">
        <h3>Exemplo:</h3>
        <ul>
          {secondList.map((user) => (
            <li key={user.id}>{user.nome} - {user.age} anos.</li>
          ))}
        </ul>
      </div>
      <h2 className="subtitle">Previous State</h2>
      <ul>
        <li><strong>Previous state</strong> é um recurso do hook useState;</li>
        <li>Podemos pegar o <strong>valor original dos dados</strong>, e fazer alguma alteração;</li>
        <li>Muito utilizado em listas, pois pegamos o valor antigo e o modificamos;</li>
        <li><strong>O primeiro arumento do set</strong> é sempre o previous state;</li>
      </ul>
    </div>
  )
}

export default RenderList