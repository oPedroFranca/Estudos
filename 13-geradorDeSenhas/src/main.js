import './assets/css/style.css';

let numberCaracters = document.getElementById('numberCaracters');
let addNumber = document.getElementById('addNumber');
let lowerCase = document.getElementById('lowerCase');
let upperCase = document.getElementById('upperCase');
let symbols = document.getElementById('symbols');
const buttonSubmit = document.querySelector('.geraSenha')

let resposta = document.querySelector('.resposta');

function geraSenha () {
    const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-~/!@#$*%'
    let senhaGerada = [];

    for(let i = 1; i <= numberCaracters.value; i++) {
        if(addNumber.checked)senhaGerada.push(Math.floor(Math.random() * (10 - 0) + 0));
        if(upperCase.checked)senhaGerada.push(caracters[Math.floor(Math.random() * (26 - 0) + 0)]);
        if(lowerCase.checked)senhaGerada.push(caracters[Math.floor(Math.random() * (52 - 26) + 26)]);
        if(symbols.checked)senhaGerada.push(caracters[Math.floor(Math.random() * (61 - 52) + 52)]); 
    };
 
    resposta.innerHTML = senhaGerada.join('').slice(0, numberCaracters.value);
    if (senhaGerada.length == 0) resposta.innerHTML = 'Nenhuma opção marcada ou quantidade de caracteres não inserido';
}

const event = document.addEventListener('click', (ev) => {
    if (ev.target == buttonSubmit) geraSenha();
});