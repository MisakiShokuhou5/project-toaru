//minha inimiga natural

const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.character');

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		
		const selectedButton = document.querySelector(".selectedbutton");
		if (selectedButton) {
			selectedButton.classList.remove("selectedbutton");
		}

		
		button.classList.add("selectedbutton");

		const selectedCharacter = document.querySelector(".character.selected");
		if (selectedCharacter) {
			selectedCharacter.classList.remove("selected");
		}

		characters[index].classList.add("selected");
	});
});

//eu odeio ela