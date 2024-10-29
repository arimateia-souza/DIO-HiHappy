const emojis = [
    "👨🏻‍🍳",
    "👨🏻‍🍳",
    "⚠️",
    "⚠️",
    "📄",
    "📄",
    "❤️",
    "❤️",
    "📚",
    "📚",
    "🎲",
    "🎲",
    "🍅",
    "🍅",
    "💻",
    "💻"
];
let pontos = document.getElementById("pontos");
let score = 0;
pontos.innerHTML = score;
let cardAbertos = [];

let embaralharCards = emojis.sort(()=>Math.random() > 0.5 ? 2: -1);

for (let i = 0; i < emojis.length; i++) {
    let caixa = document.createElement("div");
    caixa.className = "item";
    caixa.innerHTML = embaralharCards[i];
    caixa.onclick = handleClick;
    document.querySelector(".jogo").appendChild(caixa);
}
function handleClick() {
     if(cardAbertos.length < 2) {
        this.classList.add("aberto");
        cardAbertos.push(this);
    }
    if(cardAbertos.length === 2) {
        setTimeout(match, 500);
    }
}

function match() {
    if(cardAbertos[0].innerHTML === cardAbertos[1].innerHTML){
        cardAbertos[0].classList.add('match');
        cardAbertos[1].classList.add('match');
        score += 10;
        
    }else{
        cardAbertos[0].classList.remove('aberto');
        cardAbertos[1].classList.remove('aberto');
        score -= 5;
    }
    cardAbertos = [];
    if(document.querySelectorAll(".match").length === emojis.length){
        score += 50;
        alert("Parabéns, você venceu!");
    }
    if(score < 0){
        score = 0;
    }
    pontos.innerHTML = score;
}