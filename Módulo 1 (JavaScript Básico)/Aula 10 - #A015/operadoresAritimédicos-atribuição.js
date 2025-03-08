/* Operadores Aritimédicos :

+ = Adição / Concatenação (Unir dois valores)
- = Subtração 
/ = Divisão
* = Multiplicação
** = Potenciação (Número elevado a algum número)
% = Resto da Divisão (10/3 sobra 1, o resultado é 1)

*/
//--------------------------------------------------------------------------------------------------------------------
/* Ordem de Prioridade no JavaScript:

()  >  **  > *  > /  > %  > +  > -

*/
//--------------------------------------------------------------------------------------------------------------------
/*
Incremento = ++ (Número mais 1)
Decremento = -- (Número menos 1)
*/
//--------------------------------------------------------------------------------------------------------------------

const num1 = 10;
const num2 = 5;
console.log(num1 - num2); // Aqui estamos somando as variáveis.


const n1 = "10"; 
const n2 = 5;
console.log(n1 + n2); // Aqui estamos concatenando as variáveis.


const numero1 = 2;
const numero2 = 10;
console.log(numero1 ** numero2); // Aqui estamos elevando as variáveis.


const numer1 = 10;
const numer2 = 3;
console.log(numer1 % numer2); // Aqui estamos vendo o resto da divisão entre as variáveis.


const number1 = 5;
const number2 = 2;
const number3 = 10;
console.log(number1 + number2 * number3); // Assim como na matemática, no JavaScript os números também tem precedência, algumas contas serão feitas primera que outras, assim como na de cima a multiplicação tem prioridade. 

console.log((number1 + number2) * number3) //Mas também na matemática as contas dentro dos parentêses tem prioridade, e o JavaScript não é diferente.

let contador = 10
console.log(contador++); //Aqui fez apenas a soma, mas não mostrou
console.log(contador); //Aqui sim mostra o resultado do encremento do primeiro console.log
console.log(++contador); //Aqui já soma antes de mostrar o resultado (Já somou com o outro console.log(contador++) por isso dá 12)

let contador2 = 10
console.log(--contador2); // Aqui está diminuindo 1

let numeroString = parseFloat('2'); // Transformou uma String em Number através do parseFloat
let stringParaNumber = Number('10'); // Outra maneira de transformar uma Sting em Number. Usando apenas um Number antes.
let numeroArredondado = parseInt(4.9); // Arredondou o número. (Independente do valor após a segunda casa decimal vai dar sempre o número da primeira casa decimal. 4.1= 4 / 4.9= 4)
let numeroDecimal = parseFloat(5.25); // Leu o número decimal
console.log (numeroString, stringParaNumber, numeroArredondado, numeroDecimal);

/* 
- parseInt (Inteiro) -> Transforma Strings em Numbers, e deixa números quebrados como 5.2 em números inteiros.
- parseFloat (Decimais) -> Lê os números como decimais
*/

