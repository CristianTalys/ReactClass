// Import style
import './CssComponent.css'

const CssComponent = () => {
  return (
    <div className="content" id='trocaStyle'>
        <h2 className="subtitle">CSS de componente</h2>
        <ul>
            <li>O <strong>CSS de componente</strong> é utilizado apenas em um componente específico;</li>
            <li>Geralmente o arquivo é criado com o <strong>mesmo nome do componente</strong>;</li>
            <li>Lembre-se: ele <strong>não é escoped</strong>, ou seja, pode vazar para outros elementos do projeto;</li>
        </ul>
        <p>Por exemplo, nesse componente, quando estiver no estado hover, haverá uma troca de estilo.</p>
    </div>
  )
}

export default CssComponent