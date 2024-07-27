const DinamicClasses = () => {
  const backRed = true;
  return (
    <div className="content">
      <h2 className="subtitle">Classes dinâmincas</h2>
      <ul>
        <li>Podemos também aplicar uma lógica para <strong>adicionar classes a um elemento</strong>;</li>
        <li>Utilizamos o <strong>if ternário</strong>;</li>
        <li>Essa abordagem é mais interessante que o css inline, pois o conteúdo da calsse está no arquivo de CSS;</li>
      </ul>
      <div id="caixa" className={backRed ? "backRed" : "backBlue"}></div>
      <p>A caixa acima não tem a classe de fundo vermelha aplicado diretamente, mas sim dinâmicamente.</p>
    </div>
  )
}

export default DinamicClasses