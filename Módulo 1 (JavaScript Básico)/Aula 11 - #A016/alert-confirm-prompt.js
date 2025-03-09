alert('Esta é minha mensagem');

/* No navegador tem um elemento central, como se fosse o pai de todos os elementos, que é o objeto 'Window' (Janela do navegador). E dentro desse objeto Window tem algumas funções como por exemplo o 'Alert'. então alert('Esta é minha mensagem') nada mais é que u atalho de window.alert('Esta é minha mensagem');

alert('Esta é minha mensagem') = window.alert('Esta é minha mensagem');

Esse alert está dentro do objeto Window assim como no console.log, é o método log que está dentro do objeto console.
*/

confirm("Tem certeza que deseja apagar este post?");
//o usuário aperta para excluir o post, e quando aperta aparece uma mensagem igual a do alert perguntando se tem certeza que deseja excluir o post) Nesse caso aparece o botão de CANCELAR e OK, o alert aparece apenas o OK. Quando aperta o CANCELAR essa janela vai retornar um valor boolean FALSE, e se apertar o OK retorna o valor TRUE.