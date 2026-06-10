/*
  Configuracao principal de Mare Pixel: Pesca da Nazare
  -----------------------------------------------------
  Este e o ficheiro mais importante para ajustar o jogo.

  Podes mudar pontos, velocidades, probabilidades, duracoes,
  raridade dos shinies, dificuldade e fuga do peixe grande aqui,
  sem mexer na logica principal em game.js.

  Notas sobre probabilidades:
  - O jogo usa duas camadas de probabilidade:

    1. Primeiro escolhe uma categoria geral em difficultyLevels:
       fish, trash ou danger.

       Exemplo:
       weights: { fish: 88, trash: 9, danger: 3 }

       Isto quer dizer que, nessa fase do jogo, aparecem muitos peixes,
       pouco lixo e poucos perigos.

    2. Depois de escolher a categoria, o jogo escolhe um objeto dentro
       dessa categoria usando o valor "chance".

       Exemplo:
       Sardinha chance 32 e Polvo chance 7 significa que, quando o jogo
       ja escolheu a categoria "fish", a Sardinha aparece muito mais
       vezes do que o Polvo.

  - Muito importante:
    Se mudares o Tubarao para chance 80, isso nao quer dizer que ele
    aparece 80% das vezes no jogo todo.

    O Tubarao so compete dentro da categoria "danger".
    Para aparecerem mais tubaroes no jogo todo, tambem tens de aumentar
    danger em difficultyLevels.

    O mesmo vale para lixo:
    aumentar a chance da Garrafa ou da Bota so muda qual lixo aparece.
    Para aparecer mais lixo no jogo todo, aumenta trash em difficultyLevels.

  - "shinyChance" e uma probabilidade real entre 0 e 1.
    Exemplo: 0.02 = 2% de chance de esse peixe nascer shiny.
  - Os shinies valem sempre os pontos normais x shinyMultiplier.
*/

window.GAME_CONFIG = {
  // ------------------------------
  // Tamanho e duracao da partida
  // ------------------------------
  seaTop: 282, // Linha vertical onde a agua comeca.
  gameSeconds: 120, // 120 segundos = 2 minutos.

  // ------------------------------
  // Anzol e estados de bloqueio
  // ------------------------------
  hookX: 540, // Posicao horizontal fixa do anzol.
  hookTopPadding: 8, // Distancia minima entre o anzol e a linha da agua.
  hookBottomPadding: 54, // Distancia minima entre o anzol e o fundo do canvas.
  collectLineOffset: 28, // Altura acima da qual o peixe e recolhido.
  shockDuration: 3000, // Duracao do choque em milissegundos. 3000 = 3 segundos; 5000 = 5 segundos.

  // ------------------------------
  // Regras de pontuacao especial
  // ------------------------------
  shinyMultiplier: 4, // Peixes shiny dao x4 pontos.
  bigFishUnlockScore: 200, // Peixe grande so aparece depois destes pontos.
  bigFishUnlockSeconds: 30, // Peixe grande so aparece depois deste tempo de jogo.

  // ------------------------------
  // Fuga do peixe grande
  // ------------------------------
  bigFishEscapeByBait: {
    Sardinha: 0.98, // Isco pequeno: quase sempre escapa.
    Carapau: 0.94,
    Robalo: 0.86,
    Polvo: 0.76,
    Lula: 0.7, // Lula e um isco um pouco melhor.
    "Mel Peixe": 0.98,
    "Fredy Peixe": 0.94,
    "Peixe Andreia": 0.9,
    "Peixe Azul": 0.88,
    "Peixe Blue": 0.84,
    "Peixe Balao": 0.82,
    "Peixe Colorido": 0.78,
    "Polvo Coral": 0.72,
    Bonnie: 0.68
  },
  bigFishFinalEscapeBonus: 0.08, // Chance extra de fuga mesmo antes de recolher.
  bigFishEscapeDelayMin: 250, // Tempo minimo ate tentar largar o anzol.
  bigFishEscapeDelayMax: 700, // Tempo maximo ate tentar largar o anzol.
  bigFishFleeSpeed: 2.7, // Velocidade quando foge do anzol.
  bigFishFleeDuration: 1200, // Tempo de fuga rapida antes de voltar a nadar lento.

  // ------------------------------
  // Peixes normais
  // ------------------------------
  /*
    Campos usados nos peixes:

    name:
    - Nome que aparece no jogo e no resumo final.

    points:
    - Pontos ganhos quando o jogador recolhe esse peixe.

    color:
    - Cor do desenho temporario, usada quando nao existe imagem PNG em assets.
    - Se houver imagem, a imagem substitui este desenho.

    image:
    - Nome do ficheiro PNG dentro da pasta assets.
    - Exemplo: image: "sardinha.png"
    - Se mudares o nome do peixe, podes manter a mesma imagem ou trocar aqui.
    - Para criar um peixe novo, cria tambem um PNG em assets e escreve aqui
      o nome desse ficheiro.

    chance:
    - Peso dentro da categoria "fish".
    - So e usado depois de o jogo ja ter escolhido que vai aparecer um peixe.

    shinyChance:
    - Probabilidade real de nascer shiny.
    - 0.01 = 1%, 0.05 = 5%, 0.5 = 50%.

    width e height:
    - Tamanho do objeto no jogo.
    - Tambem controlam o tamanho da imagem PNG se existir.

    speedMin e speedMax:
    - Velocidade minima e maxima.
    - O jogo escolhe uma velocidade aleatoria entre estes dois valores.
  */
  fish: [
    {
      name: "Mel Peixe",
      points: 10,
      color: "#e77bd3",
      image: "mel_peixe.png",
      chance: 32,
      shinyChance: 0.035,
      width: 78,
      height: 30,
      speedMin: 1.4,
      speedMax: 3.3
    },
    {
      name: "Fredy Peixe",
      points: 20,
      color: "#a46442",
      image: "fredy_peixe.png",
      chance: 22,
      shinyChance: 0.025,
      width: 82,
      height: 50,
      speedMin: 1.1,
      speedMax: 2.7
    },
    {
      name: "Peixe Andreia",
      points: 30,
      color: "#71339e",
      image: "peixe_andreia.png",
      chance: 16,
      shinyChance: 0.015,
      width: 100,
      height: 44,
      speedMin: 1.2,
      speedMax: 3.1
    },
    {
      name: "Peixe Azul",
      points: 35,
      color: "#1baee8",
      image: "peixe_azul.png",
      chance: 14,
      shinyChance: 0.012,
      width: 96,
      height: 62,
      speedMin: 1.0,
      speedMax: 2.6
    },
    {
      name: "Peixe Balao",
      points: 40,
      color: "#ffe73a",
      image: "peixe_balao.png",
      chance: 11,
      shinyChance: 0.01,
      width: 82,
      height: 62,
      speedMin: 0.9,
      speedMax: 2.2
    },
    {
      name: "Peixe Blue",
      points: 45,
      color: "#16aee9",
      image: "peixe_blue.png",
      chance: 9,
      shinyChance: 0.008,
      width: 112,
      height: 64,
      speedMin: 1.0,
      speedMax: 2.4
    },
    {
      name: "Polvo Coral",
      points: 60,
      color: "#71339e",
      image: "maria_bianca.png",
      chance: 7,
      shinyChance: 0.006,
      width: 76,
      height: 82,
      speedMin: 0.9,
      speedMax: 2.2
    },
    {
      name: "Peixe Colorido",
      points: 70,
      color: "#0c83bd",
      image: "peixe_colorido.png",
      chance: 5,
      shinyChance: 0.004,
      width: 118,
      height: 84,
      speedMin: 1.0,
      speedMax: 2.5
    },
    {
      name: "Peixe Roxo",
      points: 85,
      color: "#9e28b4",
      image: "peixe_roxo.png",
      chance: 4,
      shinyChance: 0.003,
      width: 108,
      height: 96,
      speedMin: 0.9,
      speedMax: 2.0
    },
    {
      name: "Peixe Topeto",
      points: 90,
      color: "#18a51d",
      image: "peixe_topeto.png",
      chance: 3,
      shinyChance: 0.0025,
      width: 70,
      height: 72,
      speedMin: 1.2,
      speedMax: 2.8
    },
    {
      name: "Bonnie",
      points: 120,
      color: "#4356bd",
      image: "bonnie.png",
      chance: 2,
      shinyChance: 0.0015,
      width: 118,
      height: 106,
      speedMin: 0.8,
      speedMax: 1.8
    }
  ],

  // ------------------------------
  // Peixe grande especial
  // ------------------------------
  /*
    O peixe grande nao aparece por chance normal.
    Ele aparece quando:
    - ja passaram bigFishUnlockSeconds segundos;
    - o jogador tem mais de bigFishUnlockScore pontos;
    - nao existe outro peixe grande ativo no mar.

    Se for capturado ou comido pelo tubarao, pode aparecer outro mais tarde.
    Se fugir do anzol, volta para o mar e continua a ser o mesmo peixe grande.
  */
  bigFish: {
    name: "Peixe Lua",
    kind: "bigFish",
    points: 1000,
    color: "#ffe94a",
    image: "peixe_lua.png",
    chance: 7, // Ja nao controla o aparecimento; fica aqui para futura experimentacao.
    shinyChance: 0.002,
    width: 142,
    height: 148,
    speedMin: 0.5,
    speedMax: 0.9
  },

  // ------------------------------
  // Perigos e lixo
  // ------------------------------
  dangerItems: [
    {
      name: "Enguia",
      kind: "danger",
      points: -25,
      color: "#a4f20b",
      image: "enguia.png",
      chance: 14,
      // chance: peso dentro da categoria "danger".
      // Se danger for baixo em difficultyLevels, as enguias continuam raras.
      width: 118,
      height: 48,
      speedMin: 1.4,
      speedMax: 3.4
    },
    {
      name: "Enguia galatica",
      kind: "danger",
      points: -45,
      color: "#1b2b9b",
      image: "enguia_galatica.png",
      chance: 5,
      // Perigo raro: da choque como a Enguia, mas tira mais pontos.
      width: 108,
      height: 42,
      speedMin: 2.0,
      speedMax: 4.2
    }
  ],

  sharks: [
    {
      name: "Tubarao azul",
      kind: "sharkHazard",
      points: 0,
      color: "#14b8e9",
      image: "tubarao.png",
      chance: 2,
      // chance: peso dentro da categoria "danger", junto com as enguias.
      // Para o Tubarao aparecer muito, aumenta esta chance E aumenta danger
      // em difficultyLevels.
      width: 270,
      height: 178,
      speedMin: 13,
      speedMax: 17
    },
    {
      name: "Tubarao cinzento",
      kind: "sharkHazard",
      points: 0,
      color: "#7b858f",
      image: "tubarao_3.png",
      imageFacesLeft: true,
      chance: 1,
      // Variante ainda mais rara do tubarao que tambem come o isco.
      width: 230,
      height: 208,
      speedMin: 12,
      speedMax: 16
    }
  ],

  trash: [
    {
      name: "Garrafa",
      kind: "trash",
      points: -10,
      color: "#45b36a",
      image: "garrafa.png",
      imageOutline: true,
      chance: 7,
      // chance: peso dentro da categoria "trash".
      // Para aparecer mais lixo no jogo todo, aumenta trash em difficultyLevels.
      width: 72,
      height: 160,
      speedMin: 1.2,
      speedMax: 3.1
    },
    {
      name: "Bota velha",
      kind: "trash",
      points: -20,
      color: "#9b671f",
      image: "bota.png",
      chance: 5,
      // chance: peso dentro da categoria "trash".
      // Este valor decide se aparece mais Bota velha ou mais Garrafa
      // depois de o jogo ja ter escolhido a categoria trash.
      width: 64,
      height: 44,
      speedMin: 1.2,
      speedMax: 3.1
    }
  ],

  // ------------------------------
  // Dificuldade ao longo do tempo
  // ------------------------------
  /*
    Aqui esta a primeira camada de probabilidade.

    startsAt:
    - Segundo da partida em que este nivel comeca.
    - startsAt: 40 quer dizer que este nivel comeca aos 40 segundos.

    spawnDelay:
    - Tempo em milissegundos entre novos objetos.
    - Numero menor = aparecem objetos mais depressa.
    - 1000 = mais ou menos 1 objeto por segundo.

    weights:
    - Decide a categoria geral do proximo objeto.
    - fish = peixes normais.
    - trash = lixo.
    - danger = alforrecas e tubarao.

    Exemplo:
    weights: { fish: 50, trash: 30, danger: 20 }

    Isto nao precisa somar 100, mas e mais facil pensar como percentagens.
    Neste exemplo, cerca de metade dos objetos seriam peixes.
  */
  difficultyLevels: [
    {
      name: "Mar calmo",
      startsAt: 0,
      spawnDelay: 1050,
      weights: { fish: 88, trash: 9, danger: 3 }
    },
    {
      name: "Mar sujo",
      startsAt: 40,
      spawnDelay: 900,
      weights: { fish: 66, trash: 24, danger: 10 }
    },
    {
      name: "Mar perigoso",
      startsAt: 80,
      spawnDelay: 760,
      weights: { fish: 44, trash: 34, danger: 22 }
    }
  ],

  // ------------------------------
  // Lista dos ficheiros de arte que os alunos podem criar
  // ------------------------------
  assetPlaceholders: [
    "fisherman.png",
    "cliffs.png",
    "mel_peixe.png",
    "fredy_peixe.png",
    "peixe_andreia.png",
    "peixe_azul.png",
    "peixe_balao.png",
    "peixe_blue.png",
    "maria_bianca.png",
    "peixe_colorido.png",
    "peixe_roxo.png",
    "peixe_topeto.png",
    "bonnie.png",
    "peixe_lua.png",
    "enguia.png",
    "enguia_galatica.png",
    "tubarao.png",
    "tubarao_3.png",
    "garrafa.png",
    "bota.png"
  ]
};
