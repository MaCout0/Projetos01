/**
*
*script da página de contato
*
*Autor Code Universe
*
**/
(function($, URL, Helpers) {

	var form = $('form[name="formContact"]');

	var submitContact = function() {

		$('body').on('click', '#btnSubmitContact', function() {

			var name = $('input[name="name"]').val();
			var email = $('input[name="email"]').val();
			var phone = $('input[name="phone"]').val();
			var message = $('textarea[name="message"]').val();

			if(name == ''){
				swal({
					type: 'error',
					title: 'Erro!',
					text: 'Preencha com seu nome',
				});
				return false;
			}

			if(email == ''){
				swal({
					type: 'error',
					title: 'Erro!',
					text: 'Preencha com seu email',
				});
				return false;
			}

			if(phone == ''){
				swal({
					type: 'error',
					title: 'Erro!',
					text: 'Preencha com seu telefone',
				});
				return false;
			}

			if(message == ''){
				swal({
					type: 'error',
					title: 'Erro!',
					text: 'Preencha com sua menssagem',
				});
				return false;
			}

			$.ajax({
				url: URL + '/submitContact',
				type: 'POST',
				dataType: 'JSON',
				data: form.serialize(),
				complete: function(response) {
					if (response.responseJSON.result) {
						swal({
							type: 'success',
							title: 'Enviado!',
							text: 'Aguarde o nosso retorno',
						}).then(function() {
							window.location.reload();
							return true
						})
					} else {
						swal({
							title: 'error',
							title: 'Erro!',
							text: 'ocorreu um erro',
						})
						return
					}
				}
			})

			console.log(name + ' ' + email + ' ' + phone + ' ' + message);

		});

	}

	$( document ).ready(function() {
		submitContact();
	})

})($, URL, Helpers)