// Criar uma função que exibe "Olá, mundo!" no console.
function exibirOla() {
    console.log('Olá mundo')
}
exibirOla();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
    console.log('Olá, ' + nome)
}
exibirOlaNome('Tati');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro)

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3)/ 3;
}
let media = calcularMedia(4,7,10);
console.log(media);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(n1, n2) {
    return n1 > n2 ? n1 : n2;
}
let maiorNumero = encontrarMaior(5, 6);
console.log(maiorNumero)

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function exibirMultiplicação(numero) {
    return numero * numero;
}
let multi = exibirMultiplicação(43);
console.log(multi);

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
//1 - criar função 
//2 - Adicionar parâmetro de altura e peso.
//3 - Criar um jeito da função receber valores nos parâmetros.
//4 - Definir que altura é metros e peso em quilogramas.

function calculaImc(altura, peso) {
    const imc = peso / (altura * altura);
    return imc 
}

const result = calculaImc(1.77, 85);
console.log(result);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
//1- cria uma função
//2- adiciona parâmetro
//3- criar um jeito de converter em reais (dólar igual a R$4,80.)
//4- Adicionar validação se digitar 0 ou numero negativo
function convertDolar(reais) {
    const dolar = 4.80;
    const convert = (reais * dolar);
    if (reais <= 0 ) {
        return 1 * dolar;
    } 
    return convert
}

convertDolar(2)
console.log(convertDolar(2))

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
//1- criar função
//2- adicionar dois parâmetros (altura e largura)
//3- criar calculo
function calcularArea(altura, largura) {
    const valorDaArea = altura * largura;
    return valorDaArea;
}

calcularArea(10, 20)
console.log(calcularArea(0, 0))


// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.




// Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];
// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
linguagensDeProgramacao.push('Java','Ruby','GoLang');
// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNome = ['Tati', 'Vic', 'Ale'];
listaNome[0];
// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let listaNome = ['Tati', 'Vic', 'Ale'];
listaNome[1];
// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaNome = ['Tati', 'Vic', 'Ale'];
listaNome[2]; //ou listaNome[listaNome.length - 1]