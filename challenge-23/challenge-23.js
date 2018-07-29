(function(win, doc) {
	'use strict'
	var calcInput = doc.querySelector('[type="text"]');
	var btnList = doc.querySelectorAll('[type="button"]');
	for (var i = 0; i < btnList.length; i++) {
		btnList[i].addEventListener('click', printValue, false);
	}
	var result = 0;
	var operatorSymbols = {
		'sum': '+',
		'subtract': '-',
		'divide': '/',
		'multiply': '*'
	};
	
	function printValue() {
		console.log(this.value);
		console.log(calcInput.value);
		switch (this.value) {
			case 'clear':
				calcInput.value = 0;
				break;
			case 'sum':
				insertOperator(operatorSymbols[this.value]);
				break;
			case 'subtract':
				insertOperator(operatorSymbols[this.value]);
				break;
			case 'divide':
				insertOperator(operatorSymbols[this.value]);
				break;
			case 'multiply':
				insertOperator(operatorSymbols[this.value]);
				break;
			case 'equals':
				//result = calculate(calcInput.value);
				result = cleanInput(calcInput.value);
				calcInput.value = result;
				break;
			default:
				calcInput.value += this.value;
		}
		console.log(calcInput.value);
	}
	
	function calculate(inputFromCalculator) {
		return inputFromCalculator + 5;
	}
	
	
	function cleanInput(input) {
		var NumRegex = /\d+/g;
		var OperandRegex = /\D/g; // ['-', '+', '*', '/'].sort() -> ["*", "+", "-", "/"]
    var numeros = input.match(NumRegex);
    var operacoes = input.match(OperandRegex);
		console.log(numeros);
    console.log(operacoes);
    console.log(+numeros[0] + +numeros[1]);
		return 0;
	}
	
	function insertOperator(operator) {
    var inputSize = calcInput.value.length - 1;
    var inputArray = calcInput.value.split('');
		console.log("Input from Calc -> " + calcInput.value);
		console.log("Operator send from btn -> " + operator);
    console.log("last char from input -> " + calcInput.value[inputSize]);
    console.log('Array do Input -> ' + inputArray);
		if (calcInput.value[inputSize] === '*' || 
				calcInput.value[inputSize] === '+' || 
				calcInput.value[inputSize] === '-' || 
				calcInput.value[inputSize] === '/') {
          inputArray.pop();
          inputArray.push(operator);
          calcInput.value = inputArray.join('');
					//calcInput.value.pop().push(operator);
				}
		else {
			calcInput.value += operator;
		}
	}
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
})(window, document);
