const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('inputIngredient');

const ingredients = [];
let ingredientCounter = 1;

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const deleteFunction = (e) => {
  const buttonId = e.target.id; // The id you want to target
  ingredients.forEach((ingredient, index) => { // the ingredients array and the starting index you want to delete
    if(ingredient.id === buttonId){ //ingredient id === the id of the button clicked
      ingredients.splice(index, 1); 
    }
  })
  domStringBuilder(ingredients); // run the domString builder and the ingredients array in the parameter
  addDeleteEvents(); //fire the addDeleteEvents
};

const addDeleteEvents = () => {
  const deleteButtons = document.getElementsByClassName('deleteButton');
  for(let i=0; i<deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteFunction);
  } // the for loop filters through the delete button that's being pressed to delete the correct card
};

const domStringBuilder = (arrayToPrint) => {
  let domString = '';
  arrayToPrint.forEach((ingredient) => {
    domString += `<div class="card col-3">`;
    domString += `  <div class="card-body">`;
    domString += `    <h5 class="card-title">${ingredient.item}</h5>`;
    domString += `    <a class="btn btn-danger deleteButton" id=${ingredient.id}>Delete</a>`;
    domString += `  </div>`;
    domString += `</div>`;
  });
  printToDom('ingredient-container', domString);
};

const addIngredient = (e) => {
  e.preventDefault(); // don't do typical form behavior to submit to a new page loaded
  const inputText = inputIngredient.value; // grab the value from the inputIngredient value
  const newIngredient = { // new ingredient object
    item: inputText, 
    id: `ingredient${ingredientCounter}`, // adds to the ingredientCounter variable
  };
  ingredients.push(newIngredient); // pushes the ingredient to the empty array
  ingredientCounter++; // 
  domStringBuilder(ingredients); 
  addDeleteEvents();
  inputIngredient.value = ''; // resetting the input value to nothing
};

const eventListeners = () => {
  addButton.addEventListener('click', addIngredient);
};

const init = () => {
  eventListeners();
};

init();