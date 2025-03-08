/*
João Gabriel Ferreira tem 21 anos, pesa 85 kg,
tem 1.80 e seu IMC é de 26.234567901234566.
João Gabriel nasceu em 2002
*/

const nome = ('João Gabriel');
const sobrenome = ('Ferreira');
const idade = 21;
const peso = 85;
const alturaEmM = 1.80;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2023 - idade;

console.log(nome + ' ' + sobrenome + " tem " + idade + " anos, pesa " + peso + "kg."); //Outra forma de escrever. Aqui é tudo considerado uma String.

console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}.`); //Isso se chama Template Strings, é uma String que você pode por variáveis dentro dela. É tudo texto para o Javascript, então para ele entender que é uma expressão JavaScript tem que por o nome da variável/constante dentro de ${imc}.

console.log(nome, sobrenome, "nasceu em", anoNascimento,".");