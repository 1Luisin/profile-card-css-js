// input elements
const inputName = document.getElementById('name-input')
const selectColor = document.getElementById('color-select');

//card elements
const elementosCard = document.getElementById('profile-card');
const nameCard = document.getElementById('card-name');
const bioCard = document.getElementById('card-bio');
const bioInput = document.getElementById('bio-input');


inputName.addEventListener("input", (evento) => {
    nameCard.textContent = inputName.value;
}) ; // pegando o valor do input e colocando no card

bioInput.addEventListener("input", (evento) => {
    bioCard.textContent = bioInput.value;
    
}); // pegando o valor do input e colocando no card

selectColor.addEventListener("change", (evento) => {
    elementosCard.style.backgroundColor = selectColor.value;
}); // alterando a cor do card
