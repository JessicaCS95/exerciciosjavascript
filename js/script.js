// Crie uma variável para armazenar seu nome completo


function exibir() {
    const nome = document.getElementById("nome").value;
    alert(`O seu nome completo é ${nome}.`);
}


// Crie uma variável para armazenar se você gosta de programar (true ou false)


function verificarResposta() {
  const resposta = document.getElementById("gostaDeProgramar").value.toUpperCase();
  
  if (resposta === "SIM") {
    gostaDeProgramar = true; 
        alert(`${gostaDeProgramar}, você gosta de programar!`);
  } else if (resposta === "NAO") {
    gostaDeProgramar = false; 
    alert(`${gostaDeProgramar}, você não gosta de programar!`);
  } else {
    alert ("Por favor, digite SIM ou NAO.");
  }
}


// Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável

function expressao1() {
    const expressao1 = document.getElementById("expressao1").value;
    const resultado1 = 2+(3*4)-5;
    alert(`O resultado da expressão é ${resultado1}.`);
}

function expressao2() {
    const expressao2 = document.getElementById("expressao2").value;
    const resultado2 = (2*(3+4) -5 / 5);
    alert(`O resultado da expressão é ${resultado2}.`);
}

function expressao3() {
    const expressao3 = document.getElementById("expressao3").value;
    const resultado3 = ((((10-4)/2)*3)+1);
    alert(`O resultado da expressão é ${resultado3}.`);
}

function expressao4() {
    const expressao4 = document.getElementById("expressao4").value;
    const resultado4 = (((3*4)/2)+1-5);
    alert(`O resultado da expressão é ${resultado4}.`);
}


//Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas

const tema = "casa";
const descricao = "muito engraçada";
const teto = "Não tinha teto";
const nada = "não tinha nada";
const parede = "não tinha parede";
const pinico = "pinico não tinha ali";
const esmero = "era feito com muito esmero";
const rua = "rua dos Bobos";
const numero = "número zero";


const poema = "A Casa - Vinícius de Moraes"
const poema2 = `Era uma ${tema} ${descricao}`
const poema3 = `${teto}, ${nada}`
const poema4 = "Ninguém podia entrar nela, não"
const poema5 = `Porque na casa ${parede}`
const poema6 = "Ninguém podia fazer pipi"
const poema7 = `Porque ${pinico}`
const poema8 = `Mas ${esmero}`
const poema9 = `Na ${rua},
${numero}`;

document.getElementById("poema").innerHTML = poema;
document.getElementById("poema2").innerHTML = poema2;
document.getElementById("poema3").innerHTML = poema3;
document.getElementById("poema4").innerHTML = poema4;
document.getElementById("poema5").innerHTML = poema5;
document.getElementById("poema6").innerHTML = poema6;
document.getElementById("poema7").innerHTML = poema7;
document.getElementById("poema8").innerHTML = poema8;
document.getElementById("poema9").innerHTML = poema9;



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

document.getElementById("dataAtual").innerHTML = dataAtual;


//Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação


function calcular() {
    const base = document.getElementById("baseretangulo").value;
    const altura = document.getElementById("alturaretangulo").value;
    const area = base*altura
        alert(`Um retângulo com base ${base}cm e altura ${altura}cm possui uma área igual a ${area} cm\u00B2`);
    }


//Crie uma condicional para verificar se o caractere é uma vogal

function verificar5() {
    const vogal = document.getElementById("vogal").value.toLowerCase();

if (vogal === 'a' || vogal === 'e' || vogal === 'i' || vogal === 'o' || vogal === 'u') {
    alert(`A letra ${vogal.toUpperCase()}, é uma vogal.`);
} else {
    alert(`A letra ${vogal.toUpperCase()}, não é uma vogal.`);
}
}

//Crie uma condicional para verificar se o número é par ou é impar

function verificar() {
    const num = document.getElementById("number").value
    const number = Number(num)

    if(number % 2 == 0) {
        alert(`O número ${number} é par!`)
    }
    else{
        alert(`O número ${number} é ímpar!`)
    }
    
}


//Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:
function verificar2() {
    const ladoA = document.getElementById("lado-a").value;
    const ladoB = document.getElementById("lado-b").value;
    const ladoC = document.getElementById("lado-c").value;
    
    const a = Number(ladoA);
    const b = Number(ladoB);
    const c = Number(ladoC);
    
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
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;

    const n1 = Number(nota1)
    const n2 = Number(nota2)
    const media = (n1+n2)/2
    const notaDeCorte=7
    const notaMinima=5

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
const array = ["Viajar", " assistir filmes e séries", " ouvir podcasts", " aproveitar com a fámilia", " conhecer restaurantes"];
console.log(array);
document.getElementById("hobbies").innerHTML = array;


/* 
Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.
*/

const arr = ["Morango", " Uva", " Banana", " Manga", " Abacaxi"];
document.getElementById("5frutas").innerHTML = arr;

console.log(arr[1]);
document.getElementById("fruta2").innerHTML = arr[1];

arr[5] = " Pêra"
arr[6] = " Melância"

console.log(arr)
document.getElementById("+2frutas").innerHTML = arr;

console.log(arr.shift())
document.getElementById("-1fruta").innerHTML = arr;


/* 
Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.
*/
const verdadeiro = true;
const falso = false;

        
function verificaVerdadeiro() {
alert(`O tipo da variável "verdadeiro" é: ${typeof verdadeiro}`);
}

        
function verificaFalso() {
alert(`O tipo da variável "falso" é: ${typeof falso}`);
}

/* Crie um programa que simule uma calculadora simples. O usuário deve inserir dois números e um operador (+, -, *, /). Utilize a estrutura switch para realizar a operação correspondente e exibir o resultado. */

function verificar4() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operador = document.getElementById("operador").value;

    const numero1 = Number(num1);
    const numero2 = Number(num2);

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

