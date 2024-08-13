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
                  <a href="#boss1">1.2 - Gather Crab</a>
                </li>
                <li>
                  <a href="#chap1-2">1.3 - Nohl</a>
                </li>
                <li>
                  <a href="#chap1-3">1.3 - Hunter's Wood</a>
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
              <span className="char Lang"></span>, o nosso heroi, é "gentilmente" acordado por <span className="char Nancy"></span>, que reclama que se <span className="char Lang"></span> não levantar agora chegará atrasado ao seu primeiro dia de trabalho. Você pode escolher entre ignorar a garota e continuar na cama, levantar em pânico ou sair calmamente. Ao ter controle sobre o personagem, examine a cômoda para encontrar <span className="itenTxt">1 heal powder</span>, então suba a escada ao norte e pege outro <span className="itenTxt">1 heal powder</span> no baú. Observe um baú perto da cerca do lado esquerdo, marque bem a localização desse baú, pois mais tarde iremos encontrá-lo. Volte ao salão principal e entre no primeiro quarto à direita. Pegue <span className="itenTxt">1 poison cure</span> na cômoda e siga ao último quarto à direita. Se falar com o homem sentado, vai saber que <span className="char Galvan"></span> está esperando por <span className="char Lang"></span> do lado de fora da casa, mas, antes de sair, pegue o <span className="itenTxt">point card</span> na cômoda ao norte.
            </p>

            <div className="specialIten">
              <p className='description'><span className="nameItem">point card...</span><span className="descriptionIten">Item especial</span></p>
              <p>Esse item já salvou muita gente de batalhas complicadas. Esse item transforma 5% do valor das compras em em pontos, que poderão ser usados para causar dano a um inimigo durante as batalhas. Para usálo, abra o menu de itens e use-o, depois escolha o inimigo e veja o estrago que ele faz depois de váiras compras. No entanto use-o com cuidado, pois após ser usado, todos os pontos do card sumirão.</p>
            </div>
            <p>
              Volte ao salão principal e siga para o Sul para sair da casa. O heroi encontrará <span className="char Galvan"></span> e os demais treinando. <span className="char Lang">Lang</span> fica apenas olhando, então <span className="char Nancy"></span> usa o seu jeito carinhoso para dar uma força para o amigo. <span className="char Galvan"></span> apresenta <span className="char Lang">Lang</span> aos demais. Depois das apresentações, <span className="char Galvan"></span> diz que a peimeira missão é ir caçar na floresta e que o procure quando estiver pronto. Ao retomar o controle do personagem, fale com <span className="char">Dein</span> que está à direita da casa de <span className="char Galvan"></span> e responda qualquer uma das opções para ganhar o apelido <span className="apelido">"Swordholder"</span>. Esses apelidos terão importância mais à frente. Examine o vaso à esquerda dos meninos brincando na terra(mais ao Sul) para encontrar <span className="itenTxt">1 heal leaf</span>. À direita das mulheres conversando está a loja de iten. Entre e pegue <span className="itenTxt">1 poison cure</span> no baú, então converse com a balconista, pois, mesmo que não compre nada, recebera o <span className="itenTxt">pedometer</span>. Esse item conta os passos dados por <span className="char Lang">Lang</span>. Ao lado da loja de itens há uma loja de equipamentos; compre e equipe o <span className="itenTxt buy">poison charm</span>. Abaixo da loja de armas há uma cerca que esconde o baú que vimos da varanda na casa de <span className="char Galvan"></span>. Suba no telhado de uma casa perto do rio, no lado equerdo, e examine uma galinha para encontrar <span className="itenTxt">1 Egg</span>. Volte a casa de <span className="char Galvan"></span> e fale com ele no mesmo quarto onde pegamos o Point Card. Ele lembra-se do dia em que encontrou <span className="char Lang">Lang</span> e o adotou como filho. Agora o vê crescido, sente um enorme orgulho da criança que cuidou como se fosse sua. Ele também fala sobre a sua filha, <span className="char Nancy"></span>. A conversa é interrompida por <span className="char">Hawke</span>, pai de <span className="char Galvan"></span> e ancião da aldeia. Ele fala que agora que tornou-se um caçador as suas responsabilidades aumentaram e que há algo que ele deve saber: a água que alimenta a aldeia é suja e só pode ser consimida por causa da <span className="specialRock aqualith"></span>, uma pedra mágica que purifica a água. <span className="char Galvan"></span> retoma a conversa dizendo que é hora deles partirem. O destino é Hunters Wood, lougar de onde vem a maior parte dos alimentos da aldeia. Ao retomar o controle, tente sair da aldeia. Responda  a primeira opção para continuar o roteiro. <span className="char Nancy"></span> dará a você <span className="itenTxt">1 heal powder</span> e <span className="itenTxt">1 poison cure</span>. Responda o que quiser, então saia.
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
              Logo ao entrar, <span className="char Galvan">Galvan</span> dá as priemiras instruções para <span className="char Lang">lang</span>. <span className="char">Dein</span> caçoa de <span className="char Lang">lang</span>, dizendo que o heroi é novato e que não dará conta da missão. Responda o que quiser, pois, de qualquer forma, ele levará uma dura. Ao retomar o controle siga para o Sul, cruzando pelo rio, até encontrar a primeira batalha. Como é nossa primeira luta, <span className="char Galvan"></span> dará os comandos. Repare que ao final da batalha, <span className="char Lang">lang</span> passará de nível e poredá desferir até 3 ataques por turno. Continue para o Sul até entrar na segunda batalha. Agora aprenderemos nossa primeira Art. Depois de aprender a primeira Art, no segundo turno, coloque os comandos:
            </p>
            <div className="comands">
              <i class="bi bi-arrow-right-square-fill arrow"></i> <i class="bi bi-arrow-left-square-fill arrow"></i> <i class="bi bi-arrow-right-square-fill arrow"></i>
            </div>
            <p>
              Na divisa, siga para o Norderste e encontre o baú contendo <span className="itenTxt">1 flag of retreat</span>, então siga pelo caminho que restou até a próxima tela. <span className="char Galvan"></span> explica que eles não vieram para a floresta para caçar, mas para exterminar formigas predadoras. Na divisa seguinte, siga para o Sul para encontrar um baú com <span className="itenTxt">1 heal powder</span>. Mais a frente, seguindo ao Sul por outra divisa, encontraremos um grupo de formigas. Encoste nelas para iniciar uma batalha. É preciso exterminar todas elas. Quando terminar o serviço, volte e siga pelo outro caminho. Na divisa seguinte, pegue o caminho Noroeste, então vire pra esquerda assim que poder pra pegar <span className="itenTxt">1 heal powder</span> no baú. Volte e siga pelo caminho do Norte para encontrar mais um grupo de formigas. Volte pelo caminho à direita e siga em frente na próxima divisa.
            </p>
            <p>
              Mais à frente, os dois caçadores encontram Marcus caído. <span className="char Galvan"></span> irá retornar para Nohl com o ferido enquanto <span className="char Lang"></span> ficará para encontrar <span className="char">Dein</span>. Siga pelo caminho Norte, onde há uma árvore, então siga para a direita. Siga pela estrada Noroeste para encontrar <span className="itenTxt">1 heal powder</span>. Volte e continue para a deireita para encontrar o segundo save point. Na tela seguinte, ande na direção norte e vire à direita na primeira oportunidade para encontrar <span className="itenTxt">1 leaf of stamina</span>. Se usar em <span className="char Lang"></span> sua vida aumentará permanentemente. Continue pelo caminho ao norte e encontrara <span className="char">Dein</span> ferido. Ele não quer a nossa ajuda e os dois começam a discutir. É então que eles escutam um barulho.
            </p>
            <div className="bossFight" id='boss1'>
              <table>
                <tr>
                  <th colSpan={2}>Gather Crab</th>
                </tr>
                <tr>
                  <td className='info'>HP: 1000</td>
                  <td rowSpan={'3'}>Esse chefe vai ser moleza se estiver equipado com Poison Charm e estiver level 4. Comece a batalha usando normal Arts até poder usar uma Super Art para causar maiores danos. Cure sempre que a vida ficar abaixo de 100. Depois de um certo tempo, Lang irá cortar um dos braços do monstro e, não muitos golpes depois, o outro. Agora os únicos ataque do chefe serão Barse e Venon. Mas como já temos o Poison Charm, não será um problema.</td>
                </tr>
                <tr>
                  <td className='info'>Gold: 500</td>
                </tr>
                <tr>
                  <td className='info'>Xp: 500</td>
                </tr>
                <tr>
                  <td>Item roubado</td>
                  <td>Antidote</td>
                </tr>
                <tr>
                  <td>Itens deixados</td>
                  <td>Mesperu Tube</td>
                </tr>
              </table>
            </div>
            <p>
              Depois da luta <span className="char">Dein</span> e <span className="char Lang"></span> voltam ao vilarejo.
            </p>

            <span className="location" id='chap1-2'>Nohl</span>
            <p>
              Ao chegar na cidade, <span className="char Lang"></span>  leva <span className="char">Dein</span> para a casa de Galvan, onde ele é medicado e e pode descansar. <span className="char Galvan"></span>  pergunta quem deu conta do monstro. A primeira opção é para ser humilde, enquanto a segunda é para se vangloriar. Depois da conversa, <span className="char Galvan"></span> diz para <span className="char Lang"></span> ir descansar um pouco, então vá até seu quarto e examine a cama, escolhendo a primeira opção para ir dormir. Durante a noite, <span className='char Lang'></span> tem um estranho pesadelo. Ele está numa cidade em chamas. Os aldeões dizem que o causador de tamanha destruição foi um <span className="mystic">Mystic</span> e que ele deve pagar pelo que fez. Os moradores olham oara a marca no peito de <span className="char Lang"></span> e acreditam que foi ele quem destruiu a cidade. Felizmente, <span className="char Nancy"></span> o salva do pesadelo, acordando-o.
            </p>
            <p>
              No outro dia, vá ao quarto onde <span className="char Galvan"></span> e os demais estão reunidos. Um dos moradores diz que um aldeão foi atacado por um misterioso homem na floresta. <span className='char Galvan'></span> decide ir investigar, mas diz que não sabe o que encontrará em Hunter's Wood e que, por isso, <span className="char Lang"></span> deve ficar em Nohl e cuidar dos feridos, não adianta contestar, independentemente da sua escolha, <span className="char Lang"></span> ficará na aldeia. Mais tarde, <span className="char">Hawk</span> diz que os ferimentos não foram causados por um monstro comum, mas que o homem sobreviveu. Escolha a segunda opção para voltar à floresta e ajudar <span className="char Galvan"></span>. Salve e saia da casa, então, vá à loja de equipamentos para comprar uma armadura melhor. Não gaste dinheiro com uma espada por enquanto.
            </p>

            <span className="location" id='chap1-3'>Hunter's Wood</span>
            <p>
              A floresta não está diferente; apenas está chovendo e agora você está sozinho. Siga até o lugar onde enrentamos o chefe anterior. Chegando lá, <span className="char Lang"></span> encontrará Eduard morto e, mais a frente, <span className="char Galvan"></span> sendo levitado por um misterioso homem de olhos dourados. <span className="char Lang"></span> saca sua espada e você entrará em uma batalha, use o que quiser. Depois de 3 turnos ele usará um ataque que irá derrubar o heroi. O protagonista se assusta ao ver umma figura por detrás do homem. O jovem caçador acha que se trata de um demônio, mas, na verdade, é um <span className="mystic">Origin</span>, seres de magia pura que podem ser invocados por <span className="mystic">Mystics</span>. Sim este homem é um <span className="mystic">Mystic</span>! O homem diz que os <span className="mystic">Mystics</span> possuem uma marca de nascença que os identifica, a mesma que <span className="char Lang"></span> possui no peito. É então que <span className="char Lang"></span> lembra do seu sonho. O jovem garoto que causou a destruição da aldeia está diante dele. O homem mostra algumas pedras e pergunta se <span className="char Lang"></span> se ele viu alguma parecida com as que ele está mostrando. <sapn className="char Lang"></sapn> Lembra da <span className="specialRock aqualith"></span> e o homem sabe de sua existência, pois leu a sua mente. <span className="char goldEyes"></span> diz que a pedra será fundamental para o seu domínio sobre a raça humana e sai em diireção a Nohl. <a href="https://gamefaqs.gamespot.com/ps2/520833-legaia-2-duel-saga/faqs/42128#:~:text=Igohl%2C%20o%20Origin%20do%20%0Ahomem%2C%20diz%20que%20Lang%20possui%20os%20poderes%20de%20G%C3%A1lea%20e%20pode%20se%20tornar%20um%20empecilho%20%0Ase%20continuar%20vivo%2C%20ent%C3%A3o%20perfura%20o%20peito%20do%20her%C3%B3i%20com%20um%20dos%20seus%20bra%C3%A7os.%20%0ALang%20desmaia%2C%20mas%20uma%20voz%20em%20sua%20mente%20o%20d%C3%A1%20for%C3%A7as%20para%20continuar."  className='links' target='_blank'> Link para continuar</a>
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Capitulos