(function (win, doc){
  'use strict'
  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.
  
  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */
  
  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');
  
  function addEventToButton(button, event) {
    Array.prototype.forEach.call(button, function(button) {
      button.addEventListener('click', event, false);
    });
  }
  
  addEventToButton($buttonsNumbers, handleClickNumber);
  addEventToButton($buttonsOperations, handleClickOperation);
  $buttonCE.addEventListener('click', handleClickCE, false);
  $buttonEqual.addEventListener('click', handleClickEqual, false);
  
  function handleClickNumber() {
    $visor.value += this.value;
  }
  
  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }
  
  function handleClickCE() {
    $visor.value = 0;
  }
  
  function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }
  
  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number)) {
      return number.slice(0, -1);
    }
    return number;
  }
  
  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(function(accumulated, actual) {
      return preCalculo(accumulated, actual)
    });
  }
  
  function preCalculo(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return calculate(Number(firstValue), Number(lastValue), operator) + lastOperator;
  }
  
  function calculate(firstNum, lastNum, operator) {
    switch (operator) {
      case '+':
        return firstNum + lastNum;
      case '-':
        return firstNum - lastNum;
      case 'x':
        return firstNum * lastNum;
      case '÷':
        return firstNum / lastNum;
    }
  }
})(window, document);