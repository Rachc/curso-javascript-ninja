(function(win, doc){
  'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  //Pegar todos os elementos do dom
  var values = doc.querySelector('[data-js="values"]');

  var opAndNumbers = doc.querySelectorAll('[data-js="opAndNumbers"]');

  var result = doc.querySelector('[data-js="result"]');
  var clear = doc.querySelector('[data-js="clear"]');

  //on click, concatenar o valor dos botões
  opAndNumbers.forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault()
      printNumber(item)
    }, false)
  })

  //Função de adicionar numero no input. Verificar se o input é = 0 (valor inicial). Se sim, limpar o 0
  function printNumber(item){
    values.value === '0' ? values.value = item.value : values.value += item.value
  }

  //Limpar
  function clean(){
    values.value = 0
  }

  clear.addEventListener('click', function(e){
    e.preventDefault()
    clean()
  }, false)

  result.addEventListener('click', function(e){
    e.preventDefault()
    handleEquals()
  })

  function handleEquals(){
    var inputArray = values.value.match(/(?:\d+)[+-x÷]?/g)

    var calculationResult = inputArray.reduce(function( acc , actual){

      var firstNumber = acc.replace(/\D/, '')
      var secondNumber = actual.replace(/\D/, '')
      var operation = acc.slice(-1)
      console.log(operation)
      var calc;

      if (operation === '+') {
        calc = +firstNumber + +secondNumber;
      }

      if (operation === '-') {
        calc = +firstNumber - +secondNumber;
      }

      if (operation === 'x') {
        calc = +firstNumber * +secondNumber;
      }

      if(operation === '÷'){
        calc = +firstNumber / +secondNumber;
      }

      var lastOperation = actual.slice(-1);

      return isOperation(lastOperation) ?
        calc + lastOperation :
        calc.toString();

    })

    values.value = calculationResult;
  }

  function isOperation(char) {
    return char === '+' || char === '-' || char === 'x' || char === '÷';
  }

})(window, document)
