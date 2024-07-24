const Comentarios = () => {
  return (
    <div className="content">
      <h2 className="subtitle">Comentários nos componentes</h2>
      <ul>
        {/* exemplo de comentário */}
        <li>Há duas formas de inserir comentários em React</li>
        <li>Podemos utilizar a sintaxe de JS fora e dentro das funções, com: <strong><code>&#x0002F;&#x0002F;comentário</code></strong></li>
        <li>Ou no JSX com: <strong><code>&#x0007B;&#x0002F;&#x0002A; algum comentário &#x0002A;&#x0002F;&#x0007D;</code></strong>;</li>
        <li>As chaves são necessárias para executar quaçquer instrução de JS;</li>
      </ul>
    </div>
  )
}

export default Comentarios