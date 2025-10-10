// input elements
const entradaNome = document.getElementById('name-input')
const entradaBio = document.getElementById('bio-input');
const seletorCor = document.getElementById('color-select');


//card elements
const elementosCartao = document.getElementById('profile-card');
const nomeCartao = document.getElementById('card-name');
const bioCartao = document.getElementById('card-bio');


entradaNome.addEventListener("input", (evento) => {
    nomeCartao.textContent = entradaNome.value;
}) ; // pegando o valor do input e colocando no card

entradaBio.addEventListener("input", (evento) => {
    bioCartao.textContent = entradaBio.value;
    
}); // pegando o valor do input e colocando no card

selectColor.addEventListener("change", (evento) => {
    elementosCartao.style.backgroundColor = selectColor.value;
}); // alterando a cor do card
