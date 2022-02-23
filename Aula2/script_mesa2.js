let jogador;

let maquina;

jogador = prompt("Escolha uma opção: 1 Pedra - 2 Papel - 3 Tesoura");

maquina = parseInt(Math.random()*3+1);

if (maquina == 1 && jogador == 1) {
    alert ("Joguem Novamente!")
}

if (maquina == 1 && jogador == 2) {
    alert ("Papel ganha da Pedra - Parabéns você ganhou!")
}

if (maquina == 1 && jogador == 3) {
    alert("Pedra ganha da Tesoura - A Casa venceu!")
}


if (maquina == 2 && jogador == 1) {
    alert("Papel ganha da Pedra - A Casa venceu!")
}

if (maquina == 2 && jogador == 2) {
    alert ("Joguem Novamente!")
}

if (maquina == 2 && jogador == 3) {
    alert("Tesoura ganha do Papel - A Casa venceu!")
}


if (maquina == 3 && jogador == 1) {
    alert ("Pedra ganha da Tesoura - Parabéns você ganhou!")
}

if (maquina == 3 && jogador == 2) {
    alert("Tesoura ganha do Papel - A Casa venceu!")
}

if (maquina == 3 && jogador == 3) {
    alert ("Joguem Novamente!")
}


