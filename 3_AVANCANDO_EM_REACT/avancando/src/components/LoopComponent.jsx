import CarDetails from "./CarDetails"

const LoopComponent = () => {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Prata", km: 12000 },
    { id: 3, brand: "Renault", color: "Verde", km: 3600 },
    { id: 4, brand: "Fiat", color: "Vermelho", km: 4000}
  ];
  return (
    <div className="content">
      <h2 className="subtitle">Reutilização com loop</h2>
      <ul>
        <li>Os arrays podem ter muitos itens, e as vezes nem sabemos ao certo sua quantidade total;</li>
        <li>Então o correto é utilizar uma <strong>estrutura de loop</strong>, para poder percorrer os itens;</li>
        <li>
          Com isso conciliamos alguns conceitos aprendidos: <br />
          <strong><code className="code-center">renderização de lista - reaproveitamento de componente - props</code></strong>
        </li>
      </ul>
      <div className="exemplo">
        <h3>Exemplo:</h3>
        {cars.map((car) => (
        <CarDetails 
        key={car.id} 
        brand={car.brand} 
        color={car.color} 
        km={car.km} />
        ))}
      </div>
    </div>
  )
}

export default LoopComponent