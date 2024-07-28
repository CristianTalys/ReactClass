const LabelInput = () => {
  return (
    <div className="content">
        <h2 className="subtitle">Label envolvendo input</h2>
        <ul>
            <li>Em React um padrão muito utilizado é a label ser o elemento <strong>pai do input</strong>;</li>
            <li>O atributo é opcional nesta abordagem;</li>
            <li>Simplifica o HTML e permanece a <strong>semântica</strong>;</li>
        </ul>
        <form>
          <label>
            <span>Nome:</span>
            <input type="text" name="name" placeholder="Digite seu nome"/>
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" name="email" placeholder="Digite seu e-mail"/>
          </label>
          <input type="submit" value="Enviar" disabled></input>
        </form>
    </div>
  )
}

export default LabelInput