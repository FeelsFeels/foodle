input_ingredient = document.getElementById('input_ingredient');
guessedDiv_ingredient = document.getElementById('guessed_ingredient');
guessOptions_ingredient = document.getElementById('guess-options_ingredient');

input_origin = document.getElementById('input_origin');
guessedDiv_origin = document.getElementById('guessed_origin');
guessOptions_origin = document.getElementById('guess-options_origin');

input_method = document.getElementById('input_method');
guessedDiv_method = document.getElementById('guessed_method');
guessOptions_method = document.getElementById('guess-options_method');

input_course = document.getElementById('input_course');
guessedDiv_course = document.getElementById('guessed_course');
guessOptions_course = document.getElementById('guess-options_course');




let guessed_Ingredient = [];
let guessed_Origin = [];
let guessed_Method = [];
let guessed_Course = [];


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

    let value = GuessFormatter(guessInfo[0]);
    if(!categoryList.includes(value)){
        //doesn't exist in the game
        return;
    }
    if(guessInfo[2].includes(value)){
        //already guessed
        return;
    }

    guessInfo[2].push(value);
    let newGuessElement = document.createElement('span');
    newGuessElement.textContent = value;

    if(guessInfo[1].includes(value)){
        newGuessElement.classList.add('pill', 'pill--success');
        div.prepend(newGuessElement);
    }
    else{
        newGuessElement.classList.add('pill', 'pill--danger');
        div.appendChild(newGuessElement);
    }

}


function Init() {
    //Populate ingredients datalist
    ingredientList.forEach((item) => {
        let option = document.createElement('option');
        option.value = item;
        guessOptions_ingredient.append(option);
    });

    //Event listeners
    input_ingredient.addEventListener("keyup",  (e) => {
        if(e.key == "Enter") {
            // GuessIngredient(input_ingredient.value);
            Guess([input_ingredient.value, newFood.ingredients, guessed_Ingredient], guessedDiv_ingredient, ingredientList);
            input_ingredient.value = '';
            input_ingredient.blur();
        }
    })

    originList.forEach((item) => {
        let option = document.createElement('option');
        option.value = item;
        guessOptions_origin.append(option);
    });

    
    input_origin.addEventListener("keyup",  (e) => {
        if(e.key == "Enter") {
            // GuessIngredient(input_origin.value);
            Guess([input_origin.value, newFood.origin, guessed_Origin], guessedDiv_origin, originList);
            input_origin.value = '';
            input_origin.blur();
        }
    })

    methodList.forEach((item) => {
        let option = document.createElement('option');
        option.value = item;
        guessOptions_method.append(option);
    });

    //Event listeners
    input_method.addEventListener("keyup",  (e) => {
        if(e.key == "Enter") {
            Guess([input_method.value, newFood.method, guessed_Method], guessedDiv_method, methodList);
            input_method.value = '';
            input_method.blur();
        }
    })

    
    courseList.forEach((item) => {
        let option = document.createElement('option');
        option.value = item;
        guessOptions_course.append(option);
    });

    //Event listeners
    input_course.addEventListener("keyup",  (e) => {
        if(e.key == "Enter") {
            Guess([input_course.value, newFood.course, guessed_Course], guessedDiv_course, courseList);
            input_course.value = '';
            input_course.blur();
        }
    })
}

console.log('TESTICALS');

let dish = new Food(['Durian'], 'French', 'Soup', 'Baked');

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