/*
let varA = 'A'; --> B
let varB = 'B'; --> C
let varC = 'C'; --> A
*/

let varA = 'A';
let varB = 'B';
let varC = 'C';

const varATemp = varA;
varA = varB; //B
varB = varC; // C
// varC = varA;  B (pois varA já virou varB, então criamos um primeiro valor varATemp sem ele ter sido trocado de valor)     V
varC = varATemp;

console.log(varA, varB, varC);