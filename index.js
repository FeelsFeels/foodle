input_food = document.getElementById('input_food');

guessedDiv_food = document.getElementById('guessed-food')
guessedDiv_ingredient = document.getElementById('category-ingredient');
guessedDiv_origin = document.getElementById('category-origin');
guessedDiv_method = document.getElementById('category-method');

let foodImg = document.getElementById('food-picture');
infoPopup = document.getElementById('info-popup');
resultsPopup = document.getElementById('results-popup');
resultsHeader = document.getElementById('results-header');
resultsContent = document.getElementById('results-content');
resultsPicture = document.getElementById('results-food-picture');
resultsPictureDescription = document.getElementById('results-food-description');
resultsShareButton = document.getElementById('share-button');
resultsShareButtonText = document.getElementById('share-button_text');
resultsLink = document.getElementById('info-link');

let menuContainer = document.getElementById('menu-container');
let menuOpened = false;

let searchResultsDiv = document.getElementById('search-results-container');
let searchResultsDisplayed = false;
let guessCountDisplay = document.getElementById('guess-count');

//Setting up confetti on win
let confettiCanvas = document.getElementById('confetti-canvas')
let confettiEndTime;
let winConfetti = window.confetti.create(confettiCanvas, {
    resize: true,
    disableForReducedMotion: true
});


let guessed_food = [];
let guessed_ingredient = [];
let guessed_origin = [];
let guessed_method = [];
let guessed_course = [];

let mostPreviousGuessElements = [];

let numberOfGuesses = 0;
let initialPixelationFactor = 14;
let scrollPosition;

// 0: daily
// 1: random
// 3: win game
// 4: game loss
let gamemode = 0;


function GuessFormatter(str){
    let separate = str.split(' ');
    let value = separate.map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
    return value;
}

function FilterFoodSearch(searchString){
    if(searchString == ''){
        RenderSearchResults(foodList);
        return;
    }
    
    let filteredSearch = foodList.filter(food => {
        let lowercased = food.toLowerCase();
        if(lowercased.includes(searchString.toLowerCase())){
            return true;
        }
    });
    RenderSearchResults(filteredSearch);
}

function RenderSearchResults(results){

    CloseFoodSearch();

    //create ul and add all the lis to it
    let list = document.createElement('ul');
    results.forEach(food => {
        item = document.createElement('li');
        item.textContent = food;
        list.appendChild(item);
    });

    list.addEventListener("click", function(e){
        GuessFood(e.target.textContent);
        while(searchResultsDiv.firstChild) {
            searchResultsDiv.removeChild(searchResultsDiv.lastChild);
        }
    });
    searchResultsDiv.appendChild(list);
    searchResultsDisplayed = true;
}

function CloseFoodSearch(){
    while(searchResultsDiv.firstChild) {
        searchResultsDiv.removeChild(searchResultsDiv.lastChild);
    }
    searchResultsDisplayed = false;
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
        div.firstElementChild.insertAdjacentElement("afterend", newGuessElement)
    }
    else{
        let previousGuesses = div.children;
        
        //place at firstmost 'wrong' position to put
        let wrong = false;
        if(previousGuesses.length > 2){
            for (let i = 1; i < previousGuesses.length; i++){
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
            div.append(newGuessElement);
        }
        newGuessElement.classList.add('pill', 'pill--danger');
    }

    //Add border to element
    newGuessElement.classList.add('pill--border-color');
    mostPreviousGuessElements.push(newGuessElement);

}

function GuessFood(guess){
    input_food.value = '';
    input_food.blur();
    
    let value = GuessFormatter(guess);

    if(guessed_food.includes(value)){
        return;
    }
    if(!foodList.includes(value)){
        return;
    }

    numberOfGuesses += 1;
    guessCountDisplay.textContent = numberOfGuesses + '/6';

    //New Pill to show what food item you guessed
    guessed_food.push(value);
    
    RemoveRecentGuessBorderHighlights();
    PopulateHintCategories(guess)

    if(newFood.foodName == value){
        //wingame
        Win();
    }
    else{
        if(numberOfGuesses >= 6){
            Lose();
        }
        else{
            PixelateImage(originalFoodImg, initialPixelationFactor - numberOfGuesses * 2);
            window.scrollTo(0, scrollPosition);
        }
    }
}

function PopulateHintCategories(guess){
    let value = GuessFormatter(guess);
    
    RemoveRecentGuessBorderHighlights();

    let newGuessElement = document.createElement('span');
    newGuessElement.textContent = value;

    let guessedFoodInfo = foodObjectList[value];
    
    //populate category with data
    guessedFoodInfo[0].forEach((ingredient, i) => {
        setTimeout(() => {
            Guess([ingredient, newFood.ingredients, guessed_ingredient], guessedDiv_ingredient, ingredientList);
        }, i * 100);
    });
    guessedFoodInfo[1].forEach((origin, i) => {
        setTimeout(() => {
        Guess([origin, newFood.origin, guessed_origin], guessedDiv_origin, originList);
        }, i * 400);
    });
    guessedFoodInfo[2].forEach((method, i) => {
        setTimeout(() => {
            Guess([method, newFood.method, guessed_method], guessedDiv_method, methodList);            
        }, i * 400);
    });

    if(newFood.foodName == value){
        newGuessElement.classList.add('pill-food', 'pill--success');
    }
    else{
        newGuessElement.classList.add('pill-food', 'pill--danger');
    }

    newGuessElement.classList.add('pill--border-color');
    mostPreviousGuessElements.push(newGuessElement);
    guessedDiv_food.prepend(newGuessElement);
}

function RemoveRecentGuessBorderHighlights() {
    //Remove border highlights to most recent guess
    if(mostPreviousGuessElements.length != 0){
        mostPreviousGuessElements.forEach(element => {
            element.classList.remove("pill--border-color");
        });
    }
    mostPreviousGuessElements = [];
}

function Win() {
    if(gamemode == 4){
        return;
    }

    PixelateImage(originalFoodImg, 0);
    input_food.readOnly = true;
    input_food.setAttribute("placeholder", `It's ${newFood.foodName}!`);
    input_food.classList.add("input_food_gameend");

    //Generate content for winning popup
    resultsHeader.innerHTML = '';

    let congratulations = document.createElement('div');
    congratulations.setAttribute('style', 'font-size: larger; color: #4CAF50;');
    congratulations.textContent = 'Congratulations!';

    let winStatement = document.createElement('div');
    winStatement.textContent = `You got it in ${numberOfGuesses}!`;

    resultsHeader.append(congratulations);
    resultsHeader.append(winStatement);
    
    resultsContent.classList.remove("hidden");

    PrepareConfetti(500);

    if(gamemode == 0){
        resultsShareButton.setAttribute('onclick', 'ShareWin()');
    }
    else if (gamemode == 1){
        resultsShareButton.setAttribute('onclick', 'NextRound()');
    }

    gamemode = 3;
    ShowPopup(resultsPopup);
}

function Lose() {
    if(gamemode == 3){
        return;
    }

    PopulateHintCategories(newFood.foodName);
    PixelateImage(originalFoodImg, 0);

    input_food.readOnly = true;
    input_food.setAttribute("placeholder", `It's ${newFood.foodName}!`);
    input_food.classList.add("input_food_gameend");

    resultsHeader.innerHTML = '';
    let consolations = document.createElement('div');
    consolations.setAttribute('style', 'font-size: larger; color: #DC2626');
    consolations.textContent = "Oops!";

    let loseStatement = document.createElement('div');

    if(gamemode == 0){
        resultsShareButton.setAttribute('onclick', 'ShareLoss()');
        loseStatement.textContent = `Better luck next time! Try again tomorrow?`;
    }
    else if (gamemode == 1){
        resultsShareButton.setAttribute('onclick', 'NextRound()');
        loseStatement.textContent = `Better luck next time! Let's go to the next round!`;
    }

    resultsHeader.append(consolations);
    resultsHeader.append(loseStatement);

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
function ShareLoss() {
    navigator.clipboard.writeText(`I didn't manage to guess the food. Maybe you can do better? https://feelsfeels.github.io/foodle`);
    resultsShareButtonText.innerText = 'Copied!';
    setTimeout(() => {
        resultsShareButtonText.innerText = 'Share it!'
    }, 2000)
}


function RemovePopup(target) {
    target.firstElementChild.style.opacity = 0;
    target.firstElementChild.style.transform = 'scale(0)';
    setTimeout(() => {
        target.classList.add("hidden");
    }, 200);
    document.body.style.overflow = "auto";
}
function ShowPopup(target) {
    target.classList.remove("hidden");
    target.firstElementChild.style.opacity = 1;
    target.firstElementChild.style.transform = 'scale(1)';

    document.body.style.overflow = "hidden";
}

let originalFoodImg = new Image();

function InitialiseFoodPicture() {
    //Set results screen description text
    resultsPictureDescription.textContent = `It's ${newFood.foodName}!`
    resultsLink.href = newFoodLinks[1];

    //Need to adjust all sizes based on screen size
    let deviceWidth = window.innerWidth;
    let deviceHeight = window.innerHeight;

    originalFoodImg.src = newFoodLinks[0];

    foodImg.src = newFoodLinks[0];
    resultsPicture.src = newFoodLinks[0];

    originalFoodImg.onload = function() {
        //dont choose shitty pics with bad aspect ratio
        let w = originalFoodImg.naturalWidth;
        let h = originalFoodImg.naturalHeight;
        let aspect = w/h;

        if(deviceWidth > 890){
            //assume laptop size ++, full width, looks best here
            foodImg.height = 320;
            foodImg.width = 320 * aspect;
            resultsPicture.height = 237;
            resultsPicture.width = 237 * aspect;
        }
        else if (deviceWidth > 625){
            //assume tablet
            foodImg.height = 280;
            foodImg.width = 280 * aspect;
            resultsPicture.height = 207;
            resultsPicture.width = 207 * aspect;
        }
        else if (deviceWidth > 320) {
            foodImg.height = 200;
            foodImg.width = 200 * aspect;
            resultsPicture.height = 150;
            resultsPicture.width = 150 * aspect;
        }
        
        PixelateImage(originalFoodImg, initialPixelationFactor);
    }
}

function PixelateImage(originalImage, pixelationFactor) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const originalWidth = originalImage.width;
    const originalHeight = originalImage.height;
    const canvasWidth = originalWidth;
    const canvasHeight = originalHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    context.drawImage(originalImage, 0, 0, originalWidth, originalHeight);
    const originalImageData = context.getImageData(0, 0, originalWidth, originalHeight).data;

    if(pixelationFactor >= 4){
        for (let y = 0; y < originalHeight; y += pixelationFactor){
            for (let x = 0; x < originalWidth; x += pixelationFactor){
                const pixelIndexPosition = (x + y * originalWidth) * 4;

                context.fillStyle = `rgba(
                    ${originalImageData[pixelIndexPosition]},
                    ${originalImageData[pixelIndexPosition + 1]},
                    ${originalImageData[pixelIndexPosition + 2]},
                    ${originalImageData[pixelIndexPosition + 3]}                    
                )`;
                context.fillRect(x, y, pixelationFactor, pixelationFactor);
            }
        }
    }
    
    foodImg.src = canvas.toDataURL();

}

function OpenMenu(){
    menuContainer.classList.remove('hidden');
    menuOpened = true;
}


function SetScrollPosition() {
    // let pos = guessedDiv_ingredient.getBoundingClientRect().bottom;
    // let offset = document.documentElement.scrollTop;
    let pos = guessedDiv_ingredient.offsetTop;
    scrollPosition = pos;
}

function PrepareConfetti(duration) {

    let paper = document.getElementsByClassName("paper")[0];

    confettiCanvas.width = paper.offsetWidth;
    confettiCanvas.height = paper.offsetHeight;

    confettiEndTime = Date.now() + duration;
    confettiCanvas.classList.remove('hidden');
    ShootConfetti();    
}

function ShootConfetti(){
    winConfetti({
        particleCount: 5,
        startVelocity: 30,
        spread: 120,
        origin: {
            x: 0.5,
            y: 0.2
        }
    });

    if(Date.now() < confettiEndTime) {
        requestAnimationFrame(ShootConfetti);
    }
    else{
        setTimeout(() => {
            confettiCanvas.classList.add('hidden');
        }, 1200); 
    }
}


function NextRound(){
    gamemode = 1;

    GetRandomFood();
    InitialiseFoodPicture();
    
    //reset hint pills
    guessedDiv_food.innerHTML = '';
    guessedDiv_ingredient.innerHTML = `<span style="flex-basis: 100%; margin-top:-2px;">Ingredients:</span>`;
    guessedDiv_origin.innerHTML = `<span style="flex-basis: 100%; margin-top:-2px;">Country of Origin:</span>`; 
    guessedDiv_method.innerHTML = `<span style="flex-basis: 100%; margin-top:-2px;">Cooking Method:</span>`;

    //reset results popup
    resultsHeader.innerHTML = `<span style="font-size: larger; color: #ff4e3d;">Game in progress...</span>`
    resultsContent.classList.add('hidden');
    RemovePopup(resultsPopup);

    //Guesses
    numberOfGuesses = 0;
    guessCountDisplay.textContent = '0/6';
    guessed_food = [];
    guessed_ingredient = [];
    guessed_origin = [];
    guessed_method = [];
    guessed_course = [];
    mostPreviousGuessElements = [];
    
    //Input
    input_food.readOnly = false;
    input_food.setAttribute("placeholder", 'What food is this...?');
    input_food.classList.remove("input_food_gameend");

}

function Init() {
    //Event listeners
    input_food.addEventListener('keyup', (e) => {
        if(e.key == "Enter"){
            GuessFood(input_food.value);
            CloseFoodSearch();
        }
    });
    input_food.addEventListener('input', (e) => {
        FilterFoodSearch(input_food.value);
    });
    
    infoPopup.addEventListener('click', (e)=>{
        if(e.target.classList.contains("popup")){
            RemovePopup(infoPopup);
        }
    });
    resultsPopup.addEventListener('click', (e)=>{
        if(e.target.classList.contains("popup")){
            RemovePopup(resultsPopup);
        }
    });

    document.addEventListener('click', (e)=> {
        if(menuOpened){
            if(e.target.id !='menu-button'){
                menuContainer.classList.add('hidden');
                menuOpened = false;
            }
        }

        if(!searchResultsDisplayed){
            if(e.target.id == 'input_food'){
                FilterFoodSearch('');
                return;
            }
            
            if(input_food != ''){
                input_food.value = '';
            }
            return;
        }
        CloseFoodSearch()
        input_food.value = '';
        input_food.blur();
    });
    

    SetScrollPosition();
    
    InitialiseFoodPicture();
}





