const SendForm = () => {
  return (
    <div className="content">
      <h2 className="subtitle">Envio de formulário</h2>
      <ul>
        <li>Para enviar um formulário utilizamos o evento <strong>onSubmit</strong>;</li>
        <li>Podemos executar uma função, assim como nos inputs;</li>
        <li>Temos que parar o envio do formulário com o <strong>preventDefault</strong>;</li>
        <li>E nesta função é que fazemos <strong>validações</strong> de dados;</li>
      </ul>
    </div>
  )
}

export default SendForm