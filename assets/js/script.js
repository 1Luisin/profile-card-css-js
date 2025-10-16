// elementos de entrada
const entradaNome = document.getElementById('name-input');
const entradaBio = document.getElementById('bio-input');
const seletorCor = document.getElementById('color-select');
const entradaBorda = document.getElementById('border-select')
const entradaEmoji = document.getElementById('avatar-select')
//elementos do cartao 
const corCartao = document.getElementById('profile-card');
const tipoBorda = document.getElementById('profile-card');

const nomeCartao = document.getElementById('card-name');
const bioCartao = document.getElementById('card-bio');
const avatarCartao = document.getElementById('card-avatar')

/*elemento de entrada
const botaoModoEscuro = document.getElementById('modo-escuro');
const botaoModoClaro = document.getElementById('modo-claro');
// elemento do html
const modoEscuro = document.getElementsByTagName('body');
const modoClaro = document.getElementsByTagName('body');

botaoModoEscuro.addEventListener("input", (evento) =>{
    modoEscuro.style.backgroundColor = botaoModoEscuro.style.backgroundColor =rgb(0, 0, 0)

})
*/

entradaNome.addEventListener("input", (evento) => {
    nomeCartao.textContent = entradaNome.value;
}) ; // pegando o valor do input e colocando no card

entradaBio.addEventListener("input", (evento) => {
    bioCartao.textContent = entradaBio.value;
    
}); // pegando o valor do input e colocando no card

seletorCor.addEventListener("change", (evento) => {
    corCartao.style.backgroundColor = seletorCor.value;
}); // alterando a cor do card

entradaBorda.addEventListener("change", (evento)=> {    
    tipoBorda.classList.remove('borda-solida','borda-tracejada','borda-pontilhada')
    tipoBorda.classList.add(entradaBorda.value); 
});

entradaEmoji.addEventListener("change", () =>{
    avatarCartao.innerText = entradaEmoji.value;
})

