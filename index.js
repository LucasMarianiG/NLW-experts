const perguntas = [
    {
      pergunta: "Quantos tipos de Pokémon existem atualmente?",
      respostas: [
        "18 tipos",
        "20 tipos",
        "22 tipos",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo do Pokémon Pikachu?",
      respostas: [
        "Elétrico",
        "Água",
        "Fogo",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é conhecido como o 'Mestre Pokémon'?",
      respostas: [
        "Ash Ketchum",
        "Gary Oak",
        "Professor Carvalho",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o Pokémon inicial da região de Sinnoh?",
      respostas: [
        "Bulbasaur",
        "Chimchar",
        "Froakie",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o Pokémon lendário que representa o espaço?",
      respostas: [
        "Dialga",
        "Palkia",
        "Giratina",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo do Pokémon Charizard?",
      respostas: [
        "Fogo",
        "Dragão",
        "Voador",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o primeiro Pokémon na Pokédex nacional?",
      respostas: [
        "Bulbasaur",
        "Pikachu",
        "Charmander",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o líder do ginásio da cidade de Cerulean?",
      respostas: [
        "Misty",
        "Brock",
        "Lt. Surge",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o Pokémon que evolui para Machamp?",
      respostas: [
        "Machoke",
        "Machop",
        "Machirite",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do trio de cães lendários em Johto?",
      respostas: [
        "Articuno, Zapdos, Moltres",
        "Raikou, Entei, Suicune",
        "Regice, Regirock, Registeel",
      ],
      correta: 1
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //repetição
  for(const item of perguntas) {
    const quizitem = template.content.cloneNode(true)
    quizitem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizitem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' +perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizitem.querySelector('dl').appendChild(dt)
  }
  
  quizitem.querySelector('dl dt').remove()
  
    //coloca as perguntas na tela
    quiz.appendChild(quizitem)
    
  }