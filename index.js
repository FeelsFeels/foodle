input_food = document.getElementById('input_food');
guessedDiv_food = document.getElementById('guessed-food')
guessOptions_food = document.getElementById('guess-options_food');


guessedDiv_ingredient = document.getElementById('category-ingredient');
guessedDiv_origin = document.getElementById('category-origin');
guessedDiv_method = document.getElementById('category-method');


infoPopup = document.getElementById('info-popup');
resultsPopup = document.getElementById('results-popup');
resultsHeader = document.getElementById('results-header');
resultsContent = document.getElementById('results-content');
resultsShareButtonText = document.getElementById('share-button_text');
resultsLink = document.getElementById('info-link');


let guessed_food = [];
let guessed_ingredient = [];
let guessed_origin = [];
let guessed_method = [];
let guessed_course = [];

let mostPreviousGuessElements = [];

let numberOfGuesses = 0;


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
        let wrong = false;
        if(previousGuesses.length > 2){
            for (let i = 1; i < previousGuesses.length; i++){
                console.log(previousGuesses[i].textContent);
                //if correct, move on instantly
                if(guessInfo[1].includes(previousGuesses[i].textContent)){
                    continue;
                }
                else{
                    //if wrong, append before the wrong one
                    wrong = true;
                    previousGuesses[i].insertAdjacentElement("beforebegin" ,newGuessElement)
                    break;
                }
            }
            if(!wrong){
                div.append(newGuessElement);
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

    numberOfGuesses += 1;
    guessed_food.push(value);

    let guessedFoodInfo = foodObjectList[value];
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
        Win();
        newGuessElement.classList.add('pill-food', 'pill--success');

    }
    else{
        newGuessElement.classList.add('pill-food', 'pill--danger');
    }
    guessedDiv_food.prepend(newGuessElement);

    
    newGuessElement.classList.add('pill--border-color');
    mostPreviousGuessElements.push(newGuessElement);

}

function Win() {
    resultsHeader.innerHTML = '';

    let congratulations = document.createElement('div');
    congratulations.setAttribute('style', 'font-size: larger; color: #4CAF50;');
    congratulations.textContent = 'Congratulations!';

    let winStatement = document.createElement('div');
    winStatement.textContent = `You got it in ${numberOfGuesses}!`;

    resultsHeader.append(congratulations);
    resultsHeader.append(winStatement);
    
    let winContent = document.createElement('div');
    winContent.innerText = `It's ${newFood.foodName}!`
    
    resultsContent.prepend(winContent);


    resultsContent.classList.remove("hidden");


    ShowPopup(resultsPopup);
}

function ShareWin() {
    navigator.clipboard.writeText(`I guessed the food in ${numberOfGuesses}! https://feelsfeels.github.io/foodle`);
    resultsShareButtonText.innerText = 'Copied!';
    setTimeout(() => {
        resultsShareButtonText.innerText = 'Share it!'
    }, 2000)
}


function RemovePopup(target) {
    target.classList.add("hidden");
    document.body.style.overflow = "auto";
}
function ShowPopup(target) {
    target.classList.remove("hidden");
    document.body.style.overflow = "hidden";
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
    
    infoPopup.addEventListener('click', (e)=>{
        console.log(e.target);
        if(e.target.classList.contains("popup")){
            RemovePopup(infoPopup);
        }
    });
    resultsPopup.addEventListener('click', (e)=>{
        console.log(e.target);
        if(e.target.classList.contains("popup")){
            RemovePopup(resultsPopup);
        }
    });

    resultsLink.href = 'https://en.wikipedia.org/wiki/Pizza';

    ShowPopup(infoPopup);
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