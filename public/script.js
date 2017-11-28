$(document).ready(function () {
	$('#btn').on("click", function(e) {
		e.preventDefault();
		var nombre = $('#first_name').val();
		var apellido = $('#last_name').val();
		var params = {
			'nombre': nombre,
			'apellido': apellido
		}

		$.post('/find', params)
			.done(function(data) {
				console.log(data.data);
			});

		var message = document.querySelectorAll("#message")[0];
		message.innerHTML = message.innerHTML + "<span>" + nombre + "</span>";

	});
});