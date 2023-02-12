class Food {
    constructor(foodName, ingredients, origin, method, course){
        this.foodName = foodName;
        this.ingredients = ingredients;
        this.origin = origin;
        this.method = method;
        this.course = course;
    }
}

let newFood;
let newFoodLinks;

function GetRandomFood(){
	let chosenFood = foodList[Math.floor(foodList.length * Math.random())];
	// chosenFood = 'Fish And Chips';
	newFood = new Food(chosenFood, foodObjectList[chosenFood][0], foodObjectList[chosenFood][1], foodObjectList[chosenFood][2]);
	newFoodLinks = ['src/food_pictures/' + foodLinks[chosenFood][0], 'https://' + foodLinks[chosenFood][1]];
	console.log(newFoodLinks);

	foodList.sort();
}

function GetDailyfood(){
	Shuffle(foodList, 1337);
	
	let day = GetDayDifference();
	let chosenFood = foodList[day % foodList.length];
	newFood = new Food(chosenFood, foodObjectList[chosenFood][0], foodObjectList[chosenFood][1], foodObjectList[chosenFood][2]);
	newFoodLinks = ['src/food_pictures/' + foodLinks[chosenFood][0], 'https://' + foodLinks[chosenFood][1]];
	console.log(newFoodLinks);
	
	foodList.sort();	
}

function Shuffle(array, seed) {
	let m = array.length;
	let i;
	let j;

	while (m) {
		i = Math.floor(Random(seed) * m--);

		j = array[m];
		array[m] = array[i];
		array[i] = j;
		++seed;
	}
	return array;
}
function Random(seed){
	let x = Math.sin(seed++) * 10000;
	return x - Math.floor(x);
}
function GetDayDifference(){
	let myDate = new Date('2023/02/12');
	let yourDate = new Date();
	let diffTime = Math.abs(yourDate - myDate);
	return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}




let foodList = [
  'Pizza',
  'Full English Breakfast',
  'Risotto',
  'Katsudon',
  'Bibimbap',
  'Bak Chor Mee',
  'Hainanese Chicken Rice',
  'Ginseng Chicken Soup',
  'Bingsu',
  'Tortang Talong',
  'Caesar Salad',
  'Ceviche',
  'Aush Reshteh',
  'Aushak',
  'Bolani',
  'Chapli Kabab',
  'Fesenjan',
  'Kesme',
  'Gheimeh',
  'Baklava',
  'Knafeh',
  'Baba Ghanoush',
  'Balaleet',
  'Chakhchoukha',
  'Chebakia',
  'Churros',
  'Frittata',
  'Quiche Lorraine',
  'Faloodeh',
  'Fatayer',
  'Turkish Delight',
  'Australian Meat Pie',
  'Egg Drop Soup',
  'Eiernockerl',
  'Gnocchi',
  'Frankenburger Bratknodel',
  'Goulash',
  'Tafelspitz',
  'Apple Strudel',
  'Apple Pie',
  'Kaiserschmarrn',
  'Germknodel',
  'Kasespatzle',
  'Wiener Schnitzel',
  'Mezzelune',
  'Kuku Sabzi',
  'Dovga',
  'Khachapuri',
  'Ajapsandali',
  'Ghapama',
  'Bangers And Mash',
  'Cauliflower Cheese',
  'Chicken Tikka Masala',
  'Chicken Tikka',
  'Butter Chicken',
  'Coronation Chicken',
  'Devilled Kidneys',
  'Deviled Eggs',
  'Eton Mess',
  'Fish And Chips',
  'Platinum Pudding',
  'Potato Salad',
  'Black Pudding',
  'Kitchener Bun',
  'Palmier',
  'Empanada',
  'Locro',
  'Zabaione',
  'Sorrentinos',
  'Sandwiches De Miga',
  'Lasagna',
  'Moussaka',
  'Tave Kosi',
  'Waterzooi',
  'Chocolate Mousse',
  'Ema Datshi',
  'Feijoada',
  'Ambuyat',
  'Shopska Salad',
  'Fish Amok',
  'Num Banhchok',
  'Samlar Kako',
  'Poutine',
  'Butter Tart',
  'Pastel De Choclo',
  'Stegt Flaesk',
  'Encebollado',
  'Guatitas',
  'Lohikeitto',
  'Beef Bourguignon',
  'Blanquette De Veau',
  'Steak Frites'
]


let foodObjectList = {
  Pizza: [
    [ 'Cheese', 'Flour', 'Tomato', 'Mozzarella' ],
    [ 'Italy' ],
    [ 'Baking' ],
    [ 'Entree' ]
  ],
  'Full English Breakfast': [
    [
      'Bacon',    'Sausage',
      'Egg',      'Tomato',
      'Mushroom', 'Bread',
      'Beans'
    ],
    [ 'England', 'United Kingdom' ],
    [ 'Frying' ],
    [ 'Breakfast' ]
  ],
  Risotto: [
    [
      'Rice',
      'Stock',
      'Broth',
      'Bouillon',
      'Butter',
      'Onion',
      'Cheese',
      'White Wine'
    ],
    [ 'Italy' ],
    [ 'Simmering' ],
    [ 'Entree' ]
  ],
  Katsudon: [
    [
      'Rice',
      'Pork',
      'Chicken',
      'Breadcrumbs',
      'Egg',
      'Soy Sauce',
      'Onion'
    ],
    [ 'Japan' ],
    [ 'Deep Frying' ],
    []
  ],
  Bibimbap: [
    [
      'Rice',   'Gochujang',
      'Chilli', 'Soy Sauce',
      'Egg',    'Beef',
      'Carrot', 'Cucumber',
      'Kimchi'
    ],
    [ 'Korea' ],
    [ 'Mixing' ],
    []
  ],
  'Bak Chor Mee': [
    [
      'Noodles',
      'Fishball',
      'Minced Meat',
      'Chilli',
      'Oil',
      'Vinegar',
      'Pork'
    ],
    [ 'Singapore' ],
    [ 'Boiling' ],
    []
  ],
  'Hainanese Chicken Rice': [
    [ 'Rice', 'Chicken', 'Stock', 'Ginger', 'Sesame Oil', 'Chilli' ],
    [ 'Singapore', 'Malaysia', 'Thailand' ],
    [ 'Steaming' ],
    []
  ],
  'Ginseng Chicken Soup': [
    [ 'Chicken', 'Ginseng', 'Garlic', 'Rice' ],
    [ 'Korea' ],
    [ 'Boiling' ],
    [ 'Soup' ]
  ],
  Bingsu: [
    [ 'Ice', 'Red Beans', 'Condensed Milk', 'Syrup' ],
    [ 'Korea' ],
    [ 'Freezing', 'Assembling' ],
    [ 'Dessert' ]
  ],
  'Tortang Talong': [
    [ 'Egg', 'Eggplant', 'Salt' ],
    [ 'Philippines' ],
    [ 'Grilling', 'Frying' ],
    [ 'Side Dish' ]
  ],
  'Caesar Salad': [
    [
      'Lettuce',
      'Croutons',
      'Lemon',
      'Olive Oil',
      'Egg',
      'Worcestershire Sauce',
      'Anchovies',
      'Garlic',
      'Mustard',
      'Cheese',
      'Pepper'
    ],
    [ 'Mexico' ],
    [ 'Mixing' ],
    [ 'Appetiser', 'Salad' ]
  ],
  Ceviche: [
    [ 'Fish', 'Lime', 'Lemon', 'Chilli', 'Onion', 'Coriander' ],
    [ 'Peru', 'Costa Rica' ],
    [ 'Curing', 'Assembling' ],
    []
  ],
  'Aush Reshteh': [
    [ 'Beans', 'Lentils', 'Noodles', 'Tumeric', 'Broth' ],
    [ 'Iran', 'Afghanistan' ],
    [ 'Simmering', 'Stewing' ],
    [ 'Soup' ]
  ],
  Aushak: [
    [ 'Pasta', 'Chives', 'Tomato', 'Yogurt', 'Mint' ],
    [ 'Afghanistan' ],
    [ 'Boiling' ],
    []
  ],
  Bolani: [
    [ 'Flour', 'Potato', 'Scallion', 'Coriander' ],
    [ 'Afghanistan' ],
    [ 'Frying' ],
    []
  ],
  'Chapli Kabab': [
    [ 'Minced Meat', 'Beef', 'Mutton', 'Flour', 'Chilli', 'Coriander' ],
    [ 'Afghanistan', 'Pakistan', 'India', 'Bangladesh' ],
    [ 'Frying', 'Deep Frying' ],
    []
  ],
  Fesenjan: [
    [
      'Pomegranate',
      'Walnut',
      'Duck',
      'Chicken',
      'Onion',
      'Tumeric',
      'Cinnamon'
    ],
    [ 'Iran' ],
    [ 'Stewing' ],
    [ 'Stew' ]
  ],
  Kesme: [
    [
      'Noodles', 'Flour',
      'Egg',     'Broth',
      'Potato',  'Meat',
      'Tomato'
    ],
    [ 'Turkey' ],
    [ 'Simmering', 'Boiling' ],
    [ 'Soup' ]
  ],
  Gheimeh: [
    [
      'Mutton',
      'Tomato',
      'Split Peas',
      'Onion',
      'Dried Lime',
      'Potato'
    ],
    [ 'Iran' ],
    [ 'Stewing' ],
    [ 'Stew' ]
  ],
  Baklava: [
    [ 'Dough', 'Syrup', 'Pistachio', 'Walnut', 'Butter' ],
    [ 'Turkey' ],
    [ 'Baking' ],
    [ 'Pastry' ]
  ],
  Knafeh: [
    [ 'Dough', 'Cheese', 'Almonds', 'Pistachio', 'Rose Water' ],
    [ 'Turkey', 'Iran', 'Iraq', 'Saudi Arabia' ],
    [ 'Baking' ],
    [ 'Dessert' ]
  ],
  'Baba Ghanoush': [
    [ 'Eggplant', 'Olive Oil', 'Lemon', 'Tahini' ],
    [ 'Israel', 'Jordan', 'Lebanon', 'Palestine', 'Syria' ],
    [ 'Baking', 'Broiling', 'Mixing' ],
    [ 'Appetiser' ]
  ],
  Balaleet: [
    [ 'Noodles', 'Cardamom', 'Rose Water', 'Saffron', 'Egg' ],
    [ 'Iraq', 'Saudi Arabia', 'UAE' ],
    [ 'Frying' ],
    [ 'Breakfast' ]
  ],
  Chakhchoukha: [
    [ 'Bread', 'Chickpea', 'Tomato', 'Onion', 'Garlic', 'Mutton' ],
    [ 'Algeria' ],
    [ 'Stewing' ],
    [ 'Stew' ]
  ],
  Chebakia: [
    [ 'Dough', 'Honey', 'Orange Blossom Water', 'Sesame' ],
    [ 'Algeria', 'Libya', 'Morocco', 'Tunisia', 'Mauritania' ],
    [ 'Deep Frying' ],
    [ 'Dessert' ]
  ],
  Churros: [
    [ 'Dough', 'Cinnamon', 'Sugar' ],
    [ 'Spain', 'Portugal' ],
    [ 'Deep Frying' ],
    []
  ],
  Frittata: [
    [ 'Egg', 'Meat', 'Cheese', 'Vegetables' ],
    [ 'Italy' ],
    [ 'Frying' ],
    []
  ],
  'Quiche Lorraine': [
    [ 'Pastry', 'Egg', 'Cheese', 'Bacon', 'Cream' ],
    [ 'France' ],
    [ 'Baking' ],
    []
  ],
  Faloodeh: [
    [ 'Noodles', 'Syrup', 'Sugar', 'Rose Water', 'Lime' ],
    [ 'Iran' ],
    [ 'Mixing', 'Freezing' ],
    [ 'Dessert' ]
  ],
  Fatayer: [
    [ 'Dough', 'Minced Meat', 'Spinach', 'Cheese' ],
    [ 'Egypt', 'Iraq', 'Lebanon' ],
    [ 'Baking' ],
    []
  ],
  'Turkish Delight': [
    [ 'Starch', 'Sugar', 'Pistachio', 'Dates', 'Rose Water' ],
    [ 'Turkey', 'Iran' ],
    [ 'Boiling', 'Mixing' ],
    [ 'Confection' ]
  ],
  'Australian Meat Pie': [
    [ 'Dough', 'Minced Meat', 'Gravy' ],
    [ 'Australia', 'New Zealand' ],
    [ 'Baking' ],
    []
  ],
  'Egg Drop Soup': [
    [ 'Egg', 'Broth', 'Scallion', 'Tofu' ],
    [ 'China' ],
    [ 'Boiling' ],
    [ 'Soup' ]
  ],
  Eiernockerl: [
    [ 'Flour', 'Egg', 'Milk', 'Butter' ],
    [ 'Austria' ],
    [ 'Boiling', 'Frying' ],
    [ 'Dumpling' ]
  ],
  Gnocchi: [
    [ 'Potato', 'Flour', 'Egg', 'Butter' ],
    [ 'Italy' ],
    [ 'Boiling', 'Frying' ],
    [ 'Entree' ]
  ],
  'Frankenburger Bratknodel': [
    [ 'Dough', 'Minced Meat', 'Paprika', 'Onion', 'Garlic', 'Lard' ],
    [ 'Austria' ],
    [ 'Boiling' ],
    [ 'Dumpling' ]
  ],
  Goulash: [
    [ 'Meat', 'Stock', 'Vegetables', 'Paprika', 'Potato' ],
    [ 'Hungary' ],
    [ 'Boiling' ],
    [ 'Stew', 'Soup' ]
  ],
  Tafelspitz: [
    [ 'Beef', 'Apple', 'Horseradish', 'Broth' ],
    [ 'Austria', 'Germany' ],
    [ 'Boiling' ],
    []
  ],
  'Apple Strudel': [
    [ 'Flour', 'Oil', 'Butter', 'Apple', 'Cinnamon' ],
    [ 'Austria' ],
    [ 'Baking' ],
    [ 'Pastry' ]
  ],
  'Apple Pie': [
    [ 'Apple', 'Flour', 'Sugar', 'Milk', 'Cinnamon', 'Butter' ],
    [ 'England' ],
    [ 'Baking' ],
    [ 'Pie' ]
  ],
  Kaiserschmarrn: [
    [ 'Flour', 'Egg', 'Sugar', 'Milk', 'Butter' ],
    [ 'Austria', 'Hungary' ],
    [ 'Frying' ],
    []
  ],
  Germknodel: [
    [ 'Dough', 'Sugar', 'Butter', 'Poppy Seeds', 'Jam' ],
    [ 'Austria', 'Germany' ],
    [ 'Steaming' ],
    []
  ],
  Kasespatzle: [ [ 'Noodles', 'Cheese', 'Onion' ], [ 'Germany' ], [ 'Baked' ], [
] ],
  'Wiener Schnitzel': [
    [ 'Veal', 'Breadcrumbs' ],
    [ 'Germany', 'Austria' ],
    [ 'Deep Frying' ],
    []
  ],
  Mezzelune: [
    [ 'Dough', 'Egg', 'Olive Oil', 'Cheese', 'Spinach', 'Mushroom' ],
    [ 'Italy', 'Austria' ],
    [ 'Boiling' ],
    []
  ],
  'Kuku Sabzi': [
    [ 'Egg', 'Coriander', 'Scallion', 'Cranberry' ],
    [ 'Iran' ],
    [ 'Frying', 'Steaming' ],
    []
  ],
  Dovga: [
    [
      'Yogurt',    'Flour',
      'Rice',      'Egg',
      'Spinach',   'Dill',
      'Coriander', 'Mint'
    ],
    [ 'Azerbaijan' ],
    [ 'Simmering' ],
    []
  ],
  Khachapuri: [
    [ 'Bread', 'Cheese', 'Egg', 'Flour' ],
    [ 'Georgia' ],
    [ 'Baking' ],
    []
  ],
  Ajapsandali: [
    [ 'Eggplant', 'Onion', 'Garlic', 'Tomato', 'Bell Pepper' ],
    [ 'Georgia', 'Armenia' ],
    [ 'Stewing' ],
    []
  ],
  Ghapama: [
    [ 'Pumpkin', 'Rice', 'Almonds', 'Apple', 'Raisins', 'Dates' ],
    [ 'Armenia' ],
    [ 'Baking' ],
    [ 'Stew' ]
  ],
  'Bangers And Mash': [
    [ 'Sausage', 'Potato', 'Onion', 'Gravy', 'Peas' ],
    [ 'United Kingdom' ],
    [ 'Boiling', 'Frying' ],
    []
  ],
  'Cauliflower Cheese': [
    [ 'Cauliflower', 'Cheese' ],
    [ 'Britain', 'United Kingdom' ],
    [ 'Boiling', 'Baking' ],
    []
  ],
  'Chicken Tikka Masala': [
    [ 'Chicken', 'Yogurt', 'Cream', 'Tomato', 'Chilli' ],
    [ 'India', 'United Kingdom' ],
    [ 'Boiling' ],
    []
  ],
  'Chicken Tikka': [
    [ 'Chicken', 'Yogurt', 'Chilli', 'Ginger', 'Garlic', 'Lemon' ],
    [ 'India', 'Bangladesh', 'Pakistan' ],
    [ 'Baking', 'Grilling' ],
    []
  ],
  'Butter Chicken': [
    [ 'Chicken', 'Butter', 'Yogurt', 'Cream', 'Tomato' ],
    [ 'India' ],
    [ 'Boiling' ],
    []
  ],
  'Coronation Chicken': [
    [ 'Chicken', 'Mayonnaise', 'Curry Powder' ],
    [ 'United Kingdom' ],
    [ 'Mixing' ],
    []
  ],
  'Devilled Kidneys': [
    [ 'Lamb', 'Worcestershire Sauce', 'Mustard', 'Butter', 'Pepper' ],
    [ 'United Kingdom' ],
    [ 'Frying' ],
    []
  ],
  'Deviled Eggs': [
    [ 'Egg', 'Mayonnaise', 'Mustard' ],
    [ 'Italy', 'Spain', 'United States' ],
    [ 'Boiling' ],
    []
  ],
  'Eton Mess': [
    [ 'Berries', 'Meringue', 'Cream', 'Strawberry' ],
    [ 'United Kingdom' ],
    [ 'Baking', 'Mixing' ],
    []
  ],
  'Fish And Chips': [
    [ 'Fish', 'Potato', 'Lemon', 'Mayonnaise' ],
    [ 'United Kingdom', 'England' ],
    [ 'Frying', 'Deep Frying' ],
    []
  ],
  'Platinum Pudding': [
    [ 'Lemon', 'Orange', 'Biscuits', 'Jelly', 'Custard' ],
    [ 'United Kingdom' ],
    [ 'Baking' ],
    []
  ],
  'Potato Salad': [
    [ 'Potato', 'Egg', 'Mayonnaise', 'Onion' ],
    [ 'Germany' ],
    [ 'Boiling', 'Mixing' ],
    []
  ],
  'Black Pudding': [
    [ 'Blood', 'Fat', 'Oats', 'Barley' ],
    [ 'United Kingdom', 'Ireland' ],
    [ 'Mixing' ],
    []
  ],
  'Kitchener Bun': [
    [ 'Dough', 'Jam', 'Cream' ],
    [ 'Australia' ],
    [ 'Baking', 'Deep Frying' ],
    []
  ],
  Palmier: [ [ 'Pastry', 'Butter', 'Sugar' ], [ 'France' ], [ 'Baking' ], [] ],
  Empanada: [
    [ 'Dough', 'Meat', 'Cheese', 'Corn', 'Tomato' ],
    [ 'Spain' ],
    [ 'Baking', 'Frying' ],
    []
  ],
  Locro: [
    [ 'Squash', 'Corn', 'Potato', 'Beef' ],
    [ 'Argentina' ],
    [ 'Boiling' ],
    []
  ],
  Zabaione: [
    [ 'Egg', 'Sugar', 'Wine', 'Custard' ],
    [ 'Italy' ],
    [ 'Simmering', 'Mixing' ],
    []
  ],
  Sorrentinos: [
    [ 'Dough', 'Cheese', 'Ham', 'Spinach' ],
    [ 'Argentina' ],
    [ 'Boiling' ],
    []
  ],
  'Sandwiches De Miga': [
    [
      'Bread',
      'Ham',
      'Egg',
      'Cheese',
      'Tomato',
      'Bell Pepper',
      'Tuna',
      'Lettuce'
    ],
    [ 'Argentina', 'Uruguay' ],
    [ 'Assembling', 'Toasting' ],
    []
  ],
  Lasagna: [
    [ 'Dough', 'Minced Meat', 'Tomato', 'Bechamel', 'Cheese' ],
    [ 'Italy' ],
    [ 'Baking' ],
    []
  ],
  Moussaka: [
    [ 'Eggplant', 'Potato', 'Minced Meat', 'Tomato', 'Bechamel' ],
    [ 'Egypt', 'Greece' ],
    [ 'Baking', 'Frying' ],
    []
  ],
  'Tave Kosi': [
    [ 'Lamb', 'Yogurt', 'Egg', 'Roux', 'Rice' ],
    [ 'Albania' ],
    [ 'Baking' ],
    []
  ],
  Waterzooi: [
    [ 'Fish', 'Chicken', 'Broth', 'Egg', 'Cream', 'Vegetables' ],
    [ 'Belgium' ],
    [ 'Boiling' ],
    []
  ],
  'Chocolate Mousse': [
    [ 'Egg', 'Cream', 'Chocolate' ],
    [ 'France' ],
    [ 'Freezing', 'Mixing' ],
    []
  ],
  'Ema Datshi': [
    [ 'Cheese', 'Chilli', 'Butter' ],
    [ 'Bhutan' ],
    [ 'Simmering' ],
    []
  ],
  Feijoada: [
    [ 'Beans', 'Beef', 'Pork', 'Sausage' ],
    [ 'Brazil', 'Portugal' ],
    [ 'Boiling' ],
    []
  ],
  Ambuyat: [ [ 'Sago' ], [ 'Brunei' ], [], [] ],
  'Shopska Salad': [
    [ 'Tomato', 'Cucumber', 'Onion', 'Bell Pepper', 'Cheese' ],
    [ 'Bulgaria' ],
    [ 'Mixing' ],
    []
  ],
  'Fish Amok': [
    [ 'Fish', 'Coconut Milk', 'Egg', 'Curry', 'Kroeung' ],
    [ 'Cambodia' ],
    [ 'Steaming' ],
    []
  ],
  'Num Banhchok': [
    [ 'Noodles', 'Kroeung', 'Fish', 'Coconut Milk', 'Bean Sprouts' ],
    [ 'Cambodia' ],
    [ 'Boiling' ],
    []
  ],
  'Samlar Kako': [
    [ 'Kroeung', 'Fish', 'Rice', 'Vegetables', 'Meat' ],
    [ 'Cambodia' ],
    [ 'Boiling' ],
    []
  ],
  Poutine: [
    [ 'Potato', 'Gravy', 'Cheese' ],
    [ 'Canada' ],
    [ 'Deep Frying' ],
    []
  ],
  'Butter Tart': [
    [ 'Pastry', 'Butter', 'Sugar', 'Syrup', 'Egg' ],
    [ 'Canada' ],
    [ 'Baking' ],
    []
  ],
  'Pastel De Choclo': [
    [ 'Corn', 'Minced Meat', 'Raisins', 'Olives', 'Onion' ],
    [ 'Chile' ],
    [ 'Baking' ],
    []
  ],
  'Stegt Flaesk': [
    [ 'Potato', 'Pork', 'Coriander', 'Cream' ],
    [ 'Denmark' ],
    [ 'Frying' ],
    []
  ],
  Encebollado: [ [ 'Fish', 'Cassava', 'Onion' ], [ 'Ecuador' ], [ 'Boiling' ], [
] ],
  Guatitas: [
    [ 'Tripe', 'Peanut', 'Potato', 'Lemon' ],
    [ 'Ecuador' ],
    [ 'Boiling', 'Brining' ],
    []
  ],
  Lohikeitto: [
    [ 'Salmon', 'Potato', 'Leek', 'Cream' ],
    [ 'Finland' ],
    [ 'Boiling' ],
    []
  ],
  'Beef Bourguignon': [
    [ 'Beef', 'Wine', 'Stock', 'Lard', 'Onion', 'Mushroom' ],
    [ 'France' ],
    [ 'Stewing' ],
    []
  ],
  'Blanquette De Veau': [
    [ 'Veal', 'Stock', 'Mirepoix', 'Butter', 'Flour' ],
    [ 'France' ],
    [ 'Boiling' ],
    []
  ],
  'Steak Frites': [
    [ 'Beef', 'Potato', 'Hollandaise Sauce' ],
    [ 'Belgium', 'France' ],
    [ 'Frying' ],
    []
  ]
}




let ingredientList = ['Cheese','Flour','Tomato','Mozzarella','Bacon','Sausage','Egg','Mushroom','Bread','Beans','Rice','Stock','Broth','Bouillon','Butter','Onion','White Wine','Pork','Chicken','Breadcrumbs','Soy Sauce','Gochujang','Chilli','Beef','Carrot','Cucumber','Kimchi','Noodles','Fishball','Minced Meat','Oil','Vinegar','Ginger','Sesame Oil','Ginseng','Garlic','Ice','Red Beans','Condensed Milk','Syrup','Eggplant','Salt','Lettuce','Croutons','Lemon','Olive Oil','Worcestershire Sauce','Anchovies','Mustard','Pepper','Fish','Lime','Coriander','Lentils','Tumeric','Pasta','Chives','Yogurt','Mint','Potato','Scallion','Mutton','Pomegranate','Walnut','Duck','Cinnamon','Meat','Split Peas','Dried Lime','Dough','Pistachio','Almonds','Rose Water','Tahini','Cardamom','Saffron','Chickpea','Honey','Orange Blossom Water','Sesame','Sugar','Vegetables','Pastry','Cream','Spinach','Starch','Dates','Gravy','Tofu','Milk','Paprika','Lard','Apple','Horseradish','Poppy Seeds','Jam','Veal','Mushrooms','Cranberry','Dill','Bell Pepper','Pumpkin','Raisins','Peas','Cauliflower','Mayonnaise','Curry Powder','Lamb','Berries','Meringue','Strawberry','Orange','Biscuits','Jelly','Custard','Blood','Fat','Oats','Barley','Corn','Squash','Wine','Ham','Tuna','Bechamel']

let originList = 
[
  'Italy',       'England',       'United Kingdom', 'Japan',
  'Korea',       'Singapore',     'Malaysia',       'Thailand',
  'Philippines', 'Mexico',        'Peru',           'Costa Rica',
  'Iran',        'Afghanistan',   'Pakistan',       'India',
  'Bangladesh',  'Turkey',        'Iraq',           'Saudi Arabia',
  'Israel',      'Jordan',        'Lebanon',        'Palestine',
  'Syria',       'UAE',           'Algeria',        'Libya',
  'Morocco',     'Tunisia',       'Mauritania',     'Spain',
  'Portugal',    'France',        'Egypt',          'Australia',
  'New Zealand', 'China',         'Austria',        'Hungary',
  'Germany',     'Azerbaijan',    'Georgia',        'Armenia',
  'Britain',     'United States', 'Ireland',        'Argentina',
  'Uruguay',     'Greece',        'Albania',        'Belgium',
  'Bhutan',      'Brazil',        'Brunei',         'Bulgaria',
  'Cambodia',    'Canada',        'Chile',          'Denmark',
  'Ecuador',     'Finland'
]


let methodList = [
  'Baking',     'Frying',
  'Simmering',  'Deep Frying',
  'Mixing',     'Boiling',
  'Steaming',   'Freezing',
  'Assembling', 'Grilling',
  'Curing',     'Stewing',
  'Broiling',   'Baked',
  'Toasting',   'Brining'
]


let courseList = 
[
  'Entree',    'Breakfast',
  'Soup',      'Dessert',
  'Side Dish', 'Appetiser',
  'Salad',     'Stew',
  'Pastry',    'Confection',
  'Dumpling',  'Pie'
]



// let ingredientList = [
// 'Cheese',               'Flour',                'Tomato',
// 'Mozzarella',           'Bacon',                'Sausage',
// 'Egg',                  'Mushroom',             'Bread',
// 'Beans',                'Rice',                 'Stock',
// 'Broth',                'Bouillon',             'Butter',
// 'Onion',                'White Wine',           'Pork',
// 'Chicken',              'Breadcrumbs',          'Soy Sauce',
// 'Gochujang',            'Chilli',               'Beef',
// 'Carrot',               'Cucumber',             'Kimchi',
// 'Noodles',              'Fishball',             'Minced Meat',
// 'Oil',                  'Vinegar',              'Ginger',
// 'Sesame Oil',           'Ginseng',              'Garlic',
// 'Ice',                  'Red Beans',            'Condensed Milk',
// 'Syrup',                'Eggplant',             'Salt',
// 'Lettuce',              'Croutons',             'Lemon',
// 'Olive Oil',            'Worcestershire Sauce', 'Anchovies',
// 'Mustard',              'Pepper',               'Fish',
// 'Lime',                 'Coriander',            'Lentils',
// 'Tumeric',              'Pasta',                'Chives',
// 'Yogurt',               'Mint',                 'Potato',
// 'Green Onion',          'Mutton',               'Pomegranate',
// 'Walnut',               'Duck',                 'Cinnamon',
// 'Meat',                 'Split Peas',           'Dried Lime',
// 'Dough',                'Pistachio',            'Almonds',
// 'Rose Water',           'Tahini',               'Cardamom',
// 'Saffron',              'Chickpea',             'Honey',
// 'Orange Blossom Water', 'Sesame',               'Sugar',
// '',                     'Vegetables',           'Pastry',
// 'Cream',                'Spinach',              'Starch',
// 'Dates'
// ]