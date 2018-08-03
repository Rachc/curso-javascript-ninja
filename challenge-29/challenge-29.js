(function(DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app(){
    var ajax = new XMLHttpRequest()

    var $companyName = new DOM('[data-js="companyName"]')
    var $companyNumber = new DOM('[data-js="companyNumber"]')

    var $inputImage = new DOM('[data-js="inputImage"]')
    var $inputBrand = new DOM('[data-js="inputBrand"]')
    var $inputYear = new DOM('[data-js="inputYear"]')
    var $inputPlate = new DOM('[data-js="inputPlate"]')
    var $inputColor = new DOM('[data-js="inputColor"]')
    var $registerBtn = new DOM('[data-js="registerBtn"]')

    var $tableContent = new DOM('[data-js="content"]')

    function getCompanyData() {
      ajax.open('GET', 'company.json');
      ajax.send();
      ajax.addEventListener('readystatechange', handleStateChange);
    }

    function handleStateChange () {
      if (ajax.readyState === 4 && ajax.status === 200) {
        var companyData = JSON.parse(ajax.responseText);
        $companyName.get()[0].textContent = companyData.name;
        $companyNumber.get()[0].textContent = companyData.phone;
      }
    }

    function registerCar(e){
      e.preventDefault()
      renderCars()
      clearInputs()
    }

    function getFormData(){
      return {
        image: $inputImage.get()[0].value,
        brand: $inputBrand.get()[0].value,
        year: $inputYear.get()[0].value,
        plate: $inputPlate.get()[0].value,
        color: $inputColor.get()[0].value,
      }
    }

    function clearInputs(){
      $inputImage.get()[0].value = ''
      $inputBrand.get()[0].value = ''
      $inputYear.get()[0].value = ''
      $inputPlate.get()[0].value = ''
      $inputColor.get()[0].value = ''
    }

    function renderCars(){
      console.log('oi')
      var values = getFormData()
      var fragment = document.createDocumentFragment()
      var tr = document.createElement('tr')
      var tdImage = document.createElement('td')
      var tdBrand = document.createElement('td')
      var tdYear = document.createElement('td')
      var tdPlate = document.createElement('td')
      var tdColor = document.createElement('td')

      var img = document.createElement('img')
      var brandTxt = document.createTextNode(values.brand)
      var yearTxt = document.createTextNode(values.year)
      var plateTxt = document.createTextNode(values.plate)
      var colorTxt = document.createTextNode(values.color)

      img.src = values.image

      tdImage.appendChild(img)
      tdBrand.appendChild(brandTxt)
      tdYear.appendChild(yearTxt)
      tdPlate.appendChild(plateTxt)
      tdColor.appendChild(colorTxt)

      tr.appendChild(tdImage)
      tr.appendChild(tdBrand)
      tr.appendChild(tdYear)
      tr.appendChild(tdPlate)
      tr.appendChild(tdColor)
      
      fragment.appendChild(tr)
      $tableContent.get()[0].appendChild(fragment)
      //document.createTextNode(values.image)
    }

    $registerBtn.get()[0].addEventListener('click', registerCar, false)

    getCompanyData()
  }

  app()

})(window.DOM);
