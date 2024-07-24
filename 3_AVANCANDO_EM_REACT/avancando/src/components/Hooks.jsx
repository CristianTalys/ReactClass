import { useState } from "react";

const Hooks = () => {
  const [myNumber, setAnotherNumber] = useState(1);
  return (
    <div className="content">
      <h2 className="subtitle">O que são Hooks?</h2>
      <ul>
        <li>Recursos do React que tem diversas funções, podemos criar os nossos também;</li>
        <li>Exemplo: <strong>guardar e alterar o estado de algum dado</strong>;</li>
        <li><strong>Os hooks precisam ser importados</strong>, e sempre começam com a palavra <strong>use</strong>;</li>
        <li>Alguns bem utilizados são: <strong>useState</strong>, <strong>useEffect</strong>;</li>
        <li>Os hooks que nós criamos são chamados de custom hooks;</li>
        <li>Geralmente toda a aplicação usa pelo menos um hook;</li>
      </ul>

      <h2 className="subtitle">hook: useState</h2>
      <ul>
        <li>O <strong>useState</strong> é um dos mais utilizados;</li>
        <li>Podemos <strong>gerenciar o estado de um ou mais dados</strong>, é como se fosse um getter/setter;</li>
        <li>Utilizamos esse hook pois as <strong>variáveis não funcionam como esperado</strong>, elas não re-renderizam o componente;</li>
        <li>Para guardar um dado vamos utilizar <strong>setNomeDoDado</strong>;</li>
      </ul>

      <div className="exemplo">
        <h3>Exemplo:</h3>
        <p>
          Valor: {myNumber}
        </p>
        <div>
          <button onClick={() => setAnotherNumber(myNumber + 1)}>Somar 1 ao valor</button>
        </div>
      </div>
    </div>
  )
}

export default Hooks