//               0123456789
let umaString = 'Uma batata';
console.log(umaString.charAt(0)); // .charAt é para saber qual elemento está na posição 4

console.log(umaString.concat(' é amarela.')); // .concat concatena as strings mas tem essas maneiras melhores.
console.log(umaString + ' é amarela.');
console.log(`${umaString} é amarela.`); // Essa com certeza é a melhor.

//--------------------------------------------------------------------------------------------------------------------

console.log(`${umaString.indexOf('batata')}`) // .indexOf acha em qual posição se inicia a palavra tal.

//--------------------------------------------------------------------------------------------------------------------

let outraString = 'O Rato Roeu a Roupa do Rei de Roma'

console.log(outraString.replace('rei', 'rainha')); // .replace substitui uma palavra para outra.
console.log(outraString.replace(/r/g, '#')); // Ela tembém pode mudar apenas letras e várias delas usando o /./g

//--------------------------------------------------------------------------------------------------------------------

let umaStringGrande = 'Uma vez Flamengo, Sempre Flamengo, Flamengo sempre eu hei de ser, É meu maior prazer vê-lo brilhar, Seja na terra, seja no mar, Vencer, vencer, vencer, Uma vez Flamengo, Flamengo até morrer!'

console.log(umaStringGrande.length);

//--------------------------------------------------------------------------------------------------------------------

//               0123456789
// outraString = O rato roeu a roupa do rei de roma
console.log(outraString.slice(2, 6)); //pega a String que está entre essas posições de caracteres
console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());

//--------------------------------------------------------------------------------------------------------------------