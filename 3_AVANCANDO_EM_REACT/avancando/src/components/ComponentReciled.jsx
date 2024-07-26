import CarDetails from "./CarDetails"

const ComponentReciled = () => {
  return (
    <div className="content">
      <h2 className="subtitle">Reutilização de componentes</h2>
      <ul>
        <li>Com o auxílho das props, <strong>reutilizar componentes faz mais sentido</strong>;</li>
        <li>Se temos 1000 dados de carros, <strong>podemos representá-los com apenas um componente</strong>repetido n vezes;</li>
        <li>Isso tornará o código padronizado, e facilitará a manutenção;</li>
      </ul>

      <div className="exemplo">
        <h3>Exemplo:</h3>
        <CarDetails brand={'Nissan'} color={'Verde'} km={162} />
        <CarDetails brand={'Alpha Romeo'} color={'Prata'} km={25} />
        <CarDetails brand={'Toyota'} color={'Amarelo'} km={346} />
        <CarDetails brand={'Fiat'} color={'Branco'} km={861} />
        <CarDetails brand={'Chevrolet'} color={'Preto'} km={345} />
        <CarDetails brand={'Hyundai'} color={'Vermelho'} km={76} />
      </div>
    </div>
  )
}

export default ComponentReciled