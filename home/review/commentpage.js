		$(document).ready(() => {
			$(".ul").on("click", event => {
				$(event.currentTarget).siblings().toggle("show");
			});

			$("#submitbutton").on("click", () => {
				let value = $(".textbox1").val();
				window.alert("thanks for the review")
				$(".textbox1").val("");
				$("#lastitem").clone().insertBefore("#lastitem").text(value);
				$(".slider").css("height", "456")
			});


			$("#recipesubmit").focus(function () {
				if (document.getElementById('recipesubmit').value === '') { //if the value on focus is ==="", then make it equal to a bullet point 
					document.getElementById('recipesubmit').value += '• ';
				}
				$(".recipesubmit").keyup(function (event) {
					var keycode = (event.keyCode ? event.keyCode : event.which); // if is it equal to the event keycode then keycode is equal to that otherwise it is equal to whatver key was clicked
					if (keycode == '13') /* 13 is the keycode for enter  */ {
						document.getElementById('recipesubmit').value += '• ';
					}
					var txtval = document.getElementById('recipesubmit').value;
					if (txtval.substr(txtval.length - 1) == '\n') /* if the final textbox element is equal to a new line then */ {
						document.getElementById('recipesubmit').value = txtval.substring(0, txtval.length - 1);
					}
				});
			})


			$("#methodsubmit").focus(function () {
				if (document.getElementById('methodsubmit').value === '') { //if the value on focus is ==="", then make it equal to a bullet point 
					document.getElementById("methodsubmit").value += '• ';
				}

				$(".methodsubmit").keyup(function (event) {
					var keycode = (event.keyCode ? event.keyCode : event.which); // if is it equal to the event keycode then keycode is equal to that otherwise it is equal to whatver key was clicked
					if (keycode == '13') /* 13 is the keycode for enter  */ {
						document.getElementById('methodsubmit').value += '• ';
					}
					var txtval = document.getElementById('methodsubmit').value;
					if (txtval.substr(txtval.length - 1) == '\n') /* if the final textbox element is equal to a new line then */ {
						document.getElementById('methodsubmit').value = txtval.substring(0, txtval.length - 1);
					}
				});

			});

			$(".submittwo").on("click", () => {
				window.alert("Thank you for the recipe, we'll get to adding as soon as we can!")
				$(".recipesubmit").val("");
				$(".methodsubmit").val("");
			})


		})


		$('.slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1
		});
