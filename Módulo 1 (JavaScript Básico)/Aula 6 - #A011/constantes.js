const primeiroNumero = 5; // 
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

/* 
Uma constante a gente não consegue mudar o valor dela seguindo o código. Se você unir uma String com Number vai concatenar os dois. O exemplo abaixo...
*/

const primeiroNumeroo = 5;  // Number
const segundoNumeroo = "10"; // String
console.log(primeiroNumeroo + segundoNumeroo) //Vai concatenar um Number com uma String dando 510  

/* 
As vezes as variáveis não vão estar claras, por que podem vir de um banco de dados e outras coisas. Então para você descobrir qual o "valor" da variável use no console.log (typeof VARIÁVEL) 
*/

const teste1 = 5;  
const teste2 = "10"; 
console.log(typeof teste1);// Vai dar como um Number
console.log(typeof teste2);// Vai dar como uma String