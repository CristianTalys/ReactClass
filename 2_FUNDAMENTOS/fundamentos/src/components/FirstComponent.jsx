const FirstComponent = () => {
    return (
        <div className="content">
            <h2 className="subtitle">JSX</h2>
            <ul>
                <li><strong>JSX é o HTML do react</strong>, o código interno das funções de componentes, após o return;</li>
                <li>Vamos escrever as nossas tags e importar os outros componentes;</li>
                <li>Há algumas diferenças do HTML, ex: <strong>class = className</strong>;</li>
                <li>Podemos <strong>escrever JavaScript dentro do JSX</strong>;</li>
                <li>O JSX pode ter <strong>apenas um elemento pai</strong>;</li>
            </ul>
        </div>
    )
}

export default FirstComponent