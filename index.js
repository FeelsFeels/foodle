input_food = document.getElementById('input_food');
guessedDiv_food = document.getElementById('guessed_food')
guessOptions_food = document.getElementById('guess-options_food');


guessedDiv_ingredient = document.getElementById('category-ingredient');
guessedDiv_origin = document.getElementById('category-origin');
guessedDiv_method = document.getElementById('category-method');



let guessed_food = [];
let guessed_ingredient = [];
let guessed_origin = [];
let guessed_method = [];
let guessed_course = [];

let mostPreviousGuessElements = [];


function GuessFormatter(str){
    let separate = str.split(' ');
    let value = separate.map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
    return value;
}


function Guess(guessInfo, div, categoryList) {
    //guessinfo
    //[guess string, 
    //corresponding food category correct list, 
    //corresponding food category already guessed list]
    //div
    //the html div displaying the guesses you already did
    //categoryList
    //the js array that has the full list of ingredients/origin etc

    let value = GuessFormatter(guessInfo[0]);
    if(!categoryList.includes(value)){
        //doesn't exist in the game
        return;
    }
    if(guessInfo[2].includes(value)){
        //already guessed
        let previous = div.childNodes;
        for(let i = 0; i < previous.length; i++){
            if(previous[i].textContent == value){
                previous[i].classList.add('pill--border-color');
                mostPreviousGuessElements.push(previous[i]);
                return;
            }
        }
}

    guessInfo[2].push(value);
    let newGuessElement = document.createElement('span');
    newGuessElement.textContent = value;

    if(guessInfo[1].includes(value)){
        newGuessElement.classList.add('pill', 'pill--success');
        // div.prepend(newGuessElement);
        div.firstElementChild.insertAdjacentElement("afterend", newGuessElement)
    }
    else{
        let previousGuesses = div.children;
        
        //place at firstmost 'wrong' position to put
        if(previousGuesses.length > 2){
            for (let i = 1; i < previousGuesses.length; i++){
                console.log(previousGuesses[i].textContent);
                //if correct, move on instantly
                if(guessInfo[1].includes(previousGuesses[i].textContent)){
                    continue;
                }
                else{
                    //if wrong, append before the wrong one
                    previousGuesses[i].insertAdjacentElement("beforebegin" ,newGuessElement)
                    break;
                }
            }
        }
        else {
            console.log('less')
            div.append(newGuessElement);
        }
        newGuessElement.classList.add('pill', 'pill--danger');
    }

    //Add border to element
    newGuessElement.classList.add('pill--border-color');
    mostPreviousGuessElements.push(newGuessElement);

}

function GuessFood(guess){
    let value = GuessFormatter(guess);

    if(guessed_food.includes(value)){
        return;
    }
    if(!foodList.includes(value)){
        return;
    }

    let guessedFoodInfo = foodObjectList[value];
    guessed_food.push(value);
    let newGuessElement = document.createElement('span');
    newGuessElement.textContent = value;
    
    
    //Remove border highlights to most recent guess
    if(mostPreviousGuessElements.length != 0){
        mostPreviousGuessElements.forEach(element => {
            element.classList.remove("pill--border-color");
        });
    }
    mostPreviousGuessElements = []

    //populate category with data    
    guessedFoodInfo[0].forEach(ingredient => {
        Guess([ingredient, newFood.ingredients, guessed_ingredient], guessedDiv_ingredient, ingredientList);
    });
    guessedFoodInfo[1].forEach(origin => {
        Guess([origin, newFood.origin, guessed_origin], guessedDiv_origin, originList);
    });
    guessedFoodInfo[2].forEach(method => {
        Guess([method, newFood.method, guessed_method], guessedDiv_method, methodList);
    });

    if(newFood.foodName == value){
        //wingame
        newGuessElement.classList.add('pill-food', 'pill--success');

    }
    else{
        newGuessElement.classList.add('pill-food', 'pill--neutral');
    }
    guessedDiv_food.prepend(newGuessElement);

    
    newGuessElement.classList.add('pill--border-color');
    mostPreviousGuessElements.push(newGuessElement);

}

function Init() {
    //Event listeners and datalists
    //Food datalist
    foodList.forEach((item) => {
        let option = document.createElement('option');
        option.value = item;
        guessOptions_food.append(option);
    });

    input_food.addEventListener('keyup', (e) => {
        if(e.key == "Enter"){
            GuessFood(input_food.value);
            input_food.value = '';
            input_food.blur();
        }
    })
}

console.log('TESTICALS');


Init();






// function GuessIngredient(guess) {
//     //formatting for comparison with list
//     let value = GuessFormatter(guess);

//     console.log('guessing ingredient: ' + value)
//     if(!ingredientList.includes(value)){
//         //not an ingredient in this game
//         return;
//     }
//     if(guessedIngredientList.includes(value)){
//         //Already guessed previously
//         return;
//     }
    
//     //remove ingredients from guess options
//     guessedIngredientList.push(value);
//     let newGuessElement = document.createElement('span');
//     newGuessElement.textContent = value;

//     if(newFood.ingredients.includes(value)){
//         newGuessElement.classList.add('pill', 'pill--success');
//         guessedDiv_ingredient.prepend(newGuessElement);
//     }
//     else{
//         newGuessElement.classList.add('pill', 'pill--danger');
//         guessedDiv_ingredient.appendChild(newGuessElement);
//     }
// }