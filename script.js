const inputName = document.getElementById('name-input')
const selectColor = document.getElementById('color-select');
const selectBorder = document.getElementById('border-select');
const selectAvatar= document.getElementById('avatar-select');

const cardProfile = document.getElementById('profile-card');
const avatarCard = document.getElementById('card-avatar');
const nameCard = document.getElementById('card-name');
const bioCard = document.getElementById('card-bio');

inputName.addEventListener("input", (evento) => {
    nameCard.textContent = inputName.value;
}) ;