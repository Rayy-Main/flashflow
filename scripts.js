let indiceAtual = 0;
let lado = "question";
const cardElementQ = document.createElement("h1");
const cardElementA = document.createElement("p");
const insertCard = document.getElementById("flip");
const button = document.getElementById('button');

//arrays com as perguntas
const flashcards = [
  {
    question: "O que é JavaScript?",
    answer: "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web."
  },
  {
    question: "O que são funções de callback em JavaScript?",
    answer: "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação."
  },
  {
    question: "O que é o this em JavaScript?",
    answer: "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada."
  },
  {
    question: "O que é hoisting em JavaScript?",
    answer: 'Hoisting é o comportamento em que declarações de variáveis e funções são "movidas" para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código.'
  },
  {
    question: "O que são tipos primitivos em JavaScript?",
    answer: "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos."
  },
];

//criando o card que vira
function initCard() {
  //criando o elemento principal do card
  cardElementQ.classList.add("question");
  cardElementA.classList.add("answer");

  //adicionando o p dentro da div
  insertCard.appendChild(cardElementQ);
  insertCard.appendChild(cardElementA);

}
initCard();

//indica o card atual
function render() {
  let cardAtual = flashcards[indiceAtual];

  if (lado === "question") {
    cardElementQ.textContent = cardAtual.question;
    cardElementQ.style.display = "block"
    insertCard.style.background = "#ffffff"
    cardElementA.style.display = "none";
  } else if (lado === "answer") {
    cardElementA.textContent = cardAtual.answer;
    cardElementA.style.display = "block"
    insertCard.style.background = "#e2e2e2";
    cardElementQ.style.display = "none";
  }
};
render();

//muda o card de mensasem para question e question para mensagem.
insertCard.addEventListener('click', () => {
    setTimeout(() =>{
      lado = (lado == "question") ? "answer" : "question";
      render();
  }, 100);
});


//troca o card com o click
button.addEventListener('click', () => {
  // serve para não acessar o indice errado
  if (indiceAtual < flashcards.length - 1) {
    indiceAtual++;
  } else if (indiceAtual == flashcards.length - 1) {
    indiceAtual = 0;
  }
  lado = (lado == "answer") ? "question" : "question";
  render();
  updateStats(); 
});

//alterando o estado
function updateStats() {
  document.getElementById("stats").textContent = `Card ${indiceAtual + 1} de 5`
}
updateStats();

