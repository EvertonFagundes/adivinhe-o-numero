//Geração de número aleatório
let numeroAleatorio = Math.floor(Math.random() * 100);

let vidas = parseInt(10);
const divVidas = document.getElementById("vidas");
const enviar = document.getElementById("enviar");
let arrayImages;
    
function diminuirVida(vidas) {
    return vidas - 1;
}

// Pegando quando o usuário clicar no botão de enviar
enviar.addEventListener("click", function(){
    const numero = document.getElementById("numero").value;
    const pResposta = document.getElementById("resposta");
    const numeroUser = parseInt(numero);
    if(vidas != 0){
        if(numeroUser == numeroAleatorio){
        pResposta.innerHTML = '<h2>Parabéns, você acertou!</h2>'
        }else if(numeroUser < numeroAleatorio){
            pResposta.innerHTML = '<h4>Muito baixo! Tente um número mais alto</h4>'
            vidas = diminuirVida(vidas);
            arrayImages = divVidas.children[vidas].remove();
        }else{
            pResposta.innerHTML = '<h4>Muito alto! Tente um número mais baixo</h4>'
            vidas = diminuirVida(vidas);
            arrayImages = divVidas.children[vidas].remove();
        }
    }else{
        pResposta.innerHTML = '<h1 style="color: red; text-align: center;">Você perdeu, mano!</h1>'
    }
    
});