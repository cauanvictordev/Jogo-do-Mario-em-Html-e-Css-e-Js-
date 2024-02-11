const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const botaoReiniciar = document.getElementById('botaoReiniciar');

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

const reiniciarJogo = () => {
    // Reinicie a página
    location.reload();
};

const verificarColisao = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Remova o loop para parar de verificar a colisão
        clearInterval(loop);

        // Pare a animação do Pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Pare a animação do Mario
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        // Atualize a imagem do Mario
        mario.src = "mario morreu.jpg";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        // Exiba o botão de reinício
        botaoReiniciar.style.display = 'block';
    }
};

const iniciarLoop = () => {
    return setInterval(verificarColisao, 10);
};

document.addEventListener('keydown', jump);

// Iniciar o loop inicial
const loop = iniciarLoop();

// Adicionar evento de clique ao botão de reinício
botaoReiniciar.addEventListener('click', reiniciarJogo);
