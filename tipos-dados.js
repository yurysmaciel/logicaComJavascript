/* Tipo texto - string
"Isso é um texto";
"Yury";
"123";
"Isso também é um texto mesmo utilizando aspas simples";
`Usar a crase o JS entende como string`;

Tipo number
100; //inteiros- int
35.9; // decimais - float

Tipo booleano - boolean - true / false
true;
false;

Tipo indefinido - undefined
undefined;

Tipo nulo - null
null;

padrão de escrita chamado CamelCase
digitarColocandoLetraMaiusculaNoComeçoDasPalavras
*/

// variavel é utilizado para guardar dados que serão armazenados na memoria RAM
var nome = "yury"; //não usamos mais
let idade = 20; //usamos
const profissao = "FullStack"; //usamos

console.log(nome);

nome = "Soares";
console.log(nome);

let temCarro = true;

const meuNulo = null;

console.log(meuNulo);

//crie 3 variaveis da sua escolha com let

let nomeAluno = "Yury";
let sobreNome = "Soares";
let curso = "FullStack";

console.log(nomeAluno);
console.log(sobreNome);
console.log(curso);

nomeAluno = "Soares";
sobreNome = "Yury";
curso = "FrontEnd";

console.log(nomeAluno);
console.log(sobreNome);
console.log(curso);

//crie 3 variaveis da sua escolha com const

const cargo = "Programador FrontEnd";
const salario = "R$3500,00";
const cargaHorariaSemanal = "45H";

console.log(cargo);
console.log(salario);
console.log(cargaHorariaSemanal);

//operações matematica

let number1 = 20;
let number2 = 10;

let soma = number1 + number2;

console.log(soma);

soma = 50;

console.log(soma);

number2 = 5;

let resultSubtracao = soma - number2;

console.log(resultSubtracao);

let result3 = 30 * 3;

console.log(result3);

let result4 = 50 / 10;

console.log(result4);

//mod - resto da divisao - %

let result5 = 10 % 3;

console.log(result5);

//verificando no console os tipos de dados - typeof

console.log(typeof idade);

//Faça as 4 operações matematicas com dois numeros de sua escolha e apresenteos
// resultados no console. Depois verifique os tipos de dados
// de cada resultado utilizando o typeof

let numero1 = 25;
let numero2 = 10;

let soma1 = numero1 + numero2;
console.log(soma1);

let subtracao = numero1 - numero2;
console.log(subtracao);

numero2 = 5;

let divisao = numero1 / numero2;
console.log(divisao);

let multiplicacao = numero1 * numero2;
console.log(multiplicacao);

console.log(typeof soma1);
console.log(typeof subtracao);
console.log(typeof divisao);
console.log(typeof multiplicacao);
