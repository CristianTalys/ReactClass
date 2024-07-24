import retrato from "../assets/retrato.png";

const ImageUse = () => {
  return (
    <div className="content">
      <h2 className="subtitle">Inserindo imagens</h2>
      <ul>
        <li>As imagens do projeto podem ficar na pasta <strong>public</strong>;</li>
        <li>Estando lá, elas <strong>podem ser utilizadas diretamento no projeto</strong>;</li>
        <li>A pasta public fica linkada com a src, exemplo: <strong>"/imagem.png</strong>;</li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        <img src="/vite.svg" alt="logo empresa vite" />
      </div>

      <h2 className="subtitle">Imagens em assets</h2>
      <ul>
        <li>Outro local comum de colocar as imagens em um projeto React é na pasta <strong>assets</strong>;</li>
        <li>Em assets <strong>precisamos importar a imagem</strong>, como se fosse um componente;</li>
        <li>Estas duas abordagens são muito utilizadas;</li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        <img src={retrato} alt="Imagem de retrato" className="retrato"/>
      </div>
    </div>
  )
}

export default ImageUse