(function (win, doc) {
	'use strict';
	/*
	Essa semana você terá dois desafios:
	1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
	tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
	ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
	o que não ficou tão claro das aulas anteriores.
	É essencial que você entenda todo o conteúdo que foi passado até aqui,
	para que possamos prosseguir para a parte mais avançada do curso :D

	2) Estudar eventos!
	Acesse a página do MDN:
	https://developer.mozilla.org/en-US/docs/Web/Events#Categories

	Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
	desafio os experimentos legais que você conseguir desenvolver :D
	*/

	/*let $inputText = '[data-js="form-input-text"]';
	let $inputPass = '[data-js="form-input-pass"]';

	function on(element, event, callback) {
		doc.querySelector(element)
			.addEventListener(event, callback, true);
	}

	on($inputText, 'focus', function() {
		this.classList.add('valid');
	});
	on($inputPass, 'focus', function() {
		this.classList.add('valid');
	});*/

	let $allInputs = doc.querySelectorAll("input");

	Array.prototype.forEach.call($allInputs, function(input) {
		input.addEventListener('focus', function() {
			this.classList.add('valid');
		});
		input.addEventListener('blur', function() {
			if (this.value !== '')
				this.classList.add('valid');
			else 
				this.classList.remove('valid');
		});
	});

})(window, document);