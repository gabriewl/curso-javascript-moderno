const nome1 = ('João'); //String
const nome2 = ("Gabriel"); //String
const nome3 = (`Ferreira`); //String
const numero1 = 10; //Number
const numero2 = 10.52; //Number
let nomeAluno; //Esta é uma variável INDEFINIDA = undefined (não aponta pra local nenhum na memória. mas pode mudar futuramente no código)

let sobrenomeAluno = null; //É um valor NULO (não aponta pra local nenhum na memória. Mas este não pode ser mudado pois ele já é nulo independente de qualquer coisa). Ele é utilizado quando nós programadores queremos desconfigurar uma variável, colocar o valor dela como nulo mesmo. A outra ela é indefinida não nula, são completamente diferentes. 

//EX: Você tem um site que o usuário pode mudar a cor de fundo do perfil dele, e se ele não selecionar nenhuma cor, se ele não selecionar nenhuma cor você vai configurar essa variável e falar que ela não tem nenhum valor.

const boolean = true; //Boolean tem apenas dois valores; apenas verdadeiro (true) e falso (false).

console.log(typeof sobrenomeAluno, sobrenomeAluno); //typeof tipo do nome e o valor;

//Existe esses tipos de dados no JavaScript = String, Number, Undefined, Null, Boolean, Symbol->vai aprender mais pra frente.