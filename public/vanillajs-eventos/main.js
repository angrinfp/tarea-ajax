document.addEventListener("DOMContentLoaded", function() {
/*
	console.log("listo!");

	var forms = document.querySelectorAll("form"); // esto es igual a $('form') / Busqueda
	var form = forms[0]; // primera coincidencia
	
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		var nombre = document.querySelectorAll("#nombre")[0].value;
		
		var message = document.querySelectorAll("#message")[0];
		message.innerHTML = message.innerHTML + "<span>" + nombre + "</span>";
	});

	console.log(form); */

	/*var elements = document.querySelectorAll("li");

	for (var i = 0; i < elements.length; i = i + 1) {
		var element = elements[i];

		element.addEventListener("click", function(event) {
			var el = event.target;

			console.log(el.innerHTML);
		});
	};*/

	var lista = document.querySelectorAll("ul")[0];
	
	lista.addEventListener("click", function(event) {
		var el = event.target;

		/*
		if (el.tagName.toLowerCase() === "li") {
			console.log("Click en:" , el.innerHTML);
		}
		*/

		if (el.classList.contains("item")) {
			console.log("Click en:" , el.innerHTML);//innerHTML devuelve el contenido html de un elemento
		} //classList es metodo que devuelve la lista de clases de un elemento
	});
});