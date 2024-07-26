import Container from "./Container"

const ChildrenProp = (children) => {
  return (
    <div className="content">
      <h2 className="subtitle">Children Prop</h2>
      <ul>
        <li><strong>Children Prop</strong> é utilizado quando um componente precisa ter JSX dento dele;</li>
        <li>Porém o JSX vem do componente pai;</li>
        <li> Então o componente age como um <strong>container</strong>, abrigando esse JSX;</li>
        <li>Esse children entra como uma <strong>prop do componente</strong>;</li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        <Container>
          <p>Aqui vai todo o conteúdo adicional do elemento.</p>
        </Container>
        <Container>
          <p>Aqui vai todo o conteúdo adicional do elemento novamente.</p>
        </Container>
      </div>
    </div>
  )
}

export default ChildrenProp