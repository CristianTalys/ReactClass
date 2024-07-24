import ComponentRecicle from "./ComponentRecicle"

const TemplateExpressions = () => {
  const name = 'Cristian'
  const data = {
    age: 29,
    job: 'programador',
  }
  return (
    <div className="content">
      <h2 className="subtitle">TemplateExpressions</h2>
      <ul>
        <li><strong>Template Exrpessions</strong> é o recurso que permite a execução de JS no JSX;</li>
        <li>Podemos também inserir variáveis;</li>
        <li>A sintaxe é: <strong><code>&#x0007B;2+2&#x0007D;</code></strong></li>
        <li>Tudo que vai entre as chaves é entendido e executado como JavaScript;</li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        <p>Bem vindo {name}</p>
        <p>Sua idade é {data.age} e sua profissão é {data.job}.</p>
        <ComponentRecicle />
      </div>
    </div>
  )
}

export default TemplateExpressions