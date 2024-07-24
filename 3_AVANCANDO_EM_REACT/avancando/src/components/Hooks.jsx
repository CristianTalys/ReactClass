const Hooks = () => {
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
    </div>
  )
}

export default Hooks