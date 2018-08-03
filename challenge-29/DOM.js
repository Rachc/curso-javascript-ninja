(function(win, doc, DOM){
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.
  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.
  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false
  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */

  DOM = function DOM(element){
    this.element = doc.querySelectorAll(element)
  }

  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(event, callback, false)
    })
  }

  DOM.prototype.off = function off(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(event, callback, false)
    })
  }

  DOM.prototype.get = function get(){
    return this.element
  }

  DOM.prototype.forEach = function forEach(callback){
    return Array.prototype.forEach.call(this.element, callback)
  }
  
  DOM.prototype.map = function map(callback){
    return Array.prototype.map.call(this.element, callback)
  }

  DOM.prototype.filter = function filter(callback){
    return Array.prototype.filter.call(this.element, callback)
  }

  DOM.prototype.reduce = function reduce(callback){
    return Array.prototype.reduce.call(this.element, callback)
  }

  DOM.prototype.reduceRight = function reduceRight(callback){
    return Array.prototype.reduceRight.call(this.element, callback)
  }

  DOM.prototype.every = function every(callback){
    return Array.prototype.every.call(this.element, callback)
  }

  DOM.prototype.some = function some(callback){
    return Array.prototype.some.call(this.element, callback)
  }

  DOM.prototype.isArray = function isArray(element){
    return Object.prototype.toString.call(element) === "[object Array]"
  }

  DOM.prototype.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]'
  }

  DOM.prototype.isFunction = function isFunction(param){
    return Object.prototype.toString.call(param)==='[object Function]'
  }

  DOM.prototype.isNumber =  function isNumber(param){
    return Object.prototype.toString.call(param)==='[object Number]'
  }

  DOM.prototype.isString = function isString(param){
    return Object.prototype.toString.call(param)==='[object String]'
  }
  DOM.prototype.isBoolean =  function isBoolean(param){
    return Object.prototype.toString.call(param)==='[object Boolean]'
  }

  DOM.prototype.isNull = function isNull(param){
    return Object.prototype.toString.call(param) === '[object Null]' || Object.prototype.toString.call(param) === '[object Undefined]'
  }

  win.DOM = DOM
})(window, document)