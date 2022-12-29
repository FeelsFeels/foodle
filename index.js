ingredientGuessOptions = document.getElementById('guess-options_ingredients');
ingredientGuessInput = document.getElementById('ingredientGuessInput');
guessedIngredientDiv = document.getElementById('guessed-ingredients');

class Food {
    constructor(ingredients, origin, type, method){
        this.ingredients = ingredients;
        this.origin = origin;
        this.type = type
        this.method = method;
    }
}



let ingredientsList = [
    'Apple',
    'Blueberry',
    'Cranberry',
    'Durian',
    'Egg',
    'Flour',
    'Grapes',
    'Honey',
    'IcelandBierShinkenWToMakeTheLineLongTestWrap'
]

let guessedIngredientsList = []

function GuessIngredient(guess) {
    //formatting for comparison with list
    let separate = guess.split(' ');
    let value = separate.map(x => x[0].toUpperCase() + x.slice(1)).join(' ');

    console.log('guessing ingredient: ' + value)
    if(!ingredientsList.includes(value)){
        //not an ingredient in this game
        return;
    }
    if(guessedIngredientsList.includes(value)){
        //Already guessed previously
        return;
    }
    
    //remove ingredients from guess options
    guessedIngredientsList.push(value);
    let newGuessElement = document.createElement('span');
    newGuessElement.textContent = value;

    if(dish.ingredients.includes(value)){
        console.log('UCHI MATA');
        newGuessElement.classList.add('pill', 'pill--success');
        guessedIngredientDiv.prepend(newGuessElement);
    }
    else{
        console.log('wrong ingredient bro');
        newGuessElement.classList.add('pill', 'pill--danger');
        guessedIngredientDiv.appendChild(newGuessElement);
    }

}



function Init() {
    //Populate ingredients datalist
    ingredientsList.forEach((item) => {
        let option = document.createElement('option');
        option.value = item;
        ingredientGuessOptions.append(option);
    });

    //Event listeners
    ingredientGuessInput.addEventListener("keyup",  (e) => {
        if(e.key == "Enter") {
            GuessIngredient(ingredientGuessInput.value);
        }
    })

    //Change datalist to lowercase for comparison
    // ingredientsList = ingredientsList.map(x => x.toLowerCase());
}

console.log('TESTICALS');

let dish = new Food(['Durian'], 'French', 'Soup', 'Baked');

Init();