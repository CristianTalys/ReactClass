const InlienStyle = () => {
  return (
    <div className="content">
        <h2 className="subtitle">Inline Style</h2>
        <ul>
            <li>O <strong>inline style</strong> do react é igual ao do CSS;</li>
            <li>Por meio do <strong>atributo style</strong>, aplicamos regras de CSS diretamente a um elemento;</li>
            <li>As outras abordagens são mais interessantes que essa por questões de manutenção do código;</li>
        </ul>
        <p>Neste paragrafo foi aplicado o <span style={{color: "#5BC3FB", fontWeight: "bolder", textShadow: "0px 0px 10px white"}}>inline style</span>.</p>
    </div>
  )
}

export default InlienStyle