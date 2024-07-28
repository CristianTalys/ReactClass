import { useState } from "react";

const ManipularValores = () => {
  // Gerenciamento de dados
  const [name1, setName] = useState()
  const [email1, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name1, email1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name1, email1);
  };
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
          <input
            type="text"
            name="name1"
            placeholder="Digite seu nome"
            onChange={handleName}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email1"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar"  onSubmit={handleSubmit}></input>
      </form>
      <h2 className="subtitle">Simplificando a manupulação</h2>
      <ul>
        <li>Quando temos diversos inputs no formulário, podemos simplificar a manipulação;</li>
        <li>Criamos uma <strong>função inline dentro do onChange</strong> e trocamos o valor do dado;</li>
      </ul>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name="name2" placeholder="Digite seu nome" />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email2" placeholder="Digite seu e-mail" />
        </label>
        <input type="submit" value="Enviar" disabled></input>
      </form>

    </div>
  )
}

export default ManipularValores