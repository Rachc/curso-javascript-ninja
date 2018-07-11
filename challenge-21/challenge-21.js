(function(win, doc){
  /*
  O desafio de hoje será um pequeno projeto: um cronômetro!
  As regras para criação do cronômetro são as seguintes:
  1. Crie um arquivo index.html e adicione esse script a ele;
  2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
  Ele será o nosso cronômetro;
  3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
  4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
  cada segundo;
  5. Ao clicar em Stop, o cronômetro deve parar de contar;
  6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

  Utilize o atributo data-js para nomear o campo e os botões. Você pode
  usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
  dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
  */
  var input = doc.querySelector('[data-js="input"]')
  var btnStart = doc.querySelector('[data-js="start"]')
  var btnStop = doc.querySelector('[data-js="stop"]')
  var btnReset = doc.querySelector('[data-js="reset"]')

  var timerController
  var timerValue = 0
  input.value = timerValue

  function timer(){
    timerValue += 1
    input.value = timerValue;
    //ou trocar as duas linhas acima por input.value = +input.value + 1 já que o + na frente do valor, transforma ele em um numero
    timerController = setTimeout( timer, 1000 )
  }

  function stopTimer(){
    clearTimeout(timerController)
  }

  function resetTimer(){
    timerValue = 0;
    input.value = 0;
    stopTimer();
  }

  btnStart.addEventListener('click', timer, false)
  btnStop.addEventListener('click', stopTimer, false)
  btnReset.addEventListener('click', resetTimer, false)

})(window, document)
