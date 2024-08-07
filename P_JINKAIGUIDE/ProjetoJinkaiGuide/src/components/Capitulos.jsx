import './CssCapitulos.css';

const Capitulos = () => {
  return (
    <div>
      <aside className='locations'>
        <div className='fundoBranco'>
          <h4>Locais</h4>
          <ul>
            <li><a href="#locationNohl">Nohl</a></li>
            <li><a href="#locationHuntersWood">Hunter's Wood</a></li>
            <li><a href="#locationGaleCanyon">Gale Canyon</a></li>
            <li><a href="locationDoplinCastle">Doplin Castle</a></li>
          </ul>
        </div>
      </aside>

      <aside className='chapters'>
        <div className='fundoBranco'>
          <h4>Capítulos</h4>
          <ul>
            <li>
              <a href="#chap1">1 - A Aqualith</a>
              <ul className='underList'>
                <li>
                  <a href="#chap1-1">1.1 - Hunter's Wood</a>
                </li>
                <li>
                  <a href="#chap1-2">1.2 - Nohl</a>
                </li>

              </ul>
            </li>
          </ul>
        </div>
      </aside>
      <section>
        <div className="nameGame">
          <img src="/capa-Legaia-2-Duel-Saga-PS2.jpg" alt="Logo do site" />
          <h2>Legaia 2: Duel Saga</h2>
        </div>

        <hr />

        <div className="content">
          <p>
            Ninguém ainda sabe como a vida surgiu realmente na Terra. Apesar das várias teorias a respeito, ninguém ainda chegou a um consenso. No entanto, sabe-se  que existem algumas pedras mágicas, as chamadas Azure Stones, que possuem um poder tão grande que são capazes de gerar vida. Muitos tentaram, mas apenas um conseguiu controlar os seus poderes. Essa pessoa foi chamada de Sharp Spike. Com o passar dos anos, o Sharp Spike foi criando descendentes, no Entanto, apenas um dos seus filhos poderia ter as mesmas habilidades do pai. Para ajudar o Star Sharpen a controlar os seus poderes foram criados os Mystics, humanos com poderes especiais, capazes de invocar seres que são capazes de controlar os elementos da natureza.
          </p>
        </div>

        <div className="chapterContrast content" id='chap1'>
          <h3>Capítulo 1<span><br />A Aqualith</span></h3>
          <span className="location">Nohl</span>
          <div className="itensList">
            <h5>Itens</h5>
            <ul>
              <li>4 Heal Powder</li>
              <li>2 Poison Cure</li>
              <li>Point Card</li>
              <li>Heal Leaft</li>
              <li>Pedometer</li>
              <li>Egg</li>
            </ul>
          </div>
          <div className="stepByStep">
            <p>
              <span className="char Lang">Lang</span>, o nosso heroi, é "gentilmente" acordado por <span className="char Nancy">Nancy</span>, que reclama que se <span className="char Lang">Lang</span> não levantar agora chegará atrasado ao seu primeiro dia de trabalho. Você pode escolher entre ignorar a garota e continuar na cama, levantar em pânico ou sair calmamente. Ao ter controle sobre o personagem, examine a cômoda para encontrar <span className="itenTxt">1 heal powder</span>, então suba a escada ao norte e pege outro <span className="itenTxt">1 heal powder</span> no baú. Observe um baú perto da cerca do lado esquerdo, marque bem a localização desse baú, pois mais tarde iremos encontrá-lo. Volte ao salão principal e entre no primeiro quarto à direita. Pegue <span className="itenTxt">1 poison cure</span> na cômoda e siga ao último quarto à direita. Se falar com o homem sentado, vai saber que <span className="char Galvan">Galvan</span> está esperando por <span className="char Lang">Lang</span> do lado de fora da casa, mas, antes de sair, pegue o <span className="itenTxt">point card</span> na cômoda ao norte.
            </p>

            <div className="specialIten">
              <p className='description'><span className="nameItem">point card...</span><span className="descriptionIten">Item especial</span></p>
              <p>Esse item já salvou muita gente de batalhas complicadas. Esse item transforma 5% do valor das compras em em pontos, que poderão ser usados para causar dano a um inimigo durante as batalhas. Para usálo, abra o menu de itens e use-o, depois escolha o inimigo e veja o estrago que ele faz depois de váiras compras. No entanto use-o com cuidado, pois após ser usado, todos os pontos do card sumirão.</p>
            </div>
            <p>
              Volte ao salão principal e siga para o Sul para sair da casa. O heroi encontrará <span className="char Galvan">Galvan</span> e os demais treinando. <span className="char Lang">Lang</span> fica apenas olhando, então <span className="char Nancy">Nancy</span> usa o seu jeito carinhoso para dar uma força para o amigo. <span className="char Galvan">Galvan</span> apresenta <span className="char Lang">Lang</span> aos demais. Depois das apresentações, <span className="char Galvan">Galvan</span> diz que a peimeira missão é ir caçar na floresta e que o procure quando estiver pronto. Ao retomar o controle do personagem, fale com <span className="char">Dein</span> que está à direita da casa de <span className="char Galvan">Galvan</span> e responda qualquer uma das opções para ganhar o apelido <span className="apelido">"Swordholder"</span>. Esses apelidos terão importância mais à frente. Examine o vaso à esquerda dos meninos brincando na terra(mais ao Sul) para encontrar <span className="itenTxt">1 heal leaf</span>. À direita das mulheres conversando está a loja de iten. Entre e pegue <span className="itenTxt">1 poison cure</span> no baú, então converse com a balconista, pois, mesmo que não compre nada, recebera o <span className="itenTxt">pedometer</span>. Esse item conta os passos dados por <span className="char Lang">Lang</span>. Ao lado da loja de itens há uma loja de equipamentos; compre e equipe o <span className="itenTxt buy">poison charm</span>. Abaixo da loja de armas há uma cerca que esconde o baú que vimos da varanda na casa de <span className="char Galvan">Galvan</span>. Suba no telhado de uma casa perto do rio, no lado equerdo, e examine uma galinha para encontrar <span className="itenTxt">1 Egg</span>. Volte a casa de <span className="char Galvan">Galvan</span> e fale com ele no mesmo quarto onde pegamos o Point Card. Ele lembra-se do dia em que encontrou <span className="char Lang">Lang</span> e o adotou como filho. Agora o vê crescido, sente um enorme orgulho da criança que cuidou como se fosse sua. Ele também fala sobre a sua filha, <span className="char Nancy">Nancy</span>. A conversa é interrompida por <span className="char">Hawke</span>, pai de <span className="char Galvan">Galvan</span> e ancião da aldeia. Ele fala que agora que tornou-se um caçador as suas responsabilidades aumentaram e que há algo que ele deve saber: a água que alimenta a aldeia é suja e só pode ser consimida por causa da Aqualith, uma pedra mágica que purifica a água. <span className="char Galvan">Galvan</span> retoma a conversa dizendo que é hora deles partirem. O destino é Hunters Wood, lougar de onde vem a maior parte dos alimentos da aldeia. Ao retomar o controle, tente sair da aldeia. Responda  a primeira opção para continuar o roteiro. <span className="char Nancy">Nancy</span> dará a você <span className="itenTxt">1 heal powder</span> e <span className="itenTxt">1 poison cure</span>. Responda o que quiser, então saia.
            </p>



            <span className="location" id='chap1-1'>Hunter's Wood</span>
            <div className="itensList">
              <h5>Itens</h5>
              <ul>
                <li>4 Heal Powder</li>
                <li>1 Flag of Retreat Cure</li>
                <li>1 Leaf of Stamina</li>
              </ul>
              <h5 className='enemy'>Inimigos</h5>
              <table className='enemyTable'>
                <tr>
                  <th>Inimigo</th>
                  <th>Fraqueza elemental</th>
                </tr>
                <tr>
                  <td>klaw ant</td>
                  <td className='vento'>vento</td>
                </tr>
                <tr>
                  <td>Bloody wolf</td>
                  <td className='terra'>Terra</td>
                </tr>
                <tr>
                  <td>flytrap </td>
                  <td className='fogo'>fogo</td>
                </tr>
              </table>
            </div>
            <p>
              Logo ao entrar, <span className="char Galvan">Galvan</span> dá as priemiras instruções para <span className="char Lang">lang</span>. Dein caçoa de <span className="char Lang">lang</span>, dizendo que o heroi é novato e que não dará conta da missão. Responda o que quiser, pois, de qualquer forma, ele levará uma dura. Ao retomar o controle siga para o Sul, cruzando pelo rio, até encontrar a primeira batalha. Como é nossa primeira luta, <span className="char Galvan">Galvan</span>
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Capitulos