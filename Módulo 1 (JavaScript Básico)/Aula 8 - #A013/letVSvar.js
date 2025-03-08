// Nessa aula fala as diferenças entra 'var' e 'let'. A var ela pode ser redeclarada ao longo do código.
 var nome = 'João';
 var nome = 'Gabriel';
 console.log(nome); // Aqui o Gabriel ficou acima do João por que ela foi redeclarada e seu valor foi modificado. Já com o 'let' isso não acontece..

 
 let nome1 = 'João';
 // let nome1 = 'Gabriel';
 console.log(nome1);
//Aqui vai dar erro, pois a 'let' não pode ser redefinida.

//NÃO CRIE UMA VÁRIAVEL SEM NOME. Vai dar certo, mas não é nada recomendável pois ela se torna global e muito provavelmente vai atrapalhar seu código futuramente
nome2 = 'João';
console.log(nome2);


 