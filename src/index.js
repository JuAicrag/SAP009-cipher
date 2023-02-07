import cipher from './cipher.js';

const btnCifrar = document.querySelector("#btnCodificar")
btnCifrar.addEventListener("click",cifrar);

function cifrar() {
     console.log("cifrar");
    const mensagemCifra = document.querySelector("#codifica").value;
const offset = document.querySelector("#desloc").value;
let mensagem = cipher.encode(mensagemCifra, parseInt(offset));
document.querySelector("#mensagemCodificada").innerText = mensagem;
//querySelector busca/seleciona o conteudo do id ou class, neste caso, o codifica
//colocando "#" você busca pelo ID 
}

const botaoCifrar = () => {
    document.querySelector("#btnCodificar");
botaoCifrar.addEventListener("click",function(event) {
event.preventDefault();
})
}

function decifrar() {
    console.log("decifrar");
    const mensagemDecifra = document.querySelector("#decodifica").value;
const offset = document.querySelector("#desloc").value;
let mensagem = cipher.encode(mensagemDecifra, parseInt(offset));
document.querySelector("#mensagemCodificada").innerText = mensagem;
//querySelector busca/seleciona o conteudo do id ou class, neste caso, o codifica
}

