class Food {
    constructor(foodName, ingredients, origin, method, course){
        this.foodName = foodName;
        this.ingredients = ingredients;
        this.origin = origin;
        this.method = method;
        this.course = course;
    }

}

// let foodObjectList = {
//     "Pizza": [['Cheese', 'Flour', 'Tomato', 'Mozzarella'], ['Italy'], ['Baking'], ['Entree']],
//     "Full English Breakfast": [['Bacon', 'Sausage', 'Egg', 'Tomato', 'Mushroom', 'Bread', 'Beans'], ['England', 'United Kingdom'], ['Frying'], ['Breakfast']]
// }

// let foodList = [
//     'Pizza',
//     'Beef Wellington',
//     'Full English Breakfast',
//     'Tang Yuan',
//     'Shao Bing'
// ]

// let ingredientList = [
//     'Apple',
//     'Blueberry',
//     'Cranberry',
//     'Durian',
//     'Egg',
//     'Flour',
//     'Grapes',
//     'Honey',
//     'Icelandmakelinelongwrapppppppppppppppp',
//     'Tomato',
//     'Cheese',
//     'Mozzarella',
//     'Bacon',
//     'Sausage',
//     'Mushroom',
//     'Bread',
//     'Beans'
// ]

// let originList = [
//     'America',
//     'Brazil',
//     'Canada',
//     'Denmark',
//     'Italy',
//     'United Kingdom',
//     'England'
// ]

// let methodList = [
//     'Baking',
//     'Broiling',
//     'Grilling',
//     'Roasting',
//     'Stewing',
//     'Steaming',
//     'Simmering',
//     'Deep Frying',
//     'Frying',
//     'Sauteing'
// ]

// let courseList = [
//     'Breakfast',
//     'Entree',
//     'Appetiser',
//     'Dessert',
//     'Cookie',
//     'Confectionary',
//     'Pudding',
//     'Salad',
//     'Soup',
//     'Stew',
//     'Side Dish',
//     'Main Course',
// ]

let newFood = new Food('Pizza', ['Cheese', 'Flour', 'Tomato', 'Mozzarella'], ['Italy'], ['Baking'], ['Entree']);



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
	'Caesar Salad'
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
    [ 'Boiled' ],
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
    [ 'Boiled' ],
    [ 'Soup' ]
  ],
  Bingsu: [
    [ 'Ice', 'Red Beans', 'Condensed Milk', 'Fruit Syrup' ],
    [ 'Korea' ],
    [],
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
  'Mustard',     'Pepper'
]
  let originList = [
  'Italy',
  'England',
  'United Kingdom',
  'Japan',
  'Korea',
  'Singapore',
  'Malaysia',
  'Thailand',
  'Philippines',
    'Mexico'
]
let methodList = [
  'Baking',
  'Frying',
  'Simmering',
  'Deep Frying',
  'Mixed',
  'Boiled',
  'Grilling'
]
let courseList = [
  'Entree',
  'Breakfast',
  'Soup',
  'Dessert',
  'Side Dish',
  'Appetiser',
  'Salad'
]
