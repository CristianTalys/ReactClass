const Props = ({name, brand, km, color}) => {
  return (
    <div className="content">
      <h2 className="subtitle">Props</h2>
      <ul>
        <li><strong>Props</strong> é um recurso fundamental do <strong>React</strong>;</li>
        <li>Permite a <strong>passagem de dados</strong> de um componente pai para um componente filho;</li>
        <li>Será útil para quando houver dados vindo de um banco de dados;</li>
        <li>As props vem em um <strong>objeto no argumento da função</strong> do componente;</li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        <p>O nome do usuario é: <strong>{name}</strong>.</p>
      </div>
      <h2 className="subtitle">Desestruturando props</h2>
      <ul>
        <li>Os componentes geralmente tem mais de uma props;</li>
        <li>Para facilitar o uso delas, podemos <strong>desestruturar no parâmentro da função</strong> do componente;</li>
        <li>Assim o objeto props vira o nome de cada propriedade, então não precisamos acessá-lo;</li>
        <li>Desta maneira: <br /> <strong><code>MyComponent(&#x0007B;name, age&#x0007D;)</code></strong></li>
        <li>Utilizamos enão nome, em vez de props.age;</li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        <h4>Detalhes do veículo:</h4>
        <ul>
          <li>Marca: {brand} </li>
          <li>Kilometragem: {km} </li>
          <li>Cor: {color} </li>
        </ul>
      </div>
    </div>
  )
}

export default Props