$(document).ready(() => {

	$(".ul").on("click", event => {
		$(event.currentTarget).siblings().toggle("show");
	});

})

let cake = document.getElementsByClassName("cakes");
let cakes = [...cake];
let recipe = document.getElementsByClassName("white");
let recipes = [...recipe]


for (var i = 0; i < cakes.length; i++) {
	cakes[i].addEventListener("click", function () {
		for (let j = 0; j < recipes.length; j++) {
			document.querySelector(".pic").classList.add("none");
			let cakeArray = [];
			cakeArray.push(this).id
			let k = cakeArray[0].id;

			function stop() {
				if (recipes[j].id != k) {
					recipes[j].style.display = "none"
				}
			}

			function exit() {
				document.querySelector(".exit").addEventListener("click", () => {
					document.querySelector(".pic").classList.remove("none");
					recipes[j].style.display = "none";
				})
			}
			if (recipes[j].id === k) {
				recipes[j].style.display = "block";
				exit()
			}
			stop()
		}
	})
}
