const DinamicInlineCSS = () => {
    const n = 15;
  return (
    <div className="content">
        <h2 className="subtitle">Inline style dinâmico</h2>
        <ul>
            <li>O <strong>CSS dinâmico inline</strong> consiste em uma técnica de aplicação de estilo por condição;</li>
            <li>Teremos o atributo inserido em um <strong>if ternário</strong>;</li>
            <li>Dependendo da condição e do resultado dela, um estilo diferente pode ser exibido;</li>
        </ul>
        <div className="caixaTeste" style={n > 10 ? {backgroundColor:"#282A36"} : {backgroundColor:"#3e456d"}}></div>
        <div className="caixaTeste" style={n > 20 ? {backgroundColor:"#282A36"} : {backgroundColor:"#3e456d"}}></div>
    </div>
  )
}

export default DinamicInlineCSS