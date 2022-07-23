const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "A sua curiosidade poderá ser sua ruina.",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Você é tipo aquelas pessoa que acreditam em signo?",
    "Minha resposta é não.",
    "Não tenho como prever o que ainda será escrito.",
    "Veio de longe, para perguntar o que já sabe?",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "Logo logo descobrirá.",
    "A meu ver, sim.",
    "Hilário... Mas sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não sou pago o suficiente para isso, vá embora!",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "Pergunta tola.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Tem coisas que é melhor não saber.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."
];
const campoPergunta = document.querySelector("#campo-pergunta");
const campoResposta = document.querySelector("#campo-resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const button = document.querySelector("#button");

let perguntaAnterior;

button.addEventListener("click", () =>{
    if(inputPergunta.value === ""){
        alert("Primeiro me diga sua dúvida!");
        return;
    }  
    
    if(perguntaAnterior === inputPergunta.value){
        alert("Já me fez essa pergunta!");
        return;
    }

    perguntaAnterior = inputPergunta.value;

    button.setAttribute("disabled", true);

    const random = Math.floor(Math.random() * respostas.length);

    campoPergunta.innerHTML = inputPergunta.value;
    campoResposta.innerHTML = respostas[random];

    campo.style.opacity = 1;

    setTimeout( () => {
        campo.style.opacity = 0;

        button.removeAttribute("disabled");
    }, 3000);

});

