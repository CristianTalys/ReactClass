import { useState } from "react";

const ManipularValores = () => {
  // Gerenciamento de dados
  const [name1, setName] = useState()
  const [email1, setEmail1] = useState()

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name1);
  }
  return (
    <div className="content">
      <h2 className="subtitle">Manipulando valores</h2>
      <ul>
        <li>Para manipular os valores de um formulário vamos utilizar o hook <strong>useState</strong>;</li>
        <li>Ou seja, armazenar o valor com o <strong>set</strong>;</li>
        <li>O evento que vai nos inputs é o <strong>onChange</strong>, e nele teremos a função de alteração;</li>
      </ul>
      <form>
          <label>
            <span>Nome:</span>
            <input type="text" name="name1" placeholder="Digite seu nome" onChange={handleName} />
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" name="email1" placeholder="Digite seu e-mail"/>
          </label>
          <input type="submit" value="Enviar"></input>
        </form>
    </div>
  )
}

export default ManipularValores