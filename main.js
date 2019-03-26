<<<<<<< HEAD
const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('inputIngredient');


const domPrinter = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

const addIngredient = (e) => {
    e.preventDefault();
    const inputText = inputIngredient.value;
    domPrinter('ingredient-container', inputText);
    inputIngredient.value = '';
}

const eventListeners = () => {
    addButton.addEventListener('click', addIngredient);
};

const init = () => {
    eventListeners();
}
init();
=======
console.log('Mooooooo');
>>>>>>> master
