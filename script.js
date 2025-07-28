  const frases = [
  "Acredite em você e tudo será possível.",
  "Cada passo te aproxima do seu objetivo.",
  "Você é mais forte do que imagina.",
  "Não desista, o sucesso pode estar na próxima tentativa.",
  "Transforme obstáculos em degraus para o sucesso.",
  "O fracasso é uma oportunidade para recomeçar com mais inteligência.",
  "A jornada pode ser difícil, mas a vitória vale a pena.",
  "Seja persistente. Grandes conquistas exigem tempo.",
  "A ação é a chave fundamental para todo sucesso.",
  "Você nunca saberá até tentar.",
  "Não importa o quão devagar você vá, desde que não pare.",
  "O esforço de hoje é o sucesso de amanhã.",
  "Tenha coragem de seguir seu coração e sua intuição.",
  "A sua única limitação é você mesmo.",
  "O medo é só um degrau para a coragem.",
  "A vitória pertence aos que persistem.",
  "A disciplina é o caminho mais curto para o sucesso.",
  "Nunca é tarde para ser quem você poderia ter sido.",
  "Trabalhe em silêncio e deixe o sucesso fazer barulho.",
  "Seja a energia que você quer atrair.",
  "Você pode mais do que pensa.",
  "Comece onde está. Use o que tem. Faça o que puder.",
  "Vença a si mesmo e será invencível.",
  "Não espere por oportunidades. Crie-as.",
  "A motivação te impulsiona, o hábito te leva além.",
  "Errar faz parte. Aprender é escolha.",
  "Confie no processo.",
  "Continue, mesmo que ninguém esteja olhando.",
  "Você é capaz de realizar coisas incríveis.",
  "Não sonhe sua vida. Viva seus sonhos.",
  "A diferença entre quem vence e quem desiste é a persistência.",
  "Acredite, lute, conquiste.",
  "Sua atitude determina sua direção.",
  "O impossível é apenas uma opinião.",
  "Grandes coisas nunca vêm da zona de conforto.",
  "Você só precisa acreditar para começar.",
  "Faça com amor ou nem faça.",
  "A mente é poderosa: alimente-a com pensamentos positivos.",
  "Sonhos não têm pernas, mas você tem.",
  "Pare de se comparar. Seu tempo vai chegar.",
  "Respire fundo. Confie. Vá em frente.",
  "A vida recompensa os corajosos.",
  "Não é sobre ter tempo, é sobre fazer tempo.",
  "Tudo começa com um simples passo.",
  "As dificuldades são o tempero da vitória.",
  "Você está mais perto do que imagina.",
  "Levante-se e faça acontecer.",
  "Seja constante, mesmo nos dias difíceis.",
  "Lute por aquilo que você acredita.",
  "Tenha fé no processo, e força para continuar."
];
 
    function frasesAleatoria() {
      const mensagem = document.getElementById("mensagem");
      
      
    // Math.random() gera um número decimal aleatório entre 0 e 1 (ex: 0.732)
    // Multiplica pelo tamanho do array (frases.length), por exemplo: 0.732 * 5 = 3.66
    // Math.floor() arredonda para baixo, virando 3.
      const indiceAleatorio = Math.floor(Math.random() * frases.length);

      // pegando o id ul
      const ul = document.getElementById("frasesMotivacionais");
      // criando elemento li
      const li = document.createElement("li");
      // adicionando li dentro do ul pai
      ul.appendChild(li);
      // exibindo as frases dentro do li
        li.textContent = frases[indiceAleatorio];
      // Exibe a frase sorteada
      // mensagem.textContent = frases[indiceAleatorio];
    }


    

