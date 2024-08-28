// Crie uma variável para armazenar seu nome completo


function exibir() {
    var nome = document.getElementById("nome").value
    alert(`O seu nome completo é ${nome}.`)
}


// Crie uma variável para armazenar se você gosta de programar (true ou false)

const sim = true;
const nao = false;
console.log(sim);
console.log(nao);


// Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável

//2 + (3 x 4) - 5

console.log(2+(3*4)-5);

//2 x (3 + 4) - 5 ÷ 5
console.log(2*(3+4) -5 / 5);

//{[(10 - 4) / 2] * 3} + 1
console.log((((10-4)/2)*3)+1);

//3 * 4 / 2 + 1 - 5
console.log(((3*4)/2)+1-5);

//Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas

var tema = "casa";
var descricao = "muito engraçada";
var teto = "não tinha teto";
var nada = "não tinha nada";
var parede = "não tinha parede";
var pinico = "pinico não tinha ali";
var esmero = "era feito com muito esmero";
var rua = "rua dos Bobos";
var numero = "número zero";


console.log(`
    A Casa - Vinícius de Moraes
Era uma ${tema}
${descricao}
${teto}
${nada}
Ninguém podia entrar nela, não
Porque na casa ${parede}
Ninguém podia fazer pipi
Porque ${pinico}
Mas ${esmero}
Na ${rua}
${numero}`);



//Crie um programa que exiba a data atual formatada utilizando interpolação

//const dia = 26;
//const mes = 8;
//const ano = 2024;

//console.log(`A data atual é: ${dia}/${mes}/${ano}`);
//Inicialmente fiz do modo que está acima, mas posteriormente pesquisei um modo em que a data atualize automaticamente, como segue abaixo.

const data = new Date()
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2,'0');
const ano = data.getFullYear();
const dataAtual = `${dia}/${mes}/${ano}`;
console.log(dataAtual);



//Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação

var base= Number (window.prompt ('Digite em centímetros o valor da base do retângulo:'))
var altura = Number(window.prompt ('Digite em centímetros o valor da altura do retângulo:'))
var area = base*altura
window.alert(`Um retângulo com base ${base}cm e altura ${altura}cm possui uma área igual a ${area} cm\u00B2`)

//Crie uma condicional para verificar se o caractere é uma vogal

let vogal = 'b'; 

let letra = vogal.toLowerCase();

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    console.log(`A letra ${vogal}, é uma vogal.`);
} else {
    console.log(`A letra ${vogal}, não é uma vogal.`);
}


//Crie uma condicional para verificar se o número é par ou é impar

function verificar() {
    var num = document.getElementById("number").value
    var number = Number(num)

    if(number % 2 == 0) {
        alert(`O número ${number} é par!`)
    }
    else{
        alert(`O número ${number} é ímpar!`)
    }
    
}


//Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:
function verificar2() {
    var ladoA = document.getElementById("lado-a").value;
    var ladoB = document.getElementById("lado-b").value;
    var ladoC = document.getElementById("lado-c").value;
    
    var a = Number(ladoA);
    var b = Number(ladoB);
    var c = Number(ladoC);
    
    //&& operador lógico - && retorna verdadeiro caso ambos operando sejam verdadeiros, caso contrário, retorna falso.
    if (a === b && b === c) {
        alert("O triângulo é Equilátero.");
    } else if (a === b || a === c || b === c) {
        alert("O triângulo é Isósceles.");
    } else {
        alert("O triângulo é Escaleno.");
    }
}


//Calcule a média do aluno e verifique se ele foi aprovado

function verificar3(){
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;

    var n1 = Number(nota1)
    var n2 = Number(nota2)
    var media = (n1+n2)/2
    var notaDeCorte=7
    var notaMinima=5

    if (media>=notaDeCorte ){
        alert("O Aluno está aprovado.");
    }
    else if (media < notaDeCorte && media >= notaMinima){
        alert("O Aluno está em recuperação.");
    }
    else {
        alert("O Aluno está reprovado.")
    } 
} 



// Crie uma variável para armazenar um array com seus hobbies
var array = ["Viajar", "Assistir filmes e séries", "Ouvir podcasts", "Aproveitar com a fámilia"];
console.log(array);


/* 
Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.
*/

var arr = ["Morango", "Uva", "Banana", "Manga", "Abacaxi"];

console.log(arr[1]);

arr[5] = "Pêra"
arr[6] = "Melância"

console.log(arr)



/* 
Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.
*/
var verdadeiro = true;
var falso = false;
console.log(typeof verdadeiro)

/* Crie um programa que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */

function verificar4() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operador = document.getElementById("operador").value;

    var numero1 = Number(num1);
    var numero2 = Number(num2);

    switch (operador) {
        case '+':
            alert(numero1 + numero2);
            break;
        case '-':
            alert(numero1 - numero2);
            break;
        case '*':
            alert(numero1 * numero2);
            break;
        case '/':
            alert(numero1 / numero2);
            break;
        default:
            alert('Operador inválido');
    }
}