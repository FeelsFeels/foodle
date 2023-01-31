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
	// chosenFood = 'Kesme';
	newFood = new Food(chosenFood, foodObjectList[chosenFood][0], foodObjectList[chosenFood][1], foodObjectList[chosenFood][2]);
	newFoodLinks = ['src/food_pictures/' + foodLinks[chosenFood][0], 'https://' + foodLinks[chosenFood][1]];
	console.log(newFoodLinks);
}




let foodList = [
  'Pizza',                  'Full English Breakfast',
  'Risotto',                'Katsudon',
  'Bibimbap',               'Bak Chor Mee',
  'Hainanese Chicken Rice', 'Ginseng Chicken Soup',
  'Bingsu',                 'Tortang Talong',
  'Caesar Salad',           'Ceviche',
  'Aush Reshteh',           'Aushak',
  'Bolani',                 'Chapli Kabab',
  'Fesenjan',               'Kesme',
  'Gheimeh'
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
    [ 'Mixed' ],
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
    [
      'Rice',
      'Chicken',
      'Stock',
      'Ginger',
      'Sesame Oil',
      'Chilli',
      'Cucumber'
    ],
    [ 'Singapore', 'Malaysia', 'Thailand' ],
    [],
    []
  ],
  'Ginseng Chicken Soup': [
    [ 'Chicken', 'Ginseng', 'Garlic', 'Rice' ],
    [ 'Korea' ],
    [ 'Boiling' ],
    [ 'Soup' ]
  ],
  Bingsu: [
    [ 'Ice', 'Red Beans', 'Condensed Milk', 'Fruit Syrup' ],
    [ 'Korea' ],
    [ 'Assembling' ],
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
    [ 'Mixed' ],
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
    [ 'Flour', 'Potato', 'Green Onion', 'Coriander' ],
    [ 'Afghanistan' ],
    [ 'Frying' ],
    []
  ],
  'Chapli Kabab': [
    [ 'Minced Meat', 'Beef', 'Mutton', 'Flour', 'Chilli', 'Coriander' ],
    [ 'Afghanistan', 'Pakistan', 'India', 'Bangaladesh' ],
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
  ]
}
let ingredientList = [
  'Cheese',      'Flour',                'Tomato',
  'Mozzarella',  'Bacon',                'Sausage',
  'Egg',         'Mushroom',             'Bread',
  'Beans',       'Rice',                 'Stock',
  'Broth',       'Bouillon',             'Butter',
  'Onion',       'White Wine',           'Pork',
  'Chicken',     'Breadcrumbs',          'Soy Sauce',
  'Gochujang',   'Chilli',               'Beef',
  'Carrot',      'Cucumber',             'Kimchi',
  'Noodles',     'Fishball',             'Minced Meat',
  'Oil',         'Vinegar',              'Ginger',
  'Sesame Oil',  'Ginseng',              'Garlic',
  'Ice',         'Red Beans',            'Condensed Milk',
  'Fruit Syrup', 'Eggplant',             'Salt',
  'Lettuce',     'Croutons',             'Lemon',
  'Olive Oil',   'Worcestershire Sauce', 'Anchovies',
  'Mustard',     'Pepper',               'Fish',
  'Lime',        'Coriander',            'Lentils',
  'Tumeric',     'Pasta',                'Chives',
  'Yogurt',      'Mint',                 'Potato',
  'Green Onion', 'Mutton',               'Pomegranate',
  'Walnut',      'Duck',                 'Cinnamon',
  'Meat',        'Split Peas',           'Dried Lime'
]
let originList = [
  'Italy',          'England',
  'United Kingdom', 'Japan',
  'Korea',          'Singapore',
  'Malaysia',       'Thailand',
  'Philippines',    'Mexico',
  'Peru',           'Costa Rica',
  'Iran',           'Afghanistan',
  'Pakistan',       'India',
  'Bangaladesh',    'Turkey'
]
let methodList = [
  'Baking',     'Frying',
  'Simmering',  'Deep Frying',
  'Mixed',      'Boiling',
  'Assembling', 'Grilling',
  'Curing',     'Stewing'
]
let courseList = [
  'Entree',    'Breakfast',
  'Soup',      'Dessert',
  'Side Dish', 'Appetiser',
  'Salad',     'Stew'
]
