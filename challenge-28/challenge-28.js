(function(win, doc){
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
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

  DOM.prototype.setValue = function value(appendedText){
    Array.prototype.forEach.call(this.element, function(element){
      var text = document.createTextNode(appendedText)
      var fragment = document.createDocumentFragment()
      fragment.appendChild(text)
      element.appendChild(fragment)
    })
  }

  DOM.prototype.removeValue = function value(){
    Array.prototype.forEach.call(this.element, function(element){
      if(element.hasChildNodes()) {
        element.removeChild(element.firstChild)
      }
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

  var ajax = new XMLHttpRequest()
  var url = 'https://viacep.com.br/ws/03053010/json/'

  var $logradouro = new DOM('[data-js=logradouro]')
  var $bairro = new DOM('[data-js=bairro]')
  var $estado = new DOM('[data-js=estado]')
  var $cidade = new DOM('[data-js=cidade]')
  var $cep = new DOM('[data-js=cep]')
  var $submitBtn = new DOM('[data-js=submitBtn]')
  var $cepInput = doc.querySelector('[data-js=CEPInput]')
  var cepurl

  function isRequisitionReady(){
    return (ajax.readyState === 4 && ajax.status === 200)
  }

  $submitBtn.on('click', function(e){
    e.preventDefault()
    cleanValues()
    cepurl = cleanCEP()
    url = 'https://viacep.com.br/ws/' + cepurl + '/json/'
    getCEP()
  },false)

  var cleanCEP = function cleanCEP(){
    var regexCleaner = /\D/g
    return $cepInput.value.replace(regexCleaner, '')
  }

  var getCEP = function getCEP(){
    ajax.open('GET', url)
    ajax.send()
    
    ajax.onreadystatechange =  function(){
      if(isRequisitionReady()){
        data = JSON.parse(ajax.responseText)
        $logradouro.setValue(data.logradouro)
        $bairro.setValue(data.bairro)
        $estado.setValue(data.uf)
        $cidade.setValue(data.localidade)
        $cep.setValue(data.cep)
      } else {
        cleanValues()
      }
    }
  }

  var cleanValues = function cleanValues(){
    $logradouro.removeValue()
    $bairro.removeValue()
    $estado.removeValue()
    $cidade.removeValue()
    $cep.removeValue()
  }

})(window, document)