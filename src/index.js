import cipher from './cipher.js';

const btnCifrar = document.getElementById("btnCodificar");
btnCifrar.addEventListener("click",cifrar);

function cifrar(event) {
    event.preventDefault()

    const mensagemCifra = document.querySelector("#codifica").value;
const offset = document.querySelector("#desloc").value;
let mensagem = cipher.encode(parseInt(offset), mensagemCifra);
document.querySelector("#mensagemCodificada").innerHTML = mensagem;
//querySelector busca/seleciona o conteudo do id ou class, neste caso, o codifica
//colocando "#" você busca pelo ID 
}

const btnDecifrar = document.getElementById("btnDecodificar");
btnDecifrar.addEventListener("click",decifrar);

function decifrar(event) {
    event.preventDefault()
    const mensagemDecifra = document.querySelector("#codifica").value;
const offset = document.querySelector("#desloc").value;
let mensagem = cipher.decode(parseInt(offset), mensagemDecifra);
console.log("mensagem", mensagem)
document.querySelector("#mensagemCodificada").innerHTML = mensagem;
//querySelector busca/seleciona o conteudo do id ou class, neste caso, o codifica
}




