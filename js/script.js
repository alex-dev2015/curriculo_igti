var title = document.querySelector('h1');
title.textContent = 'Alex do Nascimento de Sousa';

//somatório com while

var numeroAtual = 1;
var somatorio = 0;

while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}

somatorio = 0;
for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}

console.log('A soma total é ' + somatorio);
