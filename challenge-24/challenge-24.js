(function(win, doc){
  'use strict'
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

  /*
  - Separar numeros de operadores
  - tirar função dentro de função dos numeros
  - Separar função de printar numero pra função de printar operadores
  - Criar função para verificar se
  */

  var $display = doc.querySelector('[data-js="values"]')
  var $numberBtn = doc.querySelectorAll('[data-js="numbers"]')
  var $operatorBtn = doc.querySelectorAll('[data-js="operators"]')
  var $clearBtn = doc.querySelector('[data-js="clear"]')
  var $equalBtn = doc.querySelector('[data-js="result"]')

  var operationsArr = ['+', '-', 'x', '÷']
  var lastCharRegex = new RegExp('\\D$')

  $numberBtn.forEach(function(item){
    item.addEventListener('click', function(){
      printItem(item)
    }, false)
  })

  $operatorBtn.forEach(function(item){
    item.addEventListener('click', function(e){
      e.preventDefault
      printItem(item)
    }, false)
  })

  $clearBtn.addEventListener('click', function(e){
    e.preventDefault
    clear($display)
  },false)

  $equalBtn.addEventListener('click', function(e){
    handleResult($display.value)
  }, false)

  function printItem(item){
    if (isLastItemOP($display.value) && (operationsArr.indexOf(item.value) !== -1))
      return $display.value = $display.value.slice(0,-1) + item.value

    return $display.value === '0' ? $display.value = item.value : $display.value += item.value
  }

  function isLastItemOP(values){
    return lastCharRegex.test(values)
  }

  function clear($display){
    $display.value = 0
  }

  function handleResult(values){
    lastCharRegex.test(values) ? values = values.slice(0,-1) : ''

    values = values.match(/(?:\d+)[+x÷-]?/g);

    var result = values.reduce(function(acumulado, atual){
      var op = lastCharRegex.test(acumulado) ? acumulado.split('').pop() : ''
      var nextOp = lastCharRegex.test(atual) ? atual.split('').pop() : ''
      var value1 = lastCharRegex.test(acumulado) ? acumulado.slice(0,-1) : acumulado
      var value2 = lastCharRegex.test(atual) ? atual.slice(0,-1) : atual

      switch (op) {
        case '+':
          return (Number(value1) + Number(value2)) + nextOp;
        case '-':
          return  (Number(value1) - Number(value2)) + nextOp;
        case 'x':
          return (Number(value1) * Number(value2)) + nextOp;
        case '÷':
          return (Number(value1) / Number(value2)) + nextOp;
      }
    })
    $display.value = result
  }

  function removeLastOp(values){
    lastCharRegex.test(values) ? values = values.slice(0,-1) : ''
  }


})(window, document)
