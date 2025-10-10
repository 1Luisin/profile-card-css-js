// input elements
const inputName = document.getElementById('name-input')
const selectColor = document.getElementById('color-select');
const selectBorder = document.getElementById('border-select');
const selectAvatar= document.getElementById('avatar-select');

//card elements
const elementosCard = document.getElementById('profile-card');
const avatarCartao = document.get
const nameCard = document.getElementById('card-name');
const bioCard = document.getElementById('card-bio');
const bioInput = document.getElementById('bio-input');
const displayCard = document.getElementsByClassName('card-display borda-solida');

inputName.addEventListener("input", (evento) => {
    nameCard.textContent = inputName.value;
}) ; // pegando o valor do input e colocando no card

bioInput.addEventListener("input", (evento) => {
    bioCard.textContent = bioInput.value;
    
}); // pegando o valor do input e colocando no card

selectColor.addEventListener("change", (evento) => {
    elementosCard.style.backgroundColor = selectColor.value;
}); // alterando a cor do card

selectBorder.addEventListener("change", (evento) => {
    elementosCard.style.border = selectBorder.value;
}); // alterando a borda do card

selectAvatar.addEventListener("change", (evento) => {
    avatarCartao.src = selectAvatar.value;
}); // alterando a imagem do avatar