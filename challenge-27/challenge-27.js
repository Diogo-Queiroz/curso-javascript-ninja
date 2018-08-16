(function (win, doc) {
	'use strict';
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
	function DOM(Node) {
    this.element = doc.querySelectorAll(Node);
  }

  DOM.prototype.on = function(event, callback) {
    Array.prototype.forEach.call(this.element, function(node) {
      node.addEventListener(event, callback, false);
    });
  }

  DOM.prototype.off = function(event, callback) {
    Array.prototype.forEach.call(this.element, function(node) {
      node.removeEventListener(event, callback);
    });      
  }

  DOM.prototype.get = function() {
    return this.element;
  }

  function clickar(e) {
    e.preventDefault();
    console.log('clicou');
  }
  
  DOM.prototype.forEach = function(node, callback) {
    Array.prototype.forEach.call(this.element, function(node) {
      console.log(node);
    });
  };
  
  DOM.prototype.map = function() {};
  
  DOM.prototype.filter = function() {};
  
  DOM.prototype.reduce = function() {};
  
  DOM.prototype.reduceRight = function() {};
  
  DOM.prototype.some = function() {};
  
  DOM.prototype.every = function() {};
  
  DOM.prototype.isArray = function isArray(arr) {
  	return Object.prototype.toString.call(arr);
  };
  
	DOM.prototype.isFunction = function(func) {};
	
	DOM.prototype.isNumber = function(number) {};
	
	console.log(DOM.isArray([1,2,3]));
	console.log(DOM.forEach({1:1, 2: [1,2]}), function(){});
})(window, document);